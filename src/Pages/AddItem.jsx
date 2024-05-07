import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useData from "../Hooks/useData";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const myAxios = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const food_origin = form.food_origin.value;
    const made_by = form.made_by.value;

    const data = {
      email,
      name,
      image,
      category,
      description,
      quantity,
      price,
      food_origin,
      made_by,
    };

    myAxios.post("/additem", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success",
          text: "item added successfully",
          icon: "success",
        });
      }
    });

    e.target.reset();
  };

  return (
    <div>
      <div className="text-2xl md:text-4xl lg:text-5xl text-center py-4">
        <h1 className=" pb-8">Add a food Item</h1>
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
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
