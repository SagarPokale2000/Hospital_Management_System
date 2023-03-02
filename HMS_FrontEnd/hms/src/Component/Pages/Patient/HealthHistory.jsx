import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { GetAllHealthHistory } from "../../../ServerCall/Patient/PatientAxios";
import Base from "../../Base/Base";

function HealthHistory() {
  const [data, setData] = useState({
    content: []
  });

  useEffect(() => {
    // load post of postId
    GetAllHealthHistory()
      .then((serverData) => {
        console.log(serverData);
        //debugger;
        serverData.forEach(d => {
          setData({
            // Concatinent the pageContent with new data -> new data with existing data
            content: [...data.content, d]
          });
        })
          .catch((error) => {
            console.log(error);
            toast.error("Error in loading");
          })
      });
  }, []);

  //console.log(data?.content[0]);
  const healthhistory = data?.content;
   //debugger;

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
                <th>id</th>
                <th>Name</th>
                <th>Appintment Date</th>
                <th>Appintment Time</th>
                <th>symptoms</th>
                <th>doctor</th>
                <th>diseases</th>
                <th>admitDate</th>
                <th>dischargeDate</th>
                <th>prescriptionInstruction</th>
                <th>ward</th>
                <th>allocatedBed</th>
              </tr>
            </thead>
            {/* patient user address medicines */}
            <tbody>
              {data &&
                data?.content?.map((healthhistory) => {
                  return (
                    <tr key={healthhistory.id}>
                      <th scope="row">{healthhistory.id}</th>
                      <td>{healthhistory.patient.user.firstName +" " + healthhistory.patient.user.lastName}</td>
                      <td>{healthhistory.appointmentDate}</td>
                      <td>{healthhistory.appointmentTime}</td>
                      <td>{healthhistory.symptoms}</td>
                      <td>{healthhistory.patient.doctor.employee.user.firstName + " " + healthhistory.patient.doctor.employee.user.lastName}</td>
                      <td>{healthhistory.diseases}</td>
                      <td>{healthhistory.admitDate}</td>
                      <td>{healthhistory.dischargeDate}</td>
                      <td>{healthhistory.prescriptionInstruction}</td>
                      <td>{healthhistory.patient.ward.wardType}</td>
                      <td>{healthhistory.allocatedBed}</td>
                    </tr>
                  );
                  debugger;
                })}
            </tbody>
          </Table>
        </Container>
        </Base>
    </div>
  );
}

export default HealthHistory;