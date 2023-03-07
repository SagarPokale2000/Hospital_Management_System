import React, { useState } from "react";
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
  ModalBody
} from "reactstrap";
import { AddAppoinment } from "../../../ServerCall/Patient/PatientAxios";
import Base from "../../Base/Base";

function Appointment() {
  const [data, setData] = useState({
    symptoms: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (event, property) => {
    // dynamic setting of values
    setData({ ...data, [property]: event.target.value });
    console.log(data);
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
    AddAppoinment(data,JSON.parse(localStorage.data).user.patient.id)
      .then((response) => {
        console.log(response);
        resetData();
        setModal(!modal);
        toast.success("Apponintment Booked Successfully");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });
  };


  return (
      <Container className="mt-0"> 
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card outline color="dark">
              <CardHeader>
                <h1>Welcome Patient</h1>
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
  );
}

export default Appointment;
