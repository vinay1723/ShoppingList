// import ListItem from "@mui/material/ListItem";
import ListItem from "../components/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { setMyList } from "../globalSlice";
import { useEffect } from "react";

function ShoppinList() {
  const products = useSelector((state) => state.data.mylist);
  const dispatch = useDispatch();
  useEffect(function () {
    async function getMyList() {
      try {
        const res = await fetch(
          "https://shopping-list-serv.vercel.app/api/v1/listproducts/getlistproducts",
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!res.ok) {
          throw new Error("data not found");
        }
        const data = await res.json();
        dispatch(setMyList(data.products));
      } catch (err) {
        console.log(err.message);
      }
    }

    getMyList();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-center m-3 font-bold text-3xl font-sans">My List</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 auto-rows-fr sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
        {products.length > 0 &&
          products.map((product, ind) => (
            <ListItem key={ind} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ShoppinList;
