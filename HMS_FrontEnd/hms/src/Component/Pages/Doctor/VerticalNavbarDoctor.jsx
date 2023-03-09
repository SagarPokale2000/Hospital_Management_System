import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Form,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function VerticalNavbarDoctor() {
  return (
    <div>
      <Nav vertical pills justified>
        <NavItem>
          <NavLink tag={ReactLink} to="/user/doctor/dashboard">
            Dashboard
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={ReactLink} to="/user/doctor/appointmentList">
            Appointment List
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={ReactLink} to="/user/doctor/resources">
            Check Resources
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={ReactLink} to="/user/doctor/selectSchedule">
          Select Schedule
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default VerticalNavbarDoctor;
