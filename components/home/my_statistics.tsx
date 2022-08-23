import styled from "../home/css/home.module.css";

const MyStatistics = () => {
  return (
    <div className={`d-flex flex-column py-5`}>
      <div className="d-flex flex-row justify-content-between pb-5">
        <h3>My Statistics</h3>
        <h6>
          <a href="#" className="text-blue">
            See more statistics
          </a>
        </h6>
      </div>
      <div className="layout_statistics">
        <div className="d-flex justify-content-center">
          <div className={`card ${styled.card_statistics} mx-3`}>
            <div className="card-body">
              <div className="d-flex flex-column h-100">
                <h3>Total Application</h3>
                <span
                  className={`d-flex flex-column justify-content-center fw-bold h-100 ${styled.text_count_statistics}`}
                >
                  3
                </span>
              </div>
            </div>
          </div>
          <div className={`card ${styled.card_statistics} mx-3`}>
            <div className="card-body">
              <div className="d-flex flex-column h-100">
                <h3>Technology Used</h3>
                <span
                  className={`d-flex flex-column justify-content-center fw-bold h-100 ${styled.text_count_statistics}`}
                >
                  3
                </span>
              </div>
            </div>
          </div>
          <div className={`card ${styled.card_statistics} mx-3`}>
            <div className="card-body">
              <div className="d-flex flex-column h-100">
                <h3>Work Experience</h3>
                <span
                  className={`d-flex flex-column justify-content-center fw-bold h-100 ${styled.text_count_statistics}`}
                >
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStatistics;
