import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { Dropdown } from "rsuite";

function Competitions() {
	const dropdownItems = ["Hotness", "Recently Launched", "Closing Soon", "Reward", "Total Teams"];
	const [selectedDropdownItem, setSelectedDropdownItem] = useState(dropdownItems[0]);

	function handleDropdownClick(item) {
		setSelectedDropdownItem(item);
	}

	return (
		<div className="w-[1200px] mx-auto text-[#201224]">
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
			<div className="mx-2 my-10">
				<div className="text-xl font-bold flex item justify-center">
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
		</div>
	);
}

export default Competitions;
