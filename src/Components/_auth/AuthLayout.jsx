import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import "./authLayout.css";
export default function AuthLayout(prop) {
  return (
    <>
      <section className="authMain">
        <Outlet></Outlet>
      </section>
    </>
  );
}
