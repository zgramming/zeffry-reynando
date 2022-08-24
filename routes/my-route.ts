const RouteHome = "/";
const RouteExperienceWork = "/experience-work";
const RoutePortfolio = "/portfolio";
const RoutePortfolioDetail = (id: number) => {
  return `/portfolio/${id}`;
};

export { RouteHome, RouteExperienceWork, RoutePortfolio, RoutePortfolioDetail };
