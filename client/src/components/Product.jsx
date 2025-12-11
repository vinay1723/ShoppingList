import HalfRating from "./Rating";
import { addToList } from "../apis/helpers";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();
  async function handleAddtoList(product) {
    await addToList(product);
    navigate("/mylist");
  }
  return (
    <div className="group relative flex flex-col shrink-0 h-full  p-2 shadow">
      <img
        src={product.images[0]}
        alt="Front of men&#039;s Basic Tee in black."
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="text-gray-700 mt-2">
              <p className="text-base font-semibold text-gray-900 leading-snug">
                {product.title}
              </p>
            </h3>
            <p className="mt-2 text-lg font-medium text-red-600 ">
              ${product.price}
            </p>
          </div>
          <p className="my-2 text-sm text-gray-500">{product.description}</p>
          <p className="my-2 text-sm text-gray-500">
            {product.availabilityStatus}
          </p>
          <div className="flex justify-between items-center w-full">
            <p className="mt-1 text-base text-gray-500 flex gap-1">
              {product.rating}
              <HalfRating defaultValue={product.rating} />
            </p>
            <button
              type="button"
              className="p-2 border-black mt-3 px-3 py-2  bg-indigo-600 text-white font-medium rounded-lg shadow-sm 
hover:bg-indigo-700   active:bg-indigo-800 transition text-sm lg:text-base"
              onClick={() => handleAddtoList(product)}
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
