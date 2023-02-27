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
import Base from "../../Base/Base";

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName : "",
    email: "",
    password: "",
    securityQue: "",
    securityAns : "",
    mobileNo : "",

  });

  const handleChange = (event, property) => {
    // dynamic setting of values
    setData({ ...data, [property]: event.target.value });

    // console.log(data);
  };

  return (
    <div>
      <Base>
        <Container>
          <Row className="mt-5 mb-5">
          

          {JSON.stringify(data)}
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>
                  <h1>Welcome Patient</h1>
                  <h3>Fill Info to register</h3>
                </CardHeader>

                <CardBody>
                  {/* Creating Form */}
                  {/* <Form onSubmit={submitForm}> */}
                  <Form>
                    <FormGroup>
                      <Label for="firstName">Enter Your First Name</Label>
                      <Input
                        type="text"
                        placeholder="Enter Here"
                        id="firstName"
                        onChange={(e) => {
                          handleChange(e, "firstName");
                        }}
                        value={data.firstName}
                        // invalid={true}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="lastName">Enter Your Last Name</Label>
                      <Input
                        type="text"
                        placeholder="Enter Here"
                        id="lastName"
                        onChange={(e) => {
                          handleChange(e, "lastName");
                        }}
                        value={data.lastName}
                        // invalid={true}
                      />
                    </FormGroup>


                    <FormGroup>
                      <Label for="email">Enter Your E-mail</Label>
                      <Input
                        type="email"
                        placeholder="Enter Here"
                        id="email"
                        onChange={(e) => { handleChange(e, 'email') }}
                        value={data.email}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="password">Enter Your Password</Label>
                      <Input
                        type="password"
                        placeholder="Enter Here"
                        id="password"
                        onChange={(e) => { handleChange(e, 'password') }}
                        value={data.password}
                      />
                    </FormGroup>

{/* Gender */}

                    <FormGroup>
                      <Label for="securityQue">Enter Your Security Question</Label>
                      <Input
                        id="securityQue"
                        placeholder="Enter Here"
                        type="text"
                        onChange={(e) => { handleChange(e, 'securityQue') }}
                        value={data.securityQue}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="securityAns">Enter Your Security Answer</Label>
                      <Input
                        id="securityAns"
                        placeholder="Enter Here"
                        type="password"
                        onChange={(e) => { handleChange(e, 'securityAns') }}
                        value={data.securityAns}
                      />
                    </FormGroup>


                    <FormGroup>
                      <Label for="mobileNo">Enter Your Mobile Number</Label>
                      <Input
                        id="mobileNo"
                        placeholder="Enter Here"
                        type="number"
                        onChange={(e) => { handleChange(e, 'mobileNo') }}
                        value={data.mobileNo}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="bloodGroup">Enter Your Blood Group</Label>
                      <Input
                        id="bloodGroup"
                        placeholder="Enter Here"
                        type="text"
                        onChange={(e) => { handleChange(e, 'bloodGroup') }}
                        value={data.bloodGroup}
                      />
                    </FormGroup>


                    <FormGroup>
                      <Label for="dob">Enter Your DOB</Label>
                      <Input
                        id="dob"
                        placeholder="Enter Here"
                        type="date"
                        onChange={(e) => { handleChange(e, 'dob') }}
                        value={data.dob}
                      />
                    </FormGroup>

                    <Container className="text-center">
                      <Button outline color="primary">
                        Register
                      </Button>
                      {/* <Button onClick={resetData} outline color="secondary" className="ms-3">Reset</Button> */}
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

export default Signup;
