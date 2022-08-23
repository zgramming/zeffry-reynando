import React from "react";
import styled from "./css/custom_footer.module.css";
type Param = {
  children?: React.ReactNode;
};

const CustomFooter = (props: Param) => {
  return (
    <div className={`d-flex flex-column align-items-center`}>
      <div className={`${styled.title} mb-3`}>Where you can reach me ?</div>
      <div className={`d-flex justify-content-center w-100`}>
        <a href="#" className={`${styled.icons} mx-5`}>
          <i className={`fab fa-github`}></i>
        </a>
        <a href="#" className={`${styled.icons} mx-5`}>
          <i className={`far fa-envelope`}></i>
        </a>
        <a href="#" className={`${styled.icons} mx-5`}>
          <i className={`fab fa-telegram`}></i>
        </a>
        <a href="#" className={`${styled.icons} mx-5`}>
          <i className={`fab fa-linkedin`}></i>
        </a>
      </div>
    </div>
  );
};

export default CustomFooter;
