import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apis/helpers";
import { useDispatch } from "react-redux";
import { setUser } from "../globalSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { email, password };
    const data = await login(user);
    dispatch(setUser(data.newUser));
    navigate("/");
  }

  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
              Login
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                class="w-full bg-blue-600 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
