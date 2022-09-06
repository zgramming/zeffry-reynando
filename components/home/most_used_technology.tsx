import styled from "../home/css/home.module.css";
import Image from "next/image";
import { MostUsedTechnologyInterface } from "../../interface/most_used_technology/most_used_technology_interface";
import Link from "next/link";
import { RouteTechnology, RouteTechnologyDetail } from "../../routes/my-route";

type Parameter = {
	mostUsedTechnology: MostUsedTechnologyInterface[];
};
const MostUsedTechnology = (props: Parameter) => {
	return (
		<div className={`d-flex flex-column py-5`}>
			<div className="d-flex flex-row justify-content-between pb-5">
				<h3>Most Used Technology</h3>
				<h6>
					<Link href={RouteTechnology}>
						<a className="text-blue">
							See more technology
						</a>
					</Link>
				</h6>
			</div>
			<div className="layout_technology">
				<div className="row">
					{props.mostUsedTechnology.map((technology, index) =>
						<div key={technology.id}
							className="col-12 col-md-3">
							<MostUsedTechnologyItem key={technology.id} technology={technology} />
						</div>)}
				</div>
			</div>
		</div>
	);
};

export const MostUsedTechnologyItem = (props: {
	technology: MostUsedTechnologyInterface
}) => {
	return <div className={`card ${styled.card_technology} mb-5`}>
		<div className="card-body">
			<div className="d-flex flex-column h-100 w-100">
				<div className="d-flex flex-row align-items-center">
					<Image
						src={"/images/application.png"}
						width={64}
						height={64}
						alt="Disini flutter logo"
					/>
					<span className={`${styled.title_technology} `}>
						{props.technology.name}
					</span>
				</div>
				<div className="my-auto">
					<span className={`${styled.text_count_technology}`}>
						{props.technology.total_technology_used}
					</span>
					<span>Created Apps</span>
				</div>
				<Link href={RouteTechnologyDetail(props.technology.id)}>
					<a className="text-end text-blue">
						See project
					</a>
				</Link>
			</div>
		</div>
	</div>
}

export default MostUsedTechnology;
