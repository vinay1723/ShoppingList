import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../apis/helpers";
import { setMyList } from "../globalSlice";

function ListItem({ product }) {
  const dispatch = useDispatch();
  async function handleDelete(id) {
    const data = await deleteProduct(id);
    dispatch(setMyList(data.products));
  }
  return (
    <div className="w-full bg-white rounded-xl shadow p-4 flex items-start gap-4 h-50 sm:h-40">
      {/* Image */}

      <div className="w-32 h-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between w-full">
        {/* Title + Rating */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base sm:text-lg font-semibold">
              {product.title}
            </h3>
            <span className="text-yellow-500 font-medium">
              ★ {product.rating}
            </span>
          </div>

          {/* <p className="text-sm text-gray-500">
            Size: {product.sizes.join(", ") || "N/A"} • Color:{" "}
            {product.colors.join(", ")}
          </p> */}

          <p className="text-sm text-gray-400 mt-1 line-clamp-1">
            {product.description}
          </p>

          <p className="text-md font-semibold mt-1">${product.price}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-end mt-2">
          <Link
            to={product._id}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
          >
            Edit
          </Link>

          <button
            onClick={() => handleDelete(product._id)}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
          >
            Delete
          </button>

          {/* <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
