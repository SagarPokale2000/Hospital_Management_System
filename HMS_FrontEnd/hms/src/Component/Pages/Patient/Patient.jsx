import React from 'react'
import Base from '../../Base/Base';
import Appointment from './AddAppointment';
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { Navigate, NavLink as ReactLink, Route, useNavigate } from "react-router-dom";

function Patient() {
  return (
    <Base>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <Nav vertical>
  <NavItem>
    <NavLink href='AddAppoinment'>
            AddAppoinment
    </NavLink>
  </NavItem>
      </Nav>
     </Base>
  )
}

export default Patient;