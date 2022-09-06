import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { PortfolioInterface } from "../../../interface/portfolio/portfolio_interface";
import { TechnologyDetailInterface } from "../../../interface/technology/technology_detail_interface";
import { PortfolioItem } from "../../portfolio";

type Param = {
	portfolio: PortfolioInterface[],
	technologyDetail: TechnologyDetailInterface,
};

export default function TechnologyDetailPage(props: Param) {

	return <>
		<style jsx global>{
			`
			.layout{
				margin: 120px 40px;	
				text-align: center;
				color: #6b5b50;
				min-height: 100vh;
			}

			.title {
				font-weight: bold;
				color: #6b5b50;
				font-size: 40pt;
				font-family: "Maven Pro";
				text-align: center;
				margin-bottom: 5rem;
			}


			@media (max-width:768px){
				.layout {
					margin: 120px 16px;
				}

				 .title {
					font-size: 32pt;
				}
			}
			`
		}
		</style>
		<div className="layout">
			<div className="title">
				Technology <b>{props.technologyDetail.name}</b>
			</div>

			<div className="row">
				{props.portfolio.map(val => <div key={val.id} className="col-12 col-md-3 mb-5">
					<PortfolioItem portfolio={val} />
				</div>)}
			</div>
		</div>
	</>
}

interface ContextParams extends ParsedUrlQuery {
	technology_id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const url = process.env["BASE_API_URL"];
		const { technology_id } = context.params as ContextParams;
		const portfolio = await axios.get(`${url}/technology/${technology_id}`);
		const arrPortfolio = portfolio.data.data as PortfolioInterface[];
		const technologyDetail = portfolio.data.technology_detail as TechnologyDetailInterface;

		const props: Param = {
			portfolio: arrPortfolio,
			technologyDetail: technologyDetail
		};
		return {
			props: props
		};
	} catch (error) {
		return {
			notFound: true
		};
	}
}
