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
import { singup } from "../../../ServerCall/User/SignUp_LogIn";
import Base from "../../Base/Base";

function Signup() {
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender : "",
    securityQue: "",
    securityAns: "",
    mobileNo: "",
    bloodGroup: "",
    dob: "",
    address : {},
    roles : []
  })

  const [data, setData] = useState({
    
    user : {}

  });

  

  const handleChange = (event, property) => {
    // dynamic setting of values
    setUser({ ...user, [property]: event.target.value });
    setData( {user})
    // console.log(user);
    console.log(data);
  };

  // Reset the form
  const resetData = () => {
    // setData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   gender : "",
    //   securityQue: "",
    //   securityAns: "",
    //   mobileNo: "",
    //   bloodGroup: "",
    //   dob: "",
    // });
  };

  const submitForm = (event) => {
    // debugger
    event.preventDefault();

    // if (error.isError) {
    //     toast.error("Form data is Invalid !!!!!!!!!!")
    //     setError({...error, isError:false})
    //     return;
    // }
    setData({user})
    console.log(data);
    console.log("Before send to Server");
    // Data validate

    // Call server API
    singup(data)
      .then((response) => {
        console.log(response);
        console.log("Success LOG");
        console.log("After receiving to Server response");
        // toast.success("User Registred as " + response.id);
        resetData();
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");

        //Handling Error
        // setError({
        //     errors: error,
        //     isError: true
        // })
      });
  };

  return (
    <div>
      <Base>
        <br />
        <Container>
          <Row className="mt-5 mb-5">
            {JSON.stringify(data)}
            <Col sm={{ size: 6, offset: 3 }}>
              <Card outline color="dark">
                <CardHeader>
                  <h1>Welcome Patient</h1>
                  <h3>Fill Info to register</h3>
                </CardHeader>

                <CardBody>
                  {/* Creating Form */}
                  <Form onSubmit={submitForm}>
                    {/* <Form> */}
                    <FormGroup>
                      <Label for="firstName">Enter Your First Name</Label>
                      <Input
                        type="text"
                        placeholder="Enter Here"
                        id="firstName"
                        onChange={(e) => {
                          handleChange(e, "firstName");
                        }}
                        value={user.firstName}
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
                        value={user.lastName}
                        // invalid={true}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="email">Enter Your E-mail</Label>
                      <Input
                        type="email"
                        placeholder="Enter Here"
                        id="email"
                        onChange={(e) => {
                          handleChange(e, "email");
                        }}
                        value={user.email}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="password">Enter Your Password</Label>
                      <Input
                        type="password"
                        placeholder="Enter Here"
                        id="password"
                        onChange={(e) => {
                          handleChange(e, "password");
                        }}
                        value={user.password}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="gender">Gender</Label>
                      <Input id="gender" name="select" type="select"  onChange={(e) => {
                          handleChange(e, "gender");
                        }} defaultValue="Select">
                        <option disabled>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="securityQue">
                        Enter Your Security Question
                      </Label>
                      <Input
                        id="securityQue"
                        placeholder="Enter Here"
                        type="text"
                        onChange={(e) => {
                          handleChange(e, "securityQue");
                        }}
                        value={user.securityQue}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="securityAns">
                        Enter Your Security Answer
                      </Label>
                      <Input
                        id="securityAns"
                        placeholder="Enter Here"
                        type="password"
                        onChange={(e) => {
                          handleChange(e, "securityAns");
                        }}
                        value={user.securityAns}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="mobileNo">Enter Your Mobile Number</Label>
                      <Input
                        id="mobileNo"
                        placeholder="Enter Here"
                        type="number"
                        onChange={(e) => {
                          handleChange(e, "mobileNo");
                        }}
                        value={user.mobileNo}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="bloodGroup">Enter Your Blood Group</Label>
                      <Input
                        id="bloodGroup"
                        placeholder="Enter Here"
                        type="text"
                        onChange={(e) => {
                          handleChange(e, "bloodGroup");
                        }}
                        value={user.bloodGroup}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="dob">Enter Your DOB</Label>
                      <Input
                        id="dob"
                        placeholder="Enter Here"
                        type="date"
                        onChange={(e) => {
                          handleChange(e, "dob");
                        }}
                        value={user.dob}
                      />
                    </FormGroup>

                    <Container className="text-center">
                      <Button outline color="primary">
                        Register
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

export default Signup;
