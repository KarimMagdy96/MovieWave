import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Root(props) {
  return (
    <>
      <Header />

      <section className="myRoot ">
        <Outlet></Outlet>
      </section>
      <Footer />
    </>
  );
}
