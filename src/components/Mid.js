import { useEffect, useState } from "react";
import "./Mid.css";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import React from "react";

function Mid() {
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [countriesData, setCountriesData] = useState([]);
  const [showContinentData, setShowContinentData] = useState(true);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleShowData = () => {
    if (showContinentData == false) {
      setShowContinentData(true);
    } else if (showContinentData == true) {
      setShowContinentData(false);
    }
  };

  const fetchData = () => {
    fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const fetchCountriesData = () => {
    fetch("https://corona.lmao.ninja/v2/countries?yesterday=true&sort=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountriesData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    fetchCountriesData();
  }, []);
  console.log(users);
  console.log(countriesData);

  return (
    <>
      <div className="Mid">
        <h2>
          {" "}
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-virus-virus-transmission-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" />
          CoronaVirus Covid -10 Global Cases
        </h2>

        <div className="Side2">
          <div className="Side1">
            <h3> Total Confirmed </h3>
            {users.length > 0 && (
              <div>
                {users.map((user) => (
                  <p key={user}>
                    {" "}
                    {user.continent} : {user.active}
                  </p>
                ))}
              </div>
            )}
            {/* <p id="infor"></p> */}
          </div>
          <div className="Side1">
            <p> Total Deaths</p>
          </div>
          <div className="Side1">
            <p> Total deaths</p>
          </div>
        </div>

        <div className="Mid-down-div">
          <h2>
            Confirmed cases by Continents &nbsp; &nbsp;&nbsp;
            <input className="searchinput" type="text" placeholder="Serach" />
          </h2>
          <img
            onClick={() => {
              console.log("Hello World");
            }}
            className="world"
            src="https://assets.weforum.org/editor/_CAYYuCX-0Z3imS-tKhJbNOMf8PjxZFyKiCYi-F42n4.png"
          />
        </div>

        <div className="LeftBar">
          <div>
            <img
              className="firstIcon"
              src="https://img.icons8.com/carbon-copy/100/000000/coronavirus.png"
            />
          </div>
          <div className="mapDiv">
            <div className="comon_header_walet">
              <span className="fouthIcon" onClick={handleClick}>
                {" "}
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-map-map-and-location-justicon-lineal-justicon-1.png"
                  alt="hot_slots"
                />
              </span>
              <p onClick={handleClick}>Map</p>
              {users.length > 0 && (
                <ul>
                  {users.map((user) => (
                    <li key={user}></li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <img
              className="thirdIcon"
              src="https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png"
            />
            <br />
            Dashboard
          </div>
          <div className="fourthIcon">
            <img src="https://img.icons8.com/ios/50/000000/hospital.png" />
            <br /> Hospital
          </div>
        </div>
        <div className="RightDiv">
          <button className="location">My Location</button>
          <button className="location">Donate</button>
          <div className="symptoms">
            <img
              className="Simg"
              src="https://media.istockphoto.com/vectors/covid19-coronavirus-infographic-vector-id1212677375?k=20&m=1212677375&s=612x612&w=0&h=XPOyPqu4pSbz836tcDq4S0krJVC7_jABpGB0xvdGxMk="
            />
          </div>
          {/* Filter Buttons Starts */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
                width: "100%",
                gap: "0.5rem",
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  backgroundColor: showContinentData ? "skyblue" : "",
                }}
                onClick={toggleShowData}
              >
                Continents
              </button>
              <button
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  backgroundColor: showContinentData ? "" : "skyblue",
                }}
                onClick={toggleShowData}
              >
                Countries
              </button>
            </div>
          </div>
          {/* Filter Buttons Ends */}
          {/* Stats Section Starts */}
          <div
            style={{
              backgroundColor: "white",
              height: "20rem",
              overflowY: "scroll",
              padding: "1rem",
            }}
          >
            {showContinentData
              ? users.length > 0 && (
                  <>
                    <div>Continent Wise</div>
                    <div>
                      {users.map((user) => (
                        <p key={user} style={{ textAlign: "left" }}>
                          {" "}
                          {user.continent} : {user.active}
                        </p>
                      ))}
                    </div>
                  </>
                )
              : countriesData.length > 0 && (
                  <>
                    <div>Country Wise</div>
                    <div>
                      {countriesData.map((country) => (
                        <p key={country} style={{ textAlign: "left" }}>
                          {" "}
                          {country.country} : {country.cases}
                        </p>
                      ))}
                    </div>
                  </>
                )}
          </div>
          {/* Stats Section Ends */}
        </div>
      </div>
      {
        <Menu
          keepMounted
          anchorEl={anchorEl}
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleClose}>Continents</MenuItem>
          <MenuItem onClick={handleClose}>Countries</MenuItem>
        </Menu>
      }
    </>
  );
}
export default Mid;
