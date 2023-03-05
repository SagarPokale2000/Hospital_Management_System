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
import Appointment from './AddAppointment'
import AppintmentHistory from "./AppointmentHistory";
import HealthHistory from "./HealthHistory";

export default function PatientDashboard() {
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
                onClick={() => handleVerticalClick("Appointment")}
                active={verticalActive === "Appointment"}
              >
                Book Appointment
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("AppintmentHistory")}
                active={verticalActive === "AppintmentHistory"}
              >
                Appintment History
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("HealthHistory")}
                active={verticalActive === "HealthHistory"}
              >
                Health History
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
                <MDBTabsPane show={verticalActive === "Appointment"}>
                  <Appointment />
                </MDBTabsPane>
                <MDBTabsPane show={verticalActive === "AppintmentHistory"}>
                  <AppintmentHistory />
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "HealthHistory"}>
                  <HealthHistory />
                </MDBTabsPane>
              </MDBTabsContent>
            </Base>
          </Container>
        </MDBCol>
      </MDBRow>
    </>
  );
}
