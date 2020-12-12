import React from "react";
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";

const Layouts = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="d-flex">
        <section className="item">
          <SideBar className="sider-bar-layout" />
        </section>
        <section>{props.children}</section>
      </div>
    </React.Fragment>
  );
};
export default Layouts;
