import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import styled from "../../components/experience-work/css/experience-work.module.css";
import axios from "axios";
import { WorkExperienceInterface } from "../../interface/work_experience/work_experience";
import React from "react";

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

  const startDate = new Date(props.exp.start_date).toLocaleDateString();
  const endDate = props.exp.end_date
    ? new Date(props.exp.end_date).toLocaleDateString()
    : "Current";
  return (
    <div key={props.exp.id} className="col-md-12 mb-5">
      <div className="d-flex flex-row align-items-start">
        <div className="card me-5 bg-scaffold shadow-sm">
          <div className="card-body">
            <Image
              src={""}
              //   src={props.exp.company_image ?? ""}
              height={60}
              width={60}
              alt={props.exp.company.name}
            />
          </div>
        </div>
        <div className={`card ${styled.card_company} w-100`}>
          <div className="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <div className={`${styled.name_company} mb-2`}>
                  {props.exp.company.name}
                </div>
                <span className={`${styled.duration_job}`}>
                  {`${startDate} - ${endDate}`}
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
};

export default ExperienceWorkPage;
