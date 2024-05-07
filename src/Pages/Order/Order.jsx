import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useData from "../../Hooks/useData";
import Swal from "sweetalert2";

const Order = () => {
  const orderItem = useLoaderData();
  const navigate = useNavigate()
  const { name, price, image } = orderItem || {};
  const { user } = useContext(AuthContext);
  const [quantity, setQunatity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const myAxios = useData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      email: user?.email,
      customerName: user?.displayName,
      itemName: name,
      image,
      price,
      quantity: parseInt(quantity),
      purchaseDate,
    };

    const res = await myAxios.post("/userorders", userInfo);
    if(res.data.insertedId){
      Swal.fire({
        title: "Congratulations!",
        text: "your order is successful",
        icon: "success",
      });
    }
    e.target.reset()
    navigate('/menu')
  };

  return (
    <div className="container mx-auto px-4 mt-10 ">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Please fill the form To buy your Food
      </h2>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="foodName"
            className="block text-sm font-medium text-gray-700"
          >
            Food Name
          </label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            readOnly
            defaultValue={name}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image url"
            className="block text-sm font-medium text-gray-700"
          >
            Image url
          </label>
          <input
            type="text"
            id="image"
            name="image"
            readOnly
            defaultValue={image}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={price}
            readOnly
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            min="0"
            id="quantity"
            name="quantity"
            required
            onChange={(e) => setQunatity(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="buyerName"
            className="block text-sm font-medium text-gray-700"
          >
            Buyer Name
          </label>
          <input
            type="text"
            id="buyerName"
            name="buyerName"
            defaultValue={`${user?.displayName ? user.displayName : "null"}`}
            readOnly
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="buyerEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Buyer Email
          </label>
          <input
            type="email"
            id="buyerEmail"
            name="buyerEmail"
            defaultValue={user?.email}
            readOnly
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="buyingDate"
            className="block text-sm font-medium text-gray-700"
          >
            Buying Date
          </label>
          <input
            type="date"
            id="buyingDate"
            name="buyingDate"
            onChange={(e) => setPurchaseDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
          >
            Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
