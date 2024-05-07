import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useData from "../Hooks/useData";
import Swal from "sweetalert2";

const UpdateData = () => {
  const data = useLoaderData();
  const navigate = useNavigate()
  const myAxios = useData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    image,
    category,
    description,
    quantity,
    price,
    food_origin,
    made_by,
  } = data;

  const handleSubmit = async (e) => {
    const form = e.target;
    const updateData = {
      name: form.name.value,
      image: form.image.value,
      category: form.category.value,
      description: form.description.value,
      quantity: parseInt(form.quantity.value),
      price: parseInt(form.price.value),
      food_origin: form.food_origin.value,
      made_by: form.made_by.value,
    };
    e.preventDefault();
    const response = await myAxios.put(`/update/${_id}`, updateData);
    const responseData = await response.data;
    if(responseData.modifiedCount  > 0){
        Swal.fire({
            title: "Success",
            text: "Data updated successfully",
            icon: "success",
          });

          navigate('/myitems')
    }
  };

  return (
    <div>
      <div className="text-2xl md:text-4xl lg:text-5xl text-center py-4">
        <h1 className=" pb-8">Update you data</h1>
      </div>
      <div className=" container mx-auto max-w-6xl flex justify-center items-center">
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter email</span>
              </label>
              <input
                type="email"
                placeholder="Enter who made this"
                className="input input-bordered"
                defaultValue={user?.email}
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Food name"
                className="input input-bordered"
                required
                name="name"
                defaultValue={name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="url"
                placeholder="Enter image url"
                className="input input-bordered"
                required
                name="image"
                defaultValue={image}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Enter category"
                className="input input-bordered"
                required
                name="category"
                defaultValue={category}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">
                <span className="label-text">Enter description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Enter some description"
                name="description"
                defaultValue={description}
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quatity</span>
              </label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="input input-bordered"
                required
                name="quantity"
                defaultValue={quantity}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                min={1}
                type="number"
                placeholder="Enter price"
                className="input input-bordered"
                required
                name="price"
                defaultValue={price}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
              <input
                type="text"
                placeholder="Enter origin"
                className="input input-bordered"
                required
                name="food_origin"
                defaultValue={food_origin}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Made by</span>
              </label>
              <input
                type="text"
                placeholder="Enter who made this"
                className="input input-bordered"
                required
                name="made_by"
                defaultValue={made_by}
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateData;
