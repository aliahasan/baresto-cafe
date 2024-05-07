/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaDeleteLeft } from "react-icons/fa6";

const Table2 = ({ data, handleDelte }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask   w-20 h-20 rounded">
              <img src={data.image} />
            </div>
          </div>
          <div>
            <div className="font-bold max-w-[250px]">{data.itemName}</div>
            <div className="text-sm opacity-50">{data.food_origin}</div>
          </div>
        </div>
      </td>
      <td>{data.email}</td>
      <td>{data.purchaseDate}</td>
      <td>{data.price}</td>
      <td>{data.quantity}</td>
      <td>
        <button onClick={() => handleDelte(data._id)}>
          <AiOutlineDelete className="text-2xl" />
        </button>
      </td>
    </tr>
  );
};

export default Table2;
