import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Navbar /> */}
      {/* <Products /> */}
      {/* <ShoppinList /> */}
      {/* <EditProduct /> */}
    </div>
  );
}

export default AppLayout;
