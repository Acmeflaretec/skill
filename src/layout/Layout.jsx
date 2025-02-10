import { Outlet } from "react-router";
import NavBar from "../component/header/NavBar";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <>
      <div className="w-full  h-screen">
        <NavBar />

        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
