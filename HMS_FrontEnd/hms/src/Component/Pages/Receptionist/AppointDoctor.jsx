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
import { PostAllAppointedDoctors } from "../../../ServerCall/Receiptionist/ReceptionistAxios";
import Base from "../../Base/Base";

function AppointDoctor() {
  const [data, setData] = useState({
    symptoms: "",
    doctor: "",
    status: "",
    doctorFee: ""
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
    doctor: "",
    status: "",
    doctorFee: ""
  });
  }
  const submitForm = (event) => {
    // debugger
    event.preventDefault();

    console.log(data);
    console.log("Before send to Server");
    // Data validate

    // Call server API
    PostAllAppointedDoctors(data)
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
                  <h3>Appoint Doctor</h3>
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
                      <Label for="doctor">Enter Doctor Name</Label>
                      <Input
                        id="doctor"
                        placeholder="Enter Here"
                        type="text"
                        onChange={(e) => {
                          handleChange(e, "doctor");
                        }}
                        value={data.doctor}
                      />
                    </FormGroup> 
                                      
                     <FormGroup>
                      <Label for="status">Enter Doctor Status</Label>
                      <Input
                        id="status"
                        placeholder="Enter Here"
                        type="text"
                        onChange={(e) => {
                          handleChange(e, "status");
                        }}
                        value={data.status}
                      />
                    </FormGroup> 

                    <FormGroup>
                      <Label for="doctorFee">Enter Doctor Fee</Label>
                      <Input
                        id="doctorFee"
                        placeholder="Enter Here"
                        type="Number"
                        onChange={(e) => {
                          handleChange(e, "doctorFee");
                        }}
                        value={data.doctorFee}
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

export default AppointDoctor;
