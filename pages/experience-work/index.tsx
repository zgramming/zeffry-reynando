import { NextPage } from "next";
import Image from "next/image";
import styled from "../../components/experience-work/css/experience-work.module.css";

type ExperienceWork = {
  id: number;
  imageCompany?: string;
  nameCompany: string;
  position: string;
  startDate: Date;
  endDate: Date | undefined;
  description: string;
};

const ExperienceWorkPage = (props: { children: React.ReactNode }) => {
  const experiencesWork: ExperienceWork[] = [
    {
      id: 1,
      imageCompany: "/images/flutter-logo.png",
      nameCompany: "CV Andromega",
      position: "Web Developer",
      startDate: new Date("2021-06-01"),
      endDate: undefined,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut egestas quis tempor enim fusce. Integer laoreet nunc tincidunt interdum molestie. Vitae magna et ultrices vitae duis vel tortor morbi laoreet. Et vitae, non in mi, arcu iaculis eu a. Sed tristique tellus proin vulputate pretium, suspendisse. Semper viverra odio ultricies commodo donec. Ridiculus imperdiet leo dolor urna egestas egestas molestie tellus. Morbi dis euismod in sed urna, rutrum sollicitudin. Aliquam rutrum cursus eleifend accumsan auctor nunc pharetra. Proin pulvinar amet. laoreet. Et vitae, non in mi, arcu iaculis eu a. Sed tristique tellus proin vulputate pretium, suspendisse. Semper viverra odio ultricies commodo donec. Ridiculus imperdiet leo dolor urna egestas egestas molestie tellus. Morbi dis euismod in sed urna, rutrum sollicitudin. Aliquam rutrum cursus eleifend accumsan auctor nunc pharetra. Proin pulvinar amet.",
    },
    {
      id: 2,
      imageCompany: "/images/flutter-logo.png",
      nameCompany: "PT Sinergi Cakra Sinatria",
      position: "Web Developer",
      startDate: new Date("2020-02-01"),
      endDate: new Date("2021-06-01"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut egestas quis tempor enim fusce. Integer laoreet nunc tincidunt interdum molestie. Vitae magna et ultrices vitae duis vel tortor morbi laoreet. Et vitae, non in mi, arcu iaculis eu a. Sed tristique tellus proin vulputate pretium, suspendisse. Semper viverra odio ultricies commodo donec. Ridiculus imperdiet leo dolor urna egestas egestas molestie tellus. Morbi dis euismod in sed urna, rutrum sollicitudin. Aliquam rutrum cursus eleifend accumsan auctor nunc pharetra. Proin pulvinar amet. laoreet. Et vitae, non in mi, arcu iaculis eu a. Sed tristique tellus proin vulputate pretium, suspendisse. Semper viverra odio ultricies commodo donec. Ridiculus imperdiet leo dolor urna egestas egestas molestie tellus. Morbi dis euismod in sed urna, rutrum sollicitudin. Aliquam rutrum cursus eleifend accumsan auctor nunc pharetra. Proin pulvinar amet.",
    },
  ];
  return (
    <div className={`${styled.layout} px-5`}>
      <div className={`${styled.title}`}>My Experience Work</div>
      <div className="row">
        {experiencesWork.map((exp, index) => {
          return <CompanyItem key={exp.id} exp={exp} />;
        })}
      </div>
    </div>
  );
};

const CompanyItem = (props: { exp: ExperienceWork }) => {
  return (
    <div key={props.exp.id} className="col-md-12 mb-5">
      <div className="d-flex flex-row align-items-start">
        <div className="card me-5 bg-scaffold shadow-sm">
          <div className="card-body">
            <Image
              src={props.exp.imageCompany ?? ""}
              height={60}
              width={60}
              alt={props.exp.nameCompany}
            />
          </div>
        </div>
        <div className={`card ${styled.card_company} w-100`}>
          <div className="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <div className={`${styled.name_company} mb-2`}>
                  {props.exp.nameCompany}
                </div>
                <span className={`${styled.duration_job}`}>
                  {props.exp.startDate.toLocaleDateString()} -&nbsp;
                  {props.exp.endDate?.toLocaleDateString() ?? "Current"}
                </span>
              </div>
              <div className={`${styled.position_company} mb-3`}>
                {props.exp.position}
              </div>
              <div className={`${styled.description_company}`}>
                {props.exp.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceWorkPage;
