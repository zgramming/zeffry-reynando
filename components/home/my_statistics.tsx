import { MyStatisticsInterface } from "../../interface/my_statistics/my_statistics_interface";
import styled from "../home/css/home.module.css";

type Parameter = {
  statistics: MyStatisticsInterface;
};
const MyStatistics = (props: Parameter) => {
  return (
    <div className={`d-flex flex-column py-5`}>
      <div className="d-flex flex-row justify-content-between pb-5">
        <h3>My Statistics</h3>
      </div>
      <div className={`${styled.layout_statistics}`}>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className={`card ${styled.card_statistics}`}>
              <div className="card-body">
                <div className="d-flex flex-column h-100">
                  <h3>Total Application</h3>
                  <span
                    className={`d-flex flex-column justify-content-center fw-bold h-100 ${styled.text_count_statistics}`}
                  >
                    {props.statistics.total_application}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`card ${styled.card_statistics}`}>
              <div className="card-body">
                <div className="d-flex flex-column h-100">
                  <h3>Technology Used</h3>
                  <span
                    className={`d-flex flex-column justify-content-center fw-bold h-100 ${styled.text_count_statistics}`}
                  >
                    {props.statistics.total_technology_used}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`card ${styled.card_statistics}`}>
              <div className="card-body">
                <div className="d-flex flex-column h-100">
                  <h3>Work Experience</h3>
                  <span
                    className={`d-flex flex-column justify-content-center fw-bold h-100 ${styled.text_count_statistics}`}
                  >
                    {props.statistics.total_work_experience}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStatistics;
