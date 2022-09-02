import type { GetStaticProps } from "next";
import axios from "axios";
import { Button } from "react-bootstrap";

import styled from "../components/home/css/home.module.css";
import MostUsedTechnology from "../components/home/most_used_technology";
import MyStatistics from "../components/home/my_statistics";
import { MostUsedTechnologyInterface } from "../interface/most_used_technology/most_used_technology_interface";
import { MyStatisticsInterface } from "../interface/my_statistics/my_statistics_interface";
import { ProfileInterface } from "../interface/profile/profile_interface";

type Param = {
  profile: ProfileInterface;
  statistics: MyStatisticsInterface;
  mostUsedTechnology: MostUsedTechnologyInterface[];
  children?: React.ReactNode;
};

const Home = (props: Param) => {
  const convertDescriptionIntoHtml = (description: string) => {
    return { __html: description };
  };

  return (
    <>
      <div className={`${styled.layout}`}>
        <div className={`${styled.title}`}>{props.profile.name}</div>
        <div className={`${styled.subtitle} mb-5`}>{props.profile.motto}</div>
        <div
          className={`${styled.description}`}
          dangerouslySetInnerHTML={convertDescriptionIntoHtml(
            props.profile.description
          )}
        />

        <div className="mx-auto my-5">
          <Button variant="danger" className={`${styled.btn_latest_cv}`}>
            <i className="fas fa-file-pdf"></i>
            <span className="mx-5">Latest CV</span>
          </Button>
        </div>
        <MyStatistics statistics={props.statistics} />
        <MostUsedTechnology mostUsedTechnology={props.mostUsedTechnology} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const url = process.env["BASE_API_URL"];

    const profile = await axios.get(`${url}/home/profile`);
    const myStatistics = await axios.get(`${url}/home/my_statistic`);
    const mostUsedTechnology = await axios.get(
      `${url}/home/most_used_technology`
    );

    return {
      props: {
        profile: profile.data.data as ProfileInterface,
        statistics: myStatistics.data.data as MyStatisticsInterface,
        mostUsedTechnology: mostUsedTechnology.data
          .data as MostUsedTechnologyInterface,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Home;
