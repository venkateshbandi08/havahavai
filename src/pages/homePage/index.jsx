import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import "./index.css";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Header from "../../components/header";
import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
  Button,
} from "@adobe/react-spectrum";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const initialAirports = [
    {
      id: uuidv4(),
      name: "Indra Gandhi International Airport",
      country: "India",
      code: "DEL",
      terminals: 3,
    },
    {
      id: uuidv4(),
      name: "Dubai International Airport",
      country: "UAE",
      code: "DXB",
      terminals: 5,
    },
    {
      id: uuidv4(),
      name: "Heatthrow Airport",
      country: "England",
      code: "LHR",
      terminals: 6,
    },
    {
      id: uuidv4(),
      name: "Isthanbul Airport",
      country: "Turkey",
      code: "IST",
      terminals: 3,
    },
    {
      id: uuidv4(),
      name: "Rajiv Gandhi International Airport",
      country: "India",
      code: "DFW",
      terminals: 14,
    },
  ];

  const [airports, setAirports] = useState(initialAirports);

  const handleEdit = (event, airport) => {
    event.stopPropagation();
    // handle edit logic here
    alert(`Editing ${airport.name}`);
  };

  const handleDelete = (event, airportId) => {
    event.stopPropagation();
    // Update the state to remove the deleted airport
    const updatedAirports = airports.filter(
      (airport) => airport.id !== airportId
    );
    setAirports(updatedAirports);
  };

  return (
    <div className="homepage-container">
      <Header />
      <div className="sidebar-and-content-container">
        <Sidebar />
        <div className="homepage-content-container">
          <div className="heading-and-addbutton-container">
            <h2 className="airports-heading">Airports</h2>
            <button className="add-button">
              <FaPlus style={{ width: "0.6rem", marginRight: "0.3rem" }} /> Add
              new
            </button>
          </div>
          <div className="airports-table-container">
            <TableView
              aria-label="Example table with static contents"
              selectionMode="multiple"
              UNSAFE_className="table-container"
              UNSAFE_style={{ backgroundColor: "transparent" }}
            >
              <TableHeader>
                <Column>All Airports</Column>
                <Column>Country</Column>
                <Column>Code</Column>
                <Column align="end">Terminals</Column>
                <Column align="end">Actions</Column>
              </TableHeader>
              <TableBody>
                {airports.map((airport) => (
                  <Row key={airport.id} UNSAFE_className="row-style">
                    <Cell>
                      <Link
                        style={{ color: "black" }}
                        to={`/airports/${airport.id}`}
                        state={{ airport }}
                        className="airport-name"
                      >
                        {airport.name}
                      </Link>
                    </Cell>
                    <Cell>{airport.country}</Cell>
                    <Cell>{airport.code}</Cell>
                    <Cell>{airport.terminals}</Cell>
                    <Cell UNSAFE_className="row-buttons">
                      <button
                        style={{ margin: "0.5rem" }}
                        className="edit-button"
                        onClick={(event) => handleEdit(event, airport)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        style={{ margin: "0.5rem" }}
                        className="delete-button"
                        onClick={(event) => handleDelete(event, airport.id)}
                      >
                        <FaTrash />
                      </button>
                    </Cell>
                  </Row>
                ))}
              </TableBody>
            </TableView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
