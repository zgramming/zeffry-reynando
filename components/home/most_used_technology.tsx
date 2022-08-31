import styled from "../home/css/home.module.css";
import Image from "next/image";
import { MostUsedTechnologyInterface } from "../../interface/most_used_technology/most_used_technology_interface";

type Parameter = {
  mostUsedTechnology: MostUsedTechnologyInterface[];
};
const MostUsedTechnology = (props: Parameter) => {
  return (
    <div className={`d-flex flex-column py-5`}>
      <div className="d-flex flex-row justify-content-between pb-5">
        <h3>Most Used Technology</h3>
        <h6>
          <a href="#" className="text-blue">
            See more technology
          </a>
        </h6>
      </div>
      <div className="layout_technology">
        <div className="row">
          {props.mostUsedTechnology.map((technology, index) => (
            <div key={technology.id} className="col-md-3">
              <div className={`card ${styled.card_technology} mb-5`}>
                <div className="card-body">
                  <div className="d-flex flex-column h-100 w-100">
                    <div className="d-flex flex-row align-items-center">
                      <Image
                        src={"/images/application.png"}
                        width={64}
                        height={64}
                        alt="Disini flutter logo"
                      />
                      <span className={`${styled.title_technology} `}>
                        {technology.name}
                      </span>
                    </div>
                    <div className="my-auto">
                      <span className={`${styled.text_count_technology}`}>
                        {technology.total_technology_used}
                      </span>
                      <span>Created Apps</span>
                    </div>
                    <a href="#" className="text-end text-blue">
                      See project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostUsedTechnology;
