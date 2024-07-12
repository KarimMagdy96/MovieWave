import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { RequiredAuth } from "./../../Context/RequiredAuth";
export default function Root(props) {
  return (
    <>
      <Header />

      <section className="myRoot ">
        <RequiredAuth>
          <Outlet></Outlet>
        </RequiredAuth>
      </section>
      <Footer />
    </>
  );
}
