import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import {
  Breadcrumbs,
  Item,
  Button,
  ActionButton,
  Dialog,
  DialogTrigger,
  Divider,
  Content,
  Heading,
  Header as SpectrumHeader,
  ButtonGroup,
  TextField,
  Text,
} from "@adobe/react-spectrum";
import { ComboBox, Section } from "@adobe/react-spectrum";
import { RxDotsHorizontal } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { CgSoftwareUpload } from "react-icons/cg";

const AirportDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { airport } = location.state || {};
  const tabsList = [
    {
      id: 1,
      name: "Terminals",
    },
    {
      id: 2,
      name: "Transport",
    },
    {
      id: 3,
      name: "Contact Details",
    },
  ];
  const terminalCards = [
    {
      id: 1,
      terminalName: "Terminal 1",
      terminalDescription: "Terminal Description 1",
    },
    {
      id: 2,
      terminalName: "Terminal 2",
      terminalDescription: "Terminal Description 2",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(1);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  if (!airport) {
    return <div>Loading...</div>;
  }

  return (
    <div className="airport-details-container">
      <Header />
      <div className="sidebar-and-airport-details-container">
        <Sidebar />
        <div className="airport-details-content">
          <div style={{ marginLeft: "-0.4rem", marginBottom: "1rem" }}>
            <Breadcrumbs>
              <Item key="home" onClick={() => navigate("/")}>
                Airports
              </Item>
              <Item key="march 2020 assets">{airport.name}</Item>
            </Breadcrumbs>
          </div>
          <h1>{airport.name}</h1>
          <ul className="tabs-container">
            {tabsList.map((eachTab) => (
              <li
                key={eachTab.id}
                style={{
                  borderBottom:
                    selectedTab === eachTab.id
                      ? "2px solid black"
                      : "0px solid black",
                  fontWeight: selectedTab === eachTab.id ? "bold" : "normal",
                  cursor: "pointer",
                  paddingBottom: "0.5rem",
                }}
                onClick={() => setSelectedTab(eachTab.id)}
              >
                {eachTab.name}
              </li>
            ))}
          </ul>
          <hr />
          <div className="terminal-cards-container">
            {terminalCards.map((eachItem) => (
              <div key={eachItem.id} className="terminal-card">
                <img
                  style={{ width: "134px", height: "114px" }}
                  src="https://spectrum.adobe.com/static/images1x/international-design_photography_people@2x_3AA0peUAov4K32tb8uSNnP_1611635171296.png"
                  alt="Terminal"
                />
                <div className="terminal-card-content">
                  <div className="terminal-name">
                    <h4> {eachItem.terminalName}</h4>
                    <RxDotsHorizontal />
                  </div>
                  <p> {eachItem.terminalDescription} </p>
                </div>
              </div>
            ))}
            <DialogTrigger>
              <button className="add-button-terminal">
                <FaPlus />
                Add Terminal
              </button>
              {(close) => (
                <Dialog>
                  <Heading>Add New Terminal</Heading>
                  <SpectrumHeader>Terminal Information</SpectrumHeader>
                  <Divider />
                  <Content>
                    <form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <label htmlFor="terminalName">Terminal Name</label>
                      <input
                        id="terminalName"
                        type="text"
                        className="form-control"
                      />

                      <label htmlFor="terminalDescription">Description</label>
                      <textarea
                        id="terminalDescription"
                        className="form-control"
                      ></textarea>
                    </form>
                  </Content>
                  <ButtonGroup>
                    <div className="modal-footer">
                      <button
                        style={{ marginRight: "18rem" }}
                        className="modal-button-upload"
                      >
                        <CgSoftwareUpload />
                        Upload
                      </button>
                      <Button variant="secondary" onPress={close}>
                        Cancel
                      </Button>
                      <Button variant="accent" onPress={close}>
                        Save
                      </Button>
                    </div>
                  </ButtonGroup>
                </Dialog>
              )}
            </DialogTrigger>
          </div>

          <div className="services-section">
            <h2 className="services-name"> Services </h2>
            <p> Lost & Found </p>
            <hr style={{ marginTop: "1.5rem", marginBottom: "2rem" }} />
            <form className="bottom-form-container">
              <div className="services-top-section">
                <div className="services-1">
                  <div className="form-item">
                    <TextField
                      label="Service name"
                      value="name"
                      //   onChange={setValue}
                    />
                  </div>
                  <div className="form-item">
                    <ComboBox label="Favorite Animal">
                      <Item key="1">Option 1</Item>
                      <Item key="2">Option 2</Item>
                      <Item key="3">Option 3</Item>
                      <Item key="4">Option 4</Item>
                      <Item key="5">Option 5</Item>
                    </ComboBox>
                  </div>
                  <div className="form-item">
                    <ComboBox label="Favorite Animal">
                      <Item key="1">Option 1</Item>
                      <Item key="2">Option 2</Item>
                      <Item key="3">Option 3</Item>
                      <Item key="4">Option 4</Item>
                      <Item key="5">Option 5</Item>
                    </ComboBox>
                  </div>
                  <div className="upload-and-toggle">
                    <button
                      style={{ marginRight: "1rem" }}
                      className="modal-button-upload-bottom"
                    >
                      <CgSoftwareUpload />
                      Upload
                    </button>
                    <div
                      className={`toggle-button ${isToggleOn ? "active" : ""}`}
                      onClick={handleToggle}
                    >
                      <div className="toggle-circle"></div>
                    </div>
                    <p style={{ marginTop: "1rem" }}> show image </p>
                  </div>
                </div>
                <button
                  style={{ marginLeft: "6rem", marginTop: "1rem" }}
                  className="add-button"
                >
                  Save
                </button>
              </div>
              <div className="form-item-bottom">
                <TextField
                  label="Description"
                  value="name"
                  //   onChange={setValue}
                />
              </div>
            </form>
            <div className="bottom-section">
              <p> Lounge </p>
              <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <p> Money Exchange </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportDetails;
