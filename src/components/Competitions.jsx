import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { Dropdown } from "rsuite";

function Competitions() {
	const dropdownItems = ["Hotness", "Recently Launched", "Closing Soon", "Reward", "Total Teams"];
	const [selectedDropdownItem, setSelectedDropdownItem] = useState(dropdownItems[0]);

	function handleDropdownClick(item) {
		setSelectedDropdownItem(item);
	}

	const CompetitionsPageHeader = () => {
		return (
			<div className="mt-16 py-6 flex">
				<div className="w-[896px]">
					<h1 className="mb-3 text-4xl font-bold">Competitions</h1>
					<p className="w-[485px] mb-6 text-base text-[#5F6368]">Grow your data science skills by competing in our exciting competitions. Find help in the documentation or learn about Community Competitions.</p>
				</div>
				<div className="flex-grow">
					<img
						src="https://www.kaggle.com/static/images/competitions/landing-header-light.svg"
						className="w-[280px] h-[208px]"
					/>
				</div>
			</div>
		);
	};

	const CompetitionsPageToolbar = () => {
		return (
			<div className="mx-2 my-10 flex items-center justify-between">
				<div className="text-xl font-bold flex items-center gap-2">
					<FaRegClock />
					<span>Active Competitions</span>
				</div>
				<div>
					<Dropdown
						title={selectedDropdownItem}
						activeKey={selectedDropdownItem}>
						{dropdownItems.map(dropdownItem => {
							return (
								<Dropdown.Item
									eventKey={dropdownItem}
									onClick={() => handleDropdownClick(dropdownItem)}>
									{dropdownItem}
								</Dropdown.Item>
							);
						})}
					</Dropdown>
				</div>
			</div>
		);
	};

	const rows = [
		{ id: 1, title: "Project Orion", startDate: "2024-03-20", endDate: "2024-03-25" },
		{ id: 2, title: "Solar System Exploration", startDate: "2024-03-21", endDate: "2024-03-26" },
		{ id: 3, title: "Mission Mars", startDate: "2024-03-22", endDate: "2024-03-27" },
		{ id: 4, title: "Jupiter Odyssey", startDate: "2024-03-23", endDate: "2024-03-28" },
		{ id: 5, title: "Voyage to Saturn", startDate: "2024-03-24", endDate: "2024-03-29" },
		{ id: 6, title: "Exploring the Kuiper Belt", startDate: "2024-03-25", endDate: "2024-03-30" },
		{ id: 7, title: "Interstellar Probe", startDate: "2024-03-26", endDate: "2024-03-31" },
		{ id: 8, title: "Mission to Alpha Centauri", startDate: "2024-03-27", endDate: "2024-04-01" },
		{ id: 9, title: "Galactic Survey", startDate: "2024-03-28", endDate: "2024-04-02" },
	];

	return (
		<div className="w-[1200px] mx-auto mb-10 text-[#201224]">
			<CompetitionsPageHeader />
			<CompetitionsPageToolbar />
			<div className="mt-15">
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }}>
						<TableBody>
							{rows.map(row => (
								<TableRow
									key={row.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell align="right">{row.id}</TableCell>
									<TableCell align="center">{row.title}</TableCell>
									<TableCell align="right">{row.startDate}</TableCell>
									<TableCell align="right">{row.endDate}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

export default Competitions;
