import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';
import Bargraphs from '../Bargraphs/Bargraphs';

const Table = ({ data }) => {
  const [barstate, setBarState] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamdata, setTeamData] = useState(null);

  useEffect(() => {
    const fetchData = async (teamName) => {
      try {
        const response = await axios.get(`http://localhost:4000/users/${teamName}`);
        const dataa = response.data;
        const newdata = dataa.map((item) => ({
          name: item.name,
          value: item.progress,
        }));
        setTeamData(newdata);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    if (barstate && selectedTeam) {
      fetchData(selectedTeam);
    }
  }, [barstate, selectedTeam]);

  const handleTeamClick = (teamName) => {
    setSelectedTeam(teamName);
    setBarState(true);
  };

  const closeOverlay = () => {
    setBarState(false);
    setSelectedTeam(null);
  };

  return (
    <div className="table-component-container">
      <div className="table-component-table-container">
        <h2>OVERALL TEAM PROGRESS</h2>
        <div className="table-wrapper">
          <table className="table-component-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Team Name</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items) => (
                <tr key={items.projectname}>
                  <td onClick={() => handleTeamClick(items.teamname)}>{items.projectname}</td>
                  <td onClick={() => handleTeamClick(items.teamname)}>{items.teamname}</td>
                  <td onClick={() => handleTeamClick(items.teamname)}>{items.averageProgress}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {barstate && (
        <div className={`overlay ${barstate ? 'visible' : ''}`}>
          <div className="overlay-content">
            <button className="close-button" onClick={closeOverlay}>Close</button>
            <Bargraphs data={teamdata} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
