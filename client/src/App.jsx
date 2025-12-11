import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const AppLayout = lazy(() => import("./utils/AppLayout"));
const Products = lazy(() => import("./pages/Products"));
const ShoppingList = lazy(() => import("./pages/ShoppinList"));
const EditProduct = lazy(() => import("./components/EditProduct"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Products />} />
              <Route path="mylist" element={<ShoppingList />} />
              <Route path="mylist/:id" element={<EditProduct />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
