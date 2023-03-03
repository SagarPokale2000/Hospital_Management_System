import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Table } from "reactstrap";
import { GetAppointmentList } from "../../../ServerCall/Doctor/DoctoAxios";
import Base from "../../Base/Base";
import PatientDetails from "./PatientDetails";

function AppointPatientList() {
  const [localData, setData] = useState([
    {
      id: "",
      firstName: "",
      gender: "",
      admitStatus: false,
      action: false,
      mobileNo: "",
      bloodGroup : ""
    },
  ]);

  useEffect(() => {
    GetAppointmentList()
      .then((serverData) => {
        console.log("Server Data");
        console.log(serverData);
        const temp = serverData.map((data) => ({
          id: data.id,
          firstName: data.user.firstName,
          gender: data.user.gender,
          admitStatus: data.admitStatus,
          action: data.action,
          mobileNo: data.user.mobileNo,
          bloodGroup : data.user.bloodGroup
        }));

        setData(temp);
        console.log(temp);
        toast.success("Data Loaded");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  // debugger
  console.log("data in local variable");
  console.log(localData);
  return (
    <div>
      <Base>
        <br />
        <br />
        <br />
        <Container>
          <Table hover responsive size="" striped className="">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                {/* <th>symptoms</th> */}
                <th>Gender</th>
                <th>Contact</th>
                <th>bloodGroup</th>
              </tr>
            </thead>

            <tbody>
              {localData?.map((patient) => {
                return (
                  <tr key={patient?.id}>
                    <th scope="row">{patient?.id}</th>
                    <td>{patient?.firstName}</td>
                    <td>{patient?.gender}</td>
                    <td>{patient?.mobileNo}</td>
                    <td>{patient?.bloodGroup}</td>
                    
                    <Button
                        outline 
                        color="primary"
                        className="my-1"
                        tag={Link}
                        to={`/user/update/patient/${patient.id}`}//
                      >
                        Update
                      </Button>
                    
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Base>
    </div>
  );
}

export default AppointPatientList;
