/* eslint-disable react/prop-types */
import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  console.log(data);
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
            <div className="font-bold max-w-[250px]">{data.category}</div>
            <div className="text-sm opacity-50">{data.food_origin}</div>
          </div>
        </div>
      </td>
      <td>{data.name}</td>
      <td>{data.made_by}</td>
      <td>{data.price}</td>
      <td>{data.quantity}</td>
      <td>
        <Link to={``}>
          <FaEdit className="text-2xl"></FaEdit>
        </Link>
      </td>
    </tr>
  );
};

export default Table;
