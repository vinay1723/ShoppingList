import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../apis/helpers";
import { setUser } from "../globalSlice";
import { useNavigate } from "react-router";

function Navbar() {
  const user = useSelector((state) => state.data.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleLogout() {
    console.log("loggedout");
    const res = await logout();
    if (res.status === "success") dispatch(setUser(null));
    navigate("/login");
  }
  return (
    <nav className="block w-full  px-4 py-2 mx-auto text-white bg-white shadow-md rounded-md lg:px-8 lg:py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <Link
          to="/"
          className="mr-4 block cursor-pointer py-1.5 text-lg text-slate-800 font-semibold"
        >
          Home
        </Link>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1  gap-x-2 text-slate-600">
              <Link to="/" className="flex items-center ">
                products
              </Link>
            </li>
            <li className="flex items-center p-1  gap-x-2 text-slate-600">
              <Link to="mylist" className="flex items-center ">
                Mylist
              </Link>
            </li>
            {!user && (
              <li className="flex items-center p-1  gap-x-2 text-slate-600">
                <Link
                  to="signup"
                  className="flex items-center bg-blue-600 text-white px-3 py-1 font-sans font-medium rounded-xl"
                >
                  Signup
                </Link>
              </li>
            )}
            {!user && (
              <li className="flex items-center p-1  gap-x-2 text-slate-600">
                <Link
                  to="login"
                  className="flex items-center bg-blue-600 text-white px-3 py-1 font-sans font-medium rounded-xl"
                >
                  login
                </Link>
              </li>
            )}
            {user && (
              <li className="flex items-center justify-baseline p-1  gap-x-2 text-slate-600">
                <button
                  className="flex items-center justify-center bg-blue-600 text-white px-3 py-1 font-sans font-medium rounded-xl "
                  onClick={handleLogout}
                >
                  logout
                </button>
                <h3>{user.email.slice(0, 5)}</h3>
              </li>
            )}
          </ul>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
