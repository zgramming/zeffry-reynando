import axios from 'axios';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import styled from '../../components/portfolio/css/portfolio.module.css';
import {
	MasterTypeApplicationInterface
} from '../../interface/master_data/type_application_interface';
import { PortfolioInterface } from '../../interface/portfolio/portfolio_interface';
import { RoutePortfolioDetail, RouteTechnologyDetail } from '../../routes/my-route';

type Parameter = {
	children?: React.ReactNode;
	portfolio: PortfolioInterface[];
	masterTypeApplication: MasterTypeApplicationInterface[];
};

const PortfolioPage = (props: Parameter) => {
	const [search, setSearch] = useState<string>("");
	const [filteredPortfolio, setFilteredPortfolio] = useState(props.portfolio);
	const [selectedMasterTypeApplication, setSelectedMasterTypeApplication] =
		useState<number>(0);

	const masterTypeApplication = [
		{ id: 0, name: "All" },
		...props.masterTypeApplication,
	];

	useEffect(() => {
		setFilteredPortfolio((prevState) => {
			const result = props.portfolio.filter((val) => {
				const searchQuery = val.title
					.toLowerCase()
					.includes(search.toLowerCase());

				const masterTypeQuery =
					selectedMasterTypeApplication === 0
						? true
						: selectedMasterTypeApplication === val.type_application_id;

				return searchQuery && masterTypeQuery;
			});

			return result;
		});
		return () => { };
	}, [props.portfolio, search, selectedMasterTypeApplication]);

	return (
		<div className={`${styled.layout}`}>
			<div className={`${styled.title} mb-5`}>My Application</div>

			<input
				type="text"
				name="search"
				id="search"
				value={search}
				placeholder="Search something..."
				className={`form-control ${styled.input_search}`}
				onChange={(e) => {
					setSearch((prevState) => e.target.value.toLowerCase());
				}}
			/>
			<select
				className={`form-select ${styled.dropdown_filter} ms-auto my-5`}
				aria-label="Default select example"
				value={selectedMasterTypeApplication}
				onChange={(e) => {
					setSelectedMasterTypeApplication((prevState) =>
						parseInt(e.target.value)
					);
				}}
			>
				{masterTypeApplication.map((val) => (
					<option key={val.id} value={val.id}>
						{val.name}
					</option>
				))}
			</select>

			<div className="row">
				{filteredPortfolio.map((val) => (
					<div key={val.id} className="col-12 col-md-3 mb-5">
						<PortfolioItem portfolio={val} />
					</div>
				))}
			</div>
		</div>
	);
};

export const PortfolioItem = (props: { portfolio: PortfolioInterface }) => {
	return <Link href={RoutePortfolioDetail(props.portfolio.title_slug)}>
		<div className={`card ${styled.card_portfolio} overflow-auto`}>
			<div className="card-body">
				<div className="d-flex flex-column h-100">
					<div
						className={`d-flex flex-column ${styled.image_portfolio} mb-3`}
					>
						<Image
							src={props.portfolio.banner_image ?? ""}
							alt={props.portfolio.title}
							width={"100%"}
							height={"100%"}
							layout={"responsive"}
							objectFit={"cover"}
							className={"rounded"}
						/>
					</div>
					<h1 className="text-start fw-bold">{props.portfolio.title}</h1>
					<small className="text-start mb-auto">
						{props.portfolio.short_description}
					</small>
					<div className="d-flex flex-wrap justify-content-end">
						{
							props.portfolio.other_technology
								.map(otherTechnology => <Link key={otherTechnology.id} href={RouteTechnologyDetail(otherTechnology.technology_id)}><span className={`badge ${styled.badge_other_technology} rounded-pill bg-apps m-1`}>{otherTechnology.technology.name}</span></Link>)
						}
					</div>
				</div>
			</div>
		</div>
	</Link>
}

export const getStaticProps: GetStaticProps = async (context) => {
	try {
		const url = process.env["BASE_API_URL"];

		const portfolio = await axios.get(`${url}/portfolio`);
		const masterTypeApplication = await axios.get(
			`${url}/master-data/type-application`
		);

		const arrPortfolio = portfolio.data.data as PortfolioInterface[];
		const arrMasterTypeApplication = masterTypeApplication.data
			.data as MasterTypeApplicationInterface[];

		const props: Parameter = {
			portfolio: arrPortfolio,
			masterTypeApplication: arrMasterTypeApplication,
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

export default PortfolioPage;
