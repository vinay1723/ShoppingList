import { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../globalSlice";
import { useNavigate } from "react-router";

function Products() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.products);
  const user = useSelector((state) => state.data.user);
  const navigate = useNavigate();

  if (!user) {
    navigate("/signup");
  }

  useEffect(function () {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "http://localhost:3000/api/v1/products/getproducts"
        );

        if (!res.status) {
          throw new Error("data not found");
        }
        const data = await res.json();

        dispatch(setProducts(data.products));
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      {products.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 auto-rows-fr sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
