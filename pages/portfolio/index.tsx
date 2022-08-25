import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import styled from "../../components/portfolio/css/portfolio.module.css";
import { RouteHome, RoutePortfolioDetail } from "../../routes/my-route";

type Portfolio = {
  id: number;
  imageUrl?: string;
  title: string;
  description: string;
};

type FilterType = {
  id: number;
  title: string;
};

const PortfolioPage = (props: { children?: React.ReactNode }) => {
  const portfolios: Portfolio[] = [
    {
      id: 1,
      title: "Basa Basi",
      imageUrl: "/images/flutter-logo.png",
      description:
        "Chat Application made by Flutter and using Firebase as a backend",
    },
    {
      id: 2,
      title: "Basa Basi",
      imageUrl: "/images/flutter-logo.png",
      description:
        "Chat Application made by Flutter and using Firebase as a backend",
    },
    {
      id: 3,
      title: "Basa Basi",
      imageUrl: "/images/flutter-logo.png",
      description:
        "Chat Application made by Flutter and using Firebase as a backend",
    },
    {
      id: 4,
      title: "Basa Basi",
      imageUrl: "/images/flutter-logo.png",
      description:
        "Chat Application made by Flutter and using Firebase as a backend",
    },
    {
      id: 5,
      title: "Basa Basi",
      imageUrl: "/images/flutter-logo.png",
      description:
        "Chat Application made by Flutter and using Firebase as a backendChat ",
    },
  ];

  const filterTypes: FilterType[] = [
    { id: 1, title: "Mobile Apps" },
    { id: 2, title: "Web Apps" },
    { id: 3, title: "Rest API" },
  ];

  const [search, setSearch] = useState<string>();

  return (
    <div className={`${styled.layout} px-5`}>
      <div className={`${styled.title} mb-5`}>My Application</div>

      <input
        type="text"
        name="search"
        id="search"
        value={search}
        placeholder="Search something..."
        className={`form-control ${styled.input_search}`}
        onChange={(e) =>
          setSearch((prevState) => (e.target as HTMLInputElement).value)
        }
      />
      <select
        className={`form-select ${styled.dropdown_filter} ms-auto my-5`}
        aria-label="Default select example"
      >
        {filterTypes.map((val) => (
          <option key={val.id} value={val.id}>
            {val.title}
          </option>
        ))}
      </select>

      <div className="row">
        {portfolios.map((val) => (
          <div key={val.id} className="col-md-3 mb-5">
            <Link href={RoutePortfolioDetail(val.id)}>
              <div className={`card ${styled.card_portfolio} overflow-auto`}>
                <div className="card-body">
                  <div className="d-flex flex-column h-100">
                    <div
                      className={`d-flex flex-column justify-content-center ${styled.image_portfolio} mb-3`}
                    >
                      <Image
                        src={val.imageUrl ?? ""}
                        alt="image"
                        width={"100%"}
                        height={"100%"}
                        objectFit="contain"
                      />
                    </div>
                    <h1 className="text-start fw-bold">{val.title}</h1>
                    <small className="text-start">{val.description}</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
