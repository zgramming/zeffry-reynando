const RouteHome = "/";
const RouteExperienceWork = "/experience-work";
const RoutePortfolio = "/portfolio";
const RoutePortfolioDetail = (slug: string) => {
  return `/portfolio/${slug}`;
};

export { RouteHome, RouteExperienceWork, RoutePortfolio, RoutePortfolioDetail };
