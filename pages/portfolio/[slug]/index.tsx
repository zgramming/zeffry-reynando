import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import React from "react";

import styled from "../../../components/portfolio_detail/portfolio_detail.module.css";
import { PortfolioInterface } from "../../../interface/portfolio/portfolio_interface";
import { PortfolioDetailInterface } from "../../../interface/portfolio_detail/portfolio_detail_interface";

type Parameter = {
  portfolio: PortfolioDetailInterface;
  children?: React.ReactNode;
};

const PortfolioDetailPage = (props: Parameter) => {
  const convertDescriptionIntoHtml = (description: string) => {
    return { __html: description };
  };

  return (
    <div className={`${styled.layout}`}>
      <div className="d-flex flex-column">
        <div className={`${styled.image_banner} mb-5`}>
          <Image
            src={props.portfolio.banner_image}
            height="100%"
            width="100%"
            alt={`${props.portfolio.title}`}
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className={`${styled.title}`}>{props.portfolio.title}</h1>
          <h3>{props.portfolio.type.name}</h3>
        </div>
        <h5 className="fw-normal">Technology : </h5>
        <div className="d-flex flex-wrap mb-5">
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
        <div className="d-flex flex-column mb-5">
          <h3 className="mb-2">Preview Application</h3>
          <div className="row flex-nowrap overflow-auto">
            {props.portfolio.preview_images?.map((val) => {
              return (
                <div key={val.id} className={`${styled.image_preview} me-5`}>
                  <Image
                    src={val.image}
                    height="100%"
                    width="100%"
                    alt={val.image}
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

export const getStaticPaths: GetStaticPaths = async (context) => {
  const url =
    process.env["NODE_ENV"] == "development"
      ? process.env["BASE_API_LOCALHOST_URL"]
      : process.env["BASE_API_URL"];

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

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug } = context.params as IParams;
    const url =
      process.env["NODE_ENV"] == "development"
        ? process.env["BASE_API_LOCALHOST_URL"]
        : process.env["BASE_API_URL"];

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

export default PortfolioDetailPage;
