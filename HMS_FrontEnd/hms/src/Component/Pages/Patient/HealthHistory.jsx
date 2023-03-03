import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { GetAllHealthHistory } from "../../../ServerCall/Patient/PatientAxios";
import Base from "../../Base/Base";

function HealthHistory() {
  const [data, setData] = useState({
    content: [],
  });

  useEffect(() => {
    // load post of postId
    GetAllHealthHistory()
      .then((serverData) => {
      console.log(serverData)
      setData({
        // Concatinent the pageContent with new data -> new data with existing data
        content: [...data.content, ...serverData]
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

  console.log(data?.content);
  const healthhistory = data?.content;
  // debugger;
  // getMedicines(){
  //   return this.healthhistory.medicines.map(() => {
      
  //   })
  // }

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
                <th>allocatedBed</th>
                <th>Medicines</th>
              </tr>
            </thead>
            {/* patient user address medicines */}
            <tbody>
              {data &&
                data?.content?.map((healthhistory) => {
                  return (
                    <tr key={healthhistory?.healthhistory?.id}>
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
                      <td>{healthhistory.allocatedBed}</td>
                      <td>
                        <tbody>{healthhistory&&
                          healthhistory.medicines.map((hh) => {
                            debugger;
                            console.log(hh.medicineName);
                          <tr key={hh.id}>
                            <td scope="row">
                              {hh.medicineName}
                            </td>
                          </tr>
                            })}
                       </tbody>
                      </td>
                      {/*getMedicines()  */}
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
