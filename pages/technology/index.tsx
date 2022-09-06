import axios from "axios"
import { GetStaticProps } from "next"
import { MostUsedTechnologyItem } from "../../components/home/most_used_technology"
import { MostUsedTechnologyInterface } from "../../interface/most_used_technology/most_used_technology_interface"

type Param = {
	mostUsedTechnology: MostUsedTechnologyInterface[],
	children?: React.ReactNode
}

const TechnologyPage = (props: Param) => {

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
				Technologies
			</div>
			<div className="row">
				{props.mostUsedTechnology.map((val) =>
					<div key={val.id} className="col-12 col-md-3">
						<MostUsedTechnologyItem key={val.id} technology={val} />
					</div>)}
			</div>
		</div>
	</>
}

export const getStaticProps: GetStaticProps = async (context) => {
	try {
		const url = process.env["BASE_API_URL"];
		const mostUsedTechnology = await axios.get(
			`${url}/technology`
		);

		const props: Param = {
			mostUsedTechnology: mostUsedTechnology.data.data as MostUsedTechnologyInterface[]
		};

		return {
			props: props
		}
	} catch (error) {
		return { notFound: true }
	}
}

export default TechnologyPage;