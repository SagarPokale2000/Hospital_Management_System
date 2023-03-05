import React from 'react'
import Base from '../../Base/Base'
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
function Accountant() {
  return (
    <Base>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <Nav vertical>
  <NavItem>
    <NavLink href='PatientAccountList'>
            Patient List
          </NavLink>
          
  </NavItem>
      </Nav>
     </Base>
  )
}

export default Accountant
