import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Table,Button,Modal, ModalHeader, ModalBody } from "reactstrap";
import { PrivateAxios } from "../../../ServerCall/Axios/AxiosHelper";
import { GetPatientForAdmit } from "../../../ServerCall/Receiptionist/ReceptionistAxios";
import Base from "../../Base/Base";

function DischargePatient() {
  const [data, setData] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [health, setHealth] = useState({});

    const navigate = useNavigate();

  useEffect(() => {
    // load post of postId
    GetPatientForAdmit()
      .then((serverData) => {
        setData({
          // Concatinent the pageContent with new data -> new data with existing data
          content: [...data.content, ...serverData.content],
          totalPages: serverData.totalPages,
          totalElements: serverData.totalElements,
          pageSize: serverData.pageSize,
          lastPage: serverData.lastPage,
          pageNumber: serverData.pageNumber,
        });
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
    
  const resetData = () => {
      setHealth({});
  };

  const getHealthHistory = (id) => {
    resetData();
    PrivateAxios.get(`patient/`+ id+`/healthhistory/paymentstatus`).then((response) => {
        var result = response.data;
        setHealth(result);
    })
    toggle();
  }

  const confirm = () => {
    ///healthhistory/{Id}/discharge
    debugger;
    PrivateAxios.put(`healthhistory/`+health.id+`/discharge`).then((response) => {
      toggle();
      toast.success("Patient Discharge Successfully");
    })
    resetData();
  }

  const dash = () => {
    navigate('/user/Receptionist')
}
  const user = data?.content;

  return (
    <div>
      <Base>
        <br />
        <br />
        <br /> <Button
                    onClick={dash}
                    className='btn btn-sm btn-info'>
                    Back
                  </Button>
        <Container>
          <Table hover responsive size="" striped className="w-100  p-3">
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>E-Mail</th>
                <th>Allocate Ward</th>
              </tr>
            </thead>

            <tbody>
              {
              data && data?.content?.map((user) => {
                return (
                  <tr key={user?.user.id}>
                    <th scope="row">{user?.id}</th>
                    <td>{user?.user?.firstName + " "+user?.user?.lastName }</td>
                    <td>{user?.user?.gender}</td>
                    <td>{user?.user?.dob}</td>
                    <td>{user?.user?.mobileNo}</td>
                    <td>{user?.user?.email}</td>
                    <td><Button
                    onClick={() => { getHealthHistory(user?.id) }}
                    style={styles.button}
                    className='btn btn-sm btn-success'>
                    Discharge Patient
                  </Button></td>
                  </tr>
                );
              })
              }
            </tbody>
          </Table>
        </Container>
        <Modal
        isOpen={modal}
        toggle={toggle}
        centered={true}
        scrollable={true}
        size={"sm"}
      >
        <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
        <ModalBody>
          <Button outline color="primary" className="ms-3" onClick={confirm}>
            Yes
          </Button>
          <Button outline color="danger" className="ms-3" onClick={toggle}>
            No
          </Button>
        </ModalBody>
      </Modal>
      </Base>
    </div>
  );
}
const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}
export default DischargePatient;