import Image from "next/image";
import styled from "../../../components/portfolio_detail/portfolio_detail.module.css";

type SourcePortfolio = {
  id: number;
  title: string;
  code: string;
  url: string;
};

type PortfolioImages = {
  id: number;
  imageUrl: string;
};

type PortfolioTechnology = { id: number; title: string; image?: string };

type PortfolioDetail = {
  id: number;
  imageBanner: string;
  title: string;
  description: string;
  type: string;
  technologies: PortfolioTechnology[];
  sources: SourcePortfolio[];
  images?: PortfolioImages[];
};

const portfolio: PortfolioDetail = {
  id: 1,
  imageBanner: "/images/banner.jpg",
  title: "Basa Basi",
  type: "Mobile Apps",
  technologies: [
    { id: 1, title: "Flutter" },
    { id: 2, title: "Firebase" },
    { id: 3, title: "Google Maps" },
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in penatibus nunc curabitur pretium aliquam nisi in. Eget ut mi euismod fermentum nulla. Etiam id cursus enim ultrices dictum lorem vel ipsum. Mus praesent convallis varius cras lorem eu. At convallis proin massa congue nulla purus, praesent pellentesque. Vitae, praesent amet senectus arcu. Dolor, posuere nam vel velit sit pharetra convallis quam egestas.
  Sed venenatis egestas orci odio eget auctor. Curabitur nibh in gravida integer. Leo lacinia purus in bibendum eu eget nunc aliquam lectus. Etiam egestas non aliquet sagittis. Arcu quis id neque, lacinia dictumst. Donec quis diam, maecenas etiam blandit mauris molestie tristique.
  Vel amet, ullamcorper sit adipiscing faucibus. Ac malesuada vel sagittis, vulputate scelerisque sollicitudin. Nunc, condimentum ac suspendisse `,
  sources: [
    {
      id: 1,
      code: "github",
      title: "Github",
      url: "https://github.com/zgramming",
    },
    {
      id: 2,
      code: "website",
      title: "Website",
      url: "https://github.com/zgramming",
    },
  ],
  images: [
    { id: 1, imageUrl: "/images/banner.jpg" },
    { id: 2, imageUrl: "/images/banner.jpg" },
    { id: 3, imageUrl: "/images/banner.jpg" },
    { id: 4, imageUrl: "/images/banner.jpg" },
    { id: 5, imageUrl: "/images/banner.jpg" },
    { id: 6, imageUrl: "/images/banner.jpg" },
    { id: 7, imageUrl: "/images/banner.jpg" },
    { id: 8, imageUrl: "/images/banner.jpg" },
    { id: 9, imageUrl: "/images/banner.jpg" },
    { id: 10, imageUrl: "/images/banner.jpg" },
  ],
};
const PortfolioDetailPage = (props: { children?: React.ReactNode }) => {
  return (
    <div className={`${styled.layout}`}>
      <div className="d-flex flex-column">
        <div className={`${styled.image_banner} mb-5`}>
          <Image
            src={portfolio.imageBanner}
            height="100%"
            width="100%"
            alt={`${portfolio.title}`}
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className={`${styled.title}`}>{portfolio.title}</h1>
          <h3>{portfolio.type}</h3>
        </div>
        <h5 className="fw-normal">Technology : </h5>
        <div className="d-flex flex-wrap mb-5">
          {portfolio.technologies.map((val) => (
            <span
              key={val.id}
              className={`badge ${styled.badge_technology} rounded-pill bg-success me-2`}
            >
              {val.title}
            </span>
          ))}
        </div>
        <p className={`${styled.description} mb-5`}>{portfolio.description}</p>
        <div className="d-flex flex-column mb-5">
          <h3 className="mb-2">Source</h3>
          <div className="d-flex flex-wrap">
            {portfolio.sources.map((val) => {
              if (val.code === "github") {
                return (
                  <a
                    href={val.url}
                    rel="noreferrer"
                    target="_blank"
                    className={`${styled.source_icon} me-5`}
                  >
                    <i className={`fab fa-github`}></i>
                  </a>
                );
              }

              if (val.code === "website") {
                return (
                  <a
                    href={val.url}
                    rel="noreferrer"
                    target="_blank"
                    className={`${styled.source_icon} me-5`}
                  >
                    <i className={`fas fa-globe`}></i>
                  </a>
                );
              }

              return null;
            })}
          </div>
        </div>
        <div className="d-flex flex-column mb-5">
          <h3 className="mb-2">Preview Application</h3>
          <div className="row flex-nowrap overflow-auto">
            {portfolio.images?.map((val) => {
              return (
                <div key={val.id} className={`${styled.image_preview} me-5`}>
                  <Image
                    src={val.imageUrl}
                    height="100%"
                    width="100%"
                    alt={val.imageUrl}
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
