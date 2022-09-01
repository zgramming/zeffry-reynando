import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

import styled from "../../components/experience-work/css/experience-work.module.css";
import { WorkExperienceInterface } from "../../interface/work_experience/work_experience_interface";

type Parameter = {
  workExperience: WorkExperienceInterface[];
  children?: React.ReactNode;
};
const ExperienceWorkPage = (props: Parameter) => {
  return (
    <div className={`${styled.layout} px-5`}>
      <div className={`${styled.title}`}>My Experience Work</div>
      <div className="row">
        {props.workExperience.map((exp, index) => {
          return <ExperienceItem key={exp.id} exp={exp} />;
        })}
      </div>
    </div>
  );
};

const ExperienceItem = (props: { exp: WorkExperienceInterface }) => {
  const convertDescriptionIntoHtml = (description: string) => {
    return { __html: description };
  };

  const dateReadable = (dateString?: string) => {
    if (!dateString) return "Now";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const d = date.getDate();
    return `${d} ${month} ${year}`;
  };
  return (
    <div key={props.exp.id} className="col-md-12 mb-5">
      <div className="d-flex flex-row align-items-start">
        <div className="me-5">
          <Image
            src={props.exp.company_image ?? ""}
            height={120}
            width={120}
            alt={props.exp.company.name}
            className={"rounded shadow-sm"}
          />
        </div>
        <div className={`card ${styled.card_company} w-100`}>
          <div className="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <div className={`${styled.name_company} mb-2`}>
                  {props.exp.company.name}
                </div>
                <span className={`${styled.duration_job}`}>
                  {`${dateReadable(props.exp.start_date)} - ${dateReadable(
                    props.exp.end_date
                  )}`}
                </span>
              </div>
              <div className={`${styled.position_company} mb-3`}>
                {props.exp.job.name}
              </div>
              <div
                className={`${styled.description_company}`}
                dangerouslySetInnerHTML={convertDescriptionIntoHtml(
                  props.exp.description
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const url =
      process.env["NODE_ENV"] == "development"
        ? process.env["BASE_API_LOCALHOST_URL"]
        : process.env["BASE_API_URL"];

    const workExperience = await axios.get(`${url}/work-experience`);
    const arrWorkExperience = workExperience.data
      .data as WorkExperienceInterface[];
    return {
      props: {
        workExperience: arrWorkExperience,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ExperienceWorkPage;
