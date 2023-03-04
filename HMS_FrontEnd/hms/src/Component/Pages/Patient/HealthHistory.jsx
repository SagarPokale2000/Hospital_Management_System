import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { GetAllHealthHistory } from "../../../ServerCall/Patient/PatientAxios";
import Base from "../../Base/Base";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,toggle } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { MYAXIOIS } from "../../../ServerCall/Axios/AxiosHelper";

function HealthHistory(args) {
  const [data, setData] = useState({
    content: [],
  });
  const [medicine, setMedicine] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // load post of postId
    GetAllHealthHistory()
      .then((serverData) => {
      //console.log(serverData)
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

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }

  const dash = () => {
    navigate('/user/Patient')
}

 // console.log(data?.content);
  const healthhistory = data?.content;
  
const getMedicines = (id) => {

  MYAXIOIS.get(`/healthhistory/` + id + `/medicine`).then((response) => {
   // content: [...data.content, ...serverData]
    setMedicine(response.data);
      toggle()
    })
  }
  return (
    <div>
      <Base>
        <br />
        <br />
        <br />
        <Button
                    onClick={dash}
                    className='btn btn-sm btn-info'>
                    Back
                  </Button>
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
                      {/* <td>{healthhistory.medicine.map((m) => {
                        debugger;
                        <div>
                          {m.id}
                         </div>
                      })}</td> */}
                      <td><Button color="primary" onClick={() => { getMedicines(healthhistory.id) }}>
                                                Medicines
                                            </Button></td>
                      {/* <td>
                        <Button color="primary" onClick={() => { toggle(healthhistory.medicines) }}>
                                                Medicines
                                            </Button> */}
                        {/* <tbody>{healthhistory&&
                          healthhistory.medicines.map((hh) => {
                            debugger;
                            console.log(hh.medicineName);
                          <tr key={hh.id}>
                            <td scope="row">
                              {hh.medicineName}
                            </td>
                          </tr>
                            })}
                       </tbody> */}
                      {/* </td> */}
                      {/*getMedicines()  */}
                    </tr>
                  );
                  debugger;
                })}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={modal} toggle={toggle} centered={true} scrollable={true} size={"lg"}>
          <ModalHeader toggle={toggle}>Medicines</ModalHeader>
          <ModalBody>
           ( <>
              <table>
                {
                  medicine.map((medicine) => {
                    <tr key={medicine?.medicine?.id}>
                      <td>{medicine.id}</td>
                    </tr>
                  }
                  )
                }</table>
            </>)
            </ModalBody>            
          </Modal>
      </Base>
    </div>
  );
}


export default HealthHistory;
