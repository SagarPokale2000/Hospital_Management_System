import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Container } from "reactstrap";
import Base from "../../Base/Base";
import AppointPatientList from "./AppointPatientList";
import Schedule from "./Schedule";
import GetResources from "../../Pages/HospitalResources/GetResources";
export default function DoctorDashboard() {
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
      <MDBRow>
        <MDBCol size="3">
          <MDBTabs pills className="flex-column text-center">
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
                onClick={() => handleVerticalClick("AppoinmentList")}
                active={verticalActive === "AppoinmentList"}
              >
                Appointment List
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("CheckResources")}
                active={verticalActive === "CheckResources"}
              >
                Check Resources
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("Schedule")}
                active={verticalActive === "Schedule"}
              >
                Select Schedule
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9">
          <Container>
            <Base>
              <MDBTabsContent>
                <MDBTabsPane show={verticalActive === "Dashboard"}>
                  Home content
                </MDBTabsPane>
                <MDBTabsPane show={verticalActive === "AppoinmentList"}>
                <AppointPatientList/>
                </MDBTabsPane>
                <MDBTabsPane show={verticalActive === "CheckResources"}>
                  <GetResources/>
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "Schedule"}>
                  <Schedule/>
                  sc
                </MDBTabsPane>
              </MDBTabsContent>
            </Base>
          </Container>
        </MDBCol>
      </MDBRow>
    </>
  );
}
