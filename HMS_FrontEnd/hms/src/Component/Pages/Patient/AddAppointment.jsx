import React, { useState } from "react";
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
} from "reactstrap";
import { AddAppoinment } from "../../../ServerCall/Patient/PatientAxios";
import Base from "../../Base/Base";

function Appointment() {
  const [data, setData] = useState({
    symptoms: "",
    appointmentDate: "",
    appointmentTime: ""
  });

  const handleChange = (event, property) => {
    // dynamic setting of values
    setData({...data, [property]: event.target.value })
    console.log(data);
  };

  // Reset the form
    const resetData = () => {
        setData({
            symptoms: "",
            appointmentDate: "",
            appointmentTime: ""
  });
  }
  const submitForm = (event) => {
    // debugger
    event.preventDefault();

    console.log(data);
    console.log("Before send to Server");
    // Data validate

    // Call server API
    AddAppoinment(data)
        .then((response) => {
          console.log(response)
         //toast.success("Appointment Book Successfully");
        resetData();
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });
  };
//const firstName=localStorage.getItem("firstName")
  return (
      <div>
      <Base>
        <br />
        <Container>
          <Row className="mt-5 mb-5">
            <Col sm={{ size: 6, offset: 3 }}>
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
                      <Button outline color="primary">
                        Book Appointment
                      </Button>
                      <Button
                        onClick={resetData}
                        outline
                        color="secondary"
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
        </Container>
      </Base>
    </div>
  );
}

export default Appointment;
