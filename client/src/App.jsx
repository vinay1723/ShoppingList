import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./utils/AppLayout";
import Products from "./pages/Products";
import ShoppinList from "./pages/ShoppinList";
import EditProduct from "./components/EditProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index path="/" element={<Products />}></Route>
            <Route path="mylist" element={<ShoppinList />}></Route>
            <Route path="mylist/:id" element={<EditProduct />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
