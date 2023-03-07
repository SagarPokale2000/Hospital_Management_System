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
import AppointmentList from "./AppointmentList";
import { Container } from "reactstrap";
import Base from "../../Base/Base";
import AdmitPatient from "./AdmitPatient";
import DischargePatient from "./DischargePatient";

export default function ReceptionistDashboard() {
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
                onClick={() => handleVerticalClick("AppoList")}
                active={verticalActive === "AppoList"}
              >
                Appointment List
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("AdmitList")}
                active={verticalActive === "AdmitList"}
              >
                Admit List
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("Discharge")}
                active={verticalActive === "Discharge"}
              >
                Discharge
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
            
                <MDBTabsPane show={verticalActive === "AppoList"}>
                  <AppointmentList />
                </MDBTabsPane>
            
                <MDBTabsPane show={verticalActive === "AdmitList"}>
                  <AdmitPatient />
                </MDBTabsPane>

                <MDBTabsPane show={verticalActive === "Discharge"}>
                  <DischargePatient />
                </MDBTabsPane>
              </MDBTabsContent>
            </Base>
          </Container>
        </MDBCol>
      </MDBRow>
    </>
  );
}
