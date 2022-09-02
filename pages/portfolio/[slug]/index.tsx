import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { useMediaQuery } from "react-responsive";

import styled from "../../../components/portfolio_detail/portfolio_detail.module.css";
import { PortfolioInterface } from "../../../interface/portfolio/portfolio_interface";
import { PortfolioDetailInterface } from "../../../interface/portfolio_detail/portfolio_detail_interface";

type Parameter = {
  portfolio: PortfolioDetailInterface;
  children?: React.ReactNode;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PortfolioDetailPage = (props: Parameter) => {
  const convertDescriptionIntoHtml = (description: string) => {
    return { __html: description };
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={`${styled.layout}`}>
      <div className="d-flex flex-column">
        <div className={`${styled.image_banner} mb-5`}>
          <Image
            src={props.portfolio.banner_image}
            height={"100%"}
            width={"100%"}
            alt={`${props.portfolio.title}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className={`d-flex ${
            isMobile
              ? "flex-column mb-3"
              : "justify-content-between align-items-center mb-3"
          }`}
        >
          <h1 className={`${styled.title}`}>{props.portfolio.title}</h1>
          <span className={`${styled.subtitle_technology}`}>
            {props.portfolio.type.name}
          </span>
        </div>
        <h5 className="fw-normal">Technology : </h5>
        <div className="d-flex flex-wrap mb-3">
          {props.portfolio.other_technology.map((val) => (
            <span
              key={val.id}
              className={`badge ${styled.badge_technology} rounded-pill bg-success me-2`}
            >
              {val.technology.name}
            </span>
          ))}
        </div>
        <p
          className={`${styled.description} mb-5`}
          dangerouslySetInnerHTML={convertDescriptionIntoHtml(
            props.portfolio.full_description
          )}
        />
        <div className="d-flex flex-column mb-5">
          <h3 className="mb-2">Source</h3>
          <div className="d-flex flex-wrap">
            {props.portfolio.github_url && (
              <a
                href={props.portfolio.github_url}
                rel="noreferrer"
                target="_blank"
                className={`${styled.source_icon} me-5`}
              >
                <i className={`fab fa-github`}></i>
              </a>
            )}
            {props.portfolio.web_url && (
              <a
                href={props.portfolio.web_url}
                rel="noreferrer"
                target="_blank"
                className={`${styled.source_icon} me-5`}
              >
                <i className={`fas fa-globe`}></i>
              </a>
            )}
          </div>
        </div>
        <div className="d-flex flex-column">
          <h3 className="mb-3">Preview Application</h3>
          <div className="row">
            {props.portfolio.preview_images?.map((val) => {
              return (
                <div key={val.id} className={`col-6 col-md-4 mb-3`}>
                  <Image
                    src={val.image}
                    height={"100%"}
                    width={"100%"}
                    alt={val.image}
                    className={`rounded shadow`}
                    layout="responsive"
                    objectFit="cover"
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

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug } = context.params as IParams;
    const url = process.env["BASE_API_URL"];

    const portfolio = await axios.get(`${url}/portfolio/${slug}`);
    if (!portfolio.data.data) throw "Data tidak ditemukan";

    const data: PortfolioDetailInterface = portfolio.data.data;
    const props = {
      portfolio: data,
    };

    return {
      props: props,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const url = process.env["BASE_API_URL"];

  const portfolio = await axios.get(`${url}/portfolio`);
  const arrPortfolio: PortfolioInterface[] = portfolio.data.data;
  const slug = arrPortfolio.map(function (val) {
    return {
      params: {
        slug: val.title_slug,
      },
    };
  });

  return {
    paths: slug,
    fallback: "blocking",
  };
};

export default PortfolioDetailPage;
