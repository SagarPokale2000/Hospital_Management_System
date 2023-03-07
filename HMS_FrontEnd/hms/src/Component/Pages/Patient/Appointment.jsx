import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Form,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { AddAppoinment } from "../../../ServerCall/Patient/PatientAxios";

function Appointment() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    symptoms: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (event, property) => {
    // dynamic setting of values
    setData({ ...data, [property]: event.target.value });
  };

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  // Reset the form
  const resetData = () => {
    setData({
      symptoms: "",
      appointmentDate: "",
      appointmentTime: "",
    });
  };
  const submitForm = (event) => {
    // debugger
    event.preventDefault();

    console.log(data);
    console.log("Before send to Server");
    // Data validate

    // Call server API
    AddAppoinment(data)
      .then((response) => {
        console.log(response);
        //toast.success("Appointment Book Successfully");
        resetData();
        setModal(!modal);
        toast.success("Apponintment Booked")
        // navigate("/user/Patient");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });
  };
  const dash = () => {
    navigate('/user/Patient')
  };


  return (
    // <div>
      <Container className="mt-0"> 
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
          {/* <Col > */}
            <Card outline color="dark">
              <CardHeader>
                <h1>Welcome {localStorage.getItem("firstName")}</h1>
                <h3>Book Appintment</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="symptoms">Enter symptoms</Label>
                    <Input
                      type="text"
                      placeholder="Enter Here"
                      id="symptoms"
                      onChange={(e) => {
                        handleChange(e, "symptoms");
                      }}
                      value={data.symptoms}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="appointmentDate">Enter Appointment Date</Label>
                    <Input
                      id="appointmentDate"
                      placeholder="Enter Here"
                      type="date"
                      onChange={(e) => {
                        handleChange(e, "appointmentDate");
                      }}
                      value={data.appointmentDate}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="appointmentTime">Enter Appointment Time</Label>
                    <Input
                      id="appointmentTime"
                      placeholder="Enter Here"
                      type="time"
                      onChange={(e) => {
                        handleChange(e, "appointmentTime");
                      }}
                      value={data.appointmentTime}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="primary" onClick={toggle}>
                      Book Appointment
                    </Button>
                    <Button
                      onClick={dash}
                      outline
                      color="secondary"
                      className="ms-3"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={resetData}
                      outline
                      color="danger"
                      className="ms-3"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      <Modal
        isOpen={modal}
        toggle={toggle}
        centered={true}
        scrollable={true}
        size={"sm"}
      >
        <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
        <ModalBody>
          <Button outline color="primary" className="ms-3" onClick={submitForm}>
            Yes
          </Button>
          <Button outline color="danger" className="ms-3" onClick={toggle}>
            No
          </Button>
        </ModalBody>
      </Modal>
      </Container>
    // </div>
  );
}

export default Appointment;
