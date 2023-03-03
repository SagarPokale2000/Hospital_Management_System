import React, { useContext, useEffect, useState } from "react";
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
  ButtonGroup,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { getPatientDetails, updatePatientStatus } from "../../../ServerCall/Doctor/DoctoAxios";
import Base from "../../Base/Base";
import { toast } from "react-toastify";

function PatientDetails(props) {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [admitStatus, setAdmitStatus] = useState(false);

  const [data, setData] = useState({
    admitStatus: false,
    health_history: [],
  });

  const [health_history, setHealth_history] = useState({
    diseases: "",
    prescriptionInstruction: "",
  });

  useEffect(() => {
    getPatientDetails(id).then((serverData) => {
      setName(serverData.user.firstName);
    });
  }, []);

  const handleChange = (event, field) => {
    setHealth_history({ ...health_history, [field]: event.target.value });
  };

  //   console.log(health_history);
  // console.log(data.admitStatus);

  const handleFormSubmit = () => {
    console.log("Inside server call");
    // setData((data) => ({
    //   ...data,
    //   health_history: [...data.health_history, health_history],
    //   admitStatus,
    // }));

    updatePatientStatus(id, data).then((serverData) => {
      console.log('data from server')
      console.log(serverData);
      toast.success("Updated the Patient")
    });

    console.log(data);
  };

  useEffect(() => {
    setData((data) => ({
      ...data,
      health_history: [...data.health_history, health_history],
      admitStatus,
    }));
  }, [admitStatus]);

  return (
    <Base>
      <br />
      <br />
      <br />
      <br />
      <Container>
        {/* {JSON.stringify(loginDetail)} */}
        <Row className="mt-3">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card outline color="dark">
              <CardHeader>
                <h3>Update Patient</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="name">Patient Name</Label>
                    <Input id="name" value={name} disabled />
                  </FormGroup>

                  <FormGroup>
                    <Label for="diseases">Enter Diseases</Label>
                    <Input
                      type="text"
                      id="diseases"
                      //   value={loginDetail.username}
                      onChange={(e) => handleChange(e, "diseases")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="prescriptionInstruction">
                      Enter Prescription Instruction
                    </Label>
                    <Input
                      type="text"
                      id="prescriptionInstruction"
                      //   value={loginDetail.password}
                      onChange={(e) =>
                        handleChange(e, "prescriptionInstruction")
                      }
                    />
                  </FormGroup>

                  <FormGroup className="text-center">
                    <Label>Admit Patient</Label>
                    <ButtonGroup>
                      <Button
                        color="primary"
                        outline
                        onClick={() => setAdmitStatus(true)}
                        active={admitStatus === true}
                        className="ms-5"
                      >
                        Yes
                      </Button>
                      <Button
                        color="primary"
                        outline
                        onClick={() => setAdmitStatus(false)}
                        active={admitStatus === false}
                      >
                        No
                      </Button>
                    </ButtonGroup>
                  </FormGroup>

                  <Container className="text-center mt-5">
                    <Button
                      outline
                      color="primary"
                      onClick={() => handleFormSubmit()}
                    >
                      Update
                    </Button>
                    <Button
                      outline
                      color="secondary"
                      className="ms-2"
                      //   onClick={handleReset}
                    >
                      Clear
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default PatientDetails;
