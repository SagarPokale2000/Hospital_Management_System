import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { GetAppointmentList } from "../../../ServerCall/Doctor/DoctoAxios";
import Base from "../../Base/Base";

function AppointPatientList() {
  const [data, setData] = useState({
    content: []
  });

  useEffect(() => {
    // load post of postId
    GetAppointmentList()
      .then((serverData) => {
        setData({
          // Concatinent the pageContent with new data -> new data with existing data
          content: [...data.content, ...serverData.content]
        });

        // console.log(serverData);
        // setData(serverData);
        // debugger;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  //console.log(data?.content[0]?.admitStatus);
  debugger
  const patient = data?.content;
  // debugger;

  return (
    <div>
      <Base>
        <br />
        <br />
        <br />
        <Container>
          <Table hover responsive size="" striped className="w-100  p-3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>symptoms</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>bloodGroup</th>
              </tr>
            </thead>

            <tbody>
              {
              data && data?.content?.map((patient) => {
                return (
                  <tr key={patient?.patient.id}>
                    <th scope="row">{patient?.patient.id}</th>
                        <td>{patient?.patient.user.firstName}</td>
                        <td>{patient?.patient.user.email}</td>
                    <td>{patient?.patient.user.gender}</td>
                    <td>{patient?.patient.user.dob}</td>
                    <td>{patient?.patient.user.mobileNo}</td>
                    <td>{patient?.patient.user.bloodGroup}</td>
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
