import React from 'react'
import Base from '../../Base/Base'
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Doctor() {
  return (
    <div>
        <Base>
        <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <Nav vertical>
  <NavItem>
    <NavLink href='AddAppoinment'>
            Appoinment List
          </NavLink>
  </NavItem>
      </Nav>
        </Base>
      
    </div>
  )
}

export default Doctor
