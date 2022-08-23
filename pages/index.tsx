import type { NextPage } from "next";
import { Button } from "react-bootstrap";
import MostUsedTechnology from "../components/home/most_used_technology";
import styled from "../components/home/css/home.module.css";
import MyStatistics from "../components/home/my_statistics";

const Home: NextPage = () => {
  return (
    <div className={`${styled.layout_container} px-5`}>
      <div className={`${styled.title}`}>Zeffry Reynando</div>
      <div className={`${styled.subtitle}`}>
        Software Developer & Open Source Lover
      </div>
      <div className={`${styled.description}`}>
        Getting to know the world of coding from vocational high school,
        Starting from here, I like to make applications that can solve problems
        in the surrounding environment. With experience in making mobile
        applications using <span className="fw-bold">Flutter</span> accompanied
        by website development using&nbsp;
        <span className="fw-bold">Codeigniter</span> and&nbsp;
        <span className="fw-bold">Laravel</span>, I hope to make many other
        useful applications
      </div>
      <div className="mx-auto my-5">
        <Button variant="danger" className={`${styled.btn_latest_cv}`}>
          <i className="fas fa-file-pdf"></i>
          <span className="mx-5">Latest CV</span>
        </Button>
      </div>
      <MyStatistics />
      <MostUsedTechnology />
    </div>
  );
};

export default Home;
