/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./add.css";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

interface IUseFetch {
  sendRequest: (customData?: any) => Promise<void>;
  data: any;
  loading: boolean;
  error: Error | null;
}
const Add = () => {
  const { sendRequest, data, loading, error }: IUseFetch = useFetch(
    "/api/food/add",
    "post"
  );
  const [image, setImage] = useState("" as any);
  const [datas, setDatas] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
    countInStock: "",
  });

  const onChangeHandler = (e: any) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", datas.name);
    formData.append("description", datas.description);
    formData.append("category", datas.category);
    formData.append("price", datas.price);
    formData.append("countInStock", datas.countInStock);
    formData.append("image", image);
    await sendRequest(formData);
    if (data) {
      setDatas({
        name: "",
        description: "",
        category: "Salad",
        price: "",
        countInStock: "",
      });
      setImage("");
      toast.success(data?.message);
    }
    if (error) toast.error(error.message);
  };
  useEffect(() => {}, [datas]);
  return (
    <div className="add">
      {loading && <div>Loading...</div>}
      <h1 style={{ marginBottom: "20px" }}>Add Product</h1>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e: any) => setImage(e.target.files[0])}
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            onChange={onChangeHandler}
            value={datas.name}
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            placeholder="Write description here..."
            rows={6}
            required
            name="description"
            onChange={onChangeHandler}
            value={datas.description}
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select name="category" required onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="Number"
              placeholder="200"
              required
              name="price"
              onChange={onChangeHandler}
              value={datas.price}
            />
          </div>
          <div className="add-price flex-col">
            <p>No of Stocks</p>
            <input
              type="Number"
              placeholder="100"
              required
              name="countInStock"
              onChange={onChangeHandler}
              value={datas.countInStock}
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
