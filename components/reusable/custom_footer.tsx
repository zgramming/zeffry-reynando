import React from "react";
import styled from "./css/custom_footer.module.css";
type Param = {
  children?: React.ReactNode;
};

const CustomFooter = (props: Param) => {
  const github = "https://github.com/zgramming";
  const mail = "zeffry.reynando@gmail.com";
  const telegram = "https://t.me/zeffry_reynando";
  const linkedin = "https://www.linkedin.com/in/zeffry-reynando/";
  return (
    <div className={`d-flex flex-column align-items-center`}>
      <div className={`${styled.title} mb-3`}>Where you can reach me ?</div>
      <div className={`d-flex justify-content-center w-100`}>
        <a
          href={github}
          rel="noreferrer"
          target="_blank"
          className={`${styled.icons}`}
        >
          <i className={`fab fa-github`}></i>
        </a>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className={`${styled.icons}`}
          onClick={() => window.open(`mailto:${mail}`)}
        >
          <i className={`far fa-envelope`}></i>
        </a>
        <a
          href={telegram}
          rel="noreferrer"
          target="_blank"
          className={`${styled.icons}`}
        >
          <i className={`fab fa-telegram`}></i>
        </a>
        <a
          href={linkedin}
          rel="noreferrer"
          target="_blank"
          className={`${styled.icons}`}
        >
          <i className={`fab fa-linkedin`}></i>
        </a>
      </div>
    </div>
  );
};

export default CustomFooter;
