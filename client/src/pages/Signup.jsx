import { Link } from "react-router-dom";
import { useState } from "react";
import { signup } from "../apis/helpers.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../globalSlice.js";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { email, password, confirmPassword };
    const data = await signup(user);
    dispatch(setUser(data.newUser));
    navigate("/");
  }

  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
              Create an account
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
                  required="true"
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
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
