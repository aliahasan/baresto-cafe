import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import useData from "../Hooks/useData";
import Loading from "../Components/Loading";
import { AuthContext } from "../Providers/AuthProvider";
import Table from "../Components/Table";

const MyItems = () => {
  const myAxios = useData();
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["xyz"],
    queryFn: async () => {
      const response = await myAxios.get(`/useritem/?email=${email}`);
      return response;
    },
  });
  if (isPending)
    return (
      <div>
        <Loading></Loading>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;
  console.log(data.data);

  return (
    <div>
     <div className="overflow-x-auto">
  <table className="table max-w-[80vw] mx-auto">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Made by</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody >
    {
        data.data?.map(item => <Table key={item._id} data={item}></Table>)
    }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyItems;
