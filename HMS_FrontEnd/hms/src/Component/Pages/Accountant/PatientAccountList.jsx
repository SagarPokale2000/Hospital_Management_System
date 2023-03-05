import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Table,Modal, ModalHeader, ModalBody, ModalFooter,toggle } from "reactstrap";
import { GetPatientForAccountant } from "../../../ServerCall/Accountant/AccountantAxios";
import Base from "../../Base/Base";
import { PrivateAxios } from "../../../ServerCall/Axios/AxiosHelper";

function PatientAccountList() {
    const navigate = useNavigate()
    const [data, setData] = useState({
      content: [],
      totalPages: "",
      totalElements: "",
      pageSize: "",
      lastPage: false,
      pageNumber: "",
    });
    const [modal, setModal] = useState(false);
  const toggle = () => {
      
      setModal(!modal);
    }
    useEffect(() => {
      // load post of postId
      GetPatientForAccountant()
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
  
           console.log(serverData);
          // setData(serverData);
          // debugger;
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error in loading");
        });
    }, []);
  
    // debugger
  const user = data?.content;
  
  const UpdatePayment = (id) => {
    // PrivateAxios.delete(`/healthhistory/`+id).then((response) => {
    //     const result = response.data
    //     //debugger;
    //       if (result.success === true) {
    //         // reload the screen
    //         getAppointmentHistory(JSON.parse(localStorage.data).user.patient.id);
    //           //navigate('/user/AppintmentHistory')
    //         //toast.success("Appointment Deleted Successfully");
    //       } else {
    //         toast.error(result['error'])
    //       }
    //     })
  }
  
    // debugger;
    const dash = () => {
      navigate('/user/Accountant')
}
    return (
      <div>
        <Base>
          <br/><br/><br/><Button
                    onClick={dash}
                    className='btn btn-sm btn-info'>
                    Back
                  </Button>
          <Container>
            <Table hover responsive size="" striped className="w-100  p-3">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Contact</th>
                  <th>E-Mail</th>
                  <th>Update Payment</th>
                  <th>Generate Invoice</th>
                </tr>
              </thead>
  
              <tbody>
                {
                data && data?.content?.map((user) => {
                  return (
                    <tr key={user?.user.id}>
                      <th scope="row">{user?.id}</th>
                      <td>{user?.user.firstName}</td>
                      <td>{user?.user.gender}</td>
                      <td>{user?.user.dob}</td>
                      <td>{user?.user.mobileNo}</td>
                      <td>{user?.user.email}</td>
                      <td><Button
                    onClick={toggle}
                    style={styles.button}
                    className='btn btn-sm btn-success'>
                    Update Payemnt
                  </Button></td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
          <Modal isOpen={modal} toggle={toggle} centered={true} scrollable={true} size={"sm"}>
          <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
          <ModalBody>
            <Button outline
                        color="primary"
                        className="ms-3" onClick={() => UpdatePayment(user.id)}>Yes</Button>
            <Button outline
                        color="danger"
                        className="ms-3" onClick={toggle} >No</Button>
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
export default PatientAccountList;