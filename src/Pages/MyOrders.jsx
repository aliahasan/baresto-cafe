import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useData from "../Hooks/useData";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Components/Loading";
import Table2 from "../Components/Table2";
import NoData from "../Components/NoData";

const MyOrders = () => {
  const myAxios = useData();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["myorders"],
    queryFn: async () => {
      const response = await myAxios.get(`/usersorderitems/?email=${email}`);
      return response;
    },
  });

  const handleDelte = (id) => {
    myAxios.delete(`/cancelorders/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  if (isPending)
    return (
      <div>
        <Loading></Loading>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  if (data.data.length < 1) {
    return (
      <div className="container flex justify-center items-center h-[70vh] overflow-hidden">
        <NoData></NoData>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table max-w-[80vw] mx-auto">
          <thead>
            <tr>
              <th>Image</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item) => (
              <Table2
                key={item._id}
                data={item}
                handleDelte={handleDelte}
              ></Table2>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
