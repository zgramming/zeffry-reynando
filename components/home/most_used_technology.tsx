import styled from "../home/css/home.module.css";
import Image from "next/image";

type MostUsedTechnology = {
  id: number;
  imageUrl: string;
  title: string;
  total: number;
};

const MostUsedTechnology = () => {
  const technologies: MostUsedTechnology[] = [
    {
      id: 1,
      imageUrl: "/images/flutter-logo.png",
      title: "Flutter",
      total: 10,
    },
    {
      id: 2,
      imageUrl: "/images/flutter-logo.png",
      title: "Codeigniter",
      total: 3,
    },
    { id: 3, imageUrl: "/images/flutter-logo.png", title: "Laravel", total: 4 },
    {
      id: 4,
      imageUrl: "/images/flutter-logo.png",
      title: "Rest API",
      total: 5,
    },
  ];

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
          {technologies.map((technology, index) => (
            <div key={technology.id} className="col-md-3">
              <div className={`card ${styled.card_technology} mb-5`}>
                <div className="card-body">
                  <div className="d-flex flex-column h-100 w-100">
                    <div className="d-flex flex-row align-items-center">
                      <Image
                        src={"/images/flutter-logo.png"}
                        width={64}
                        height={64}
                        alt="Disini flutter logo"
                      />
                      <span className={`${styled.title_technology} `}>
                        {technology.title}
                      </span>
                    </div>
                    <div
                      className="my-auto"
                      //   style={{ backgroundColor: "red" }}
                    >
                      <span className={`${styled.text_count_technology}`}>
                        {technology.total}
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
