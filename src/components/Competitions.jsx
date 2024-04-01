import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Dropdown } from "rsuite";

function Competitions() {
  const dropdownItems = [
    "Hotness",
    "Recently Launched",
    "Closing Soon",
    "Reward",
    "Total Teams",
  ];
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(
    dropdownItems[0]
  );
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    async function getAllCompetitions() {
      console.log("apicall");
      const response = await fetch(`http://localhost:9090/api/contests/active`);
      const json = await response.json();
      console.log({ json });
      setCompetitions(json);
    }
    getAllCompetitions();
  }, []);

  function handleDropdownClick(item) {
    setSelectedDropdownItem(item);
  }

  const CompetitionsPageHeader = () => {
    return (
      <div className="mt-16 py-6 flex">
        <div className="w-[896px]">
          <h1 className="mb-3 text-4xl font-bold">Competitions</h1>
          <p className="w-[485px] mb-6 text-base text-[#5F6368]">
            Grow your data science skills by competing in our exciting
            competitions. Find help in the documentation or learn about
            Community Competitions.
          </p>
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
            activeKey={selectedDropdownItem}
          >
            {dropdownItems.map((dropdownItem) => {
              return (
                <Dropdown.Item
                  eventKey={dropdownItem}
                  onClick={() => handleDropdownClick(dropdownItem)}
                >
                  {dropdownItem}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[1200px] mx-auto mb-10 text-[#201224]">
      <CompetitionsPageHeader />
      <CompetitionsPageToolbar />
      <div className="mt-15">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">Contest Id</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="right">Start Date</TableCell>
                <TableCell align="right">End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {competitions.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.contestId}</TableCell>
                  <TableCell align="center">
                  <Link to={`/competitions/${row.contestId}`}>
                  {row.title}
                  </Link>
                  </TableCell>
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
