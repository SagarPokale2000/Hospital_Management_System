import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import AllEmployee from "../../Pages/Admin/AllEmployee";
import AddEmployee from "../../Pages/Admin/AddEmployee";
import AllPatient from "../../Pages/Admin/AllPatient";
import RemoveEmployee from "../../Pages/Admin/RemoveEmployee";
import AdminDashboard from "../../Pages/Admin/AdminDashboard";
import Base from "../../Base/Base";
import { Container } from "reactstrap";
import AdminGetResources from "../../Pages/HospitalResources/AdminGetResources";
import AddResources from "../../Pages/HospitalResources/AddResources";

function Admin() {
  const [verticalActive, setVerticalActive] = useState("Dashboard");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <MDBRow className="text-dark">
        <MDBCol size="3">
          <MDBTabs className="flex-column text-center text-dark">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("Dashboard")}
                active={verticalActive === "Dashboard"}
              >
                Dashboard
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("empList")}
                active={verticalActive === "empList"}
              >
                All Employee
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("patientList")}
                active={verticalActive === "patientList"}
              >
                All Patient
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("addEmp")}
                active={verticalActive === "addEmp"}
              >
                Add Employee
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("removeEmp")}
                active={verticalActive === "removeEmp"}
              >
                Remove Employee
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("AdminGetResources")}
                active={verticalActive === "AdminGetResources"}
              >
                Check and Update Resources
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("AddResource")}
                active={verticalActive === "AddResource"}
              >
                Add Resource
              </MDBTabsLink></MDBTabsItem>

          </MDBTabs>
        </MDBCol>
        <MDBCol size="9">
          <Container>
            <Base>
              <MDBTabsContent>
                <MDBTabsPane show={verticalActive === "Dashboard"}>
                  <AdminDashboard />
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "empList"}>
                  <AllEmployee />
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "patientList"}>
                  <AllPatient />
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "addEmp"}>
                  <AddEmployee />
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "removeEmp"}>
                  <RemoveEmployee />
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "AdminGetResources"}>
                  <AdminGetResources/>
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "AddResource"}>
                <AddResources/>
                </MDBTabsPane>

              </MDBTabsContent>
            </Base>
          </Container>
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Admin;
