const RouteHome = "/";
const RouteExperienceWork = "/experience-work";
const RoutePortfolio = "/portfolio";
const RoutePortfolioDetail = (slug: string) => {
  return `/portfolio/${slug}`;
};
const RouteTechnology = "/technology";
const RouteTechnologyDetail = (id: number) => {
  return `/technology/${id}`;
};

export {
  RouteHome,
  RouteExperienceWork,
  RoutePortfolio,
  RoutePortfolioDetail,
  RouteTechnology,
  RouteTechnologyDetail,
};
