import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  GetAppointmentList,
  getPatientDetails,
  updatePatientStatus,
} from "../../../ServerCall/Doctor/DoctoAxios";
import Base from "../../Base/Base";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  Form,
  Card,
  Table,
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

function AppointPatientList(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [localData, setData] = useState([
    {
      id: "",
      firstName: "",
      gender: "",
      admitStatus: false,
      mobileNo: "",
      bloodGroup: "",
    },
  ]);

  useEffect(() => {
    GetAppointmentList()
      .then((serverData) => {
        console.log("Server Data");
        console.log(serverData);

        const temp = serverData.map((data) => ({
          id: data.id,
          firstName: data.user.firstName,
          gender: data.user.gender,
          admitStatus: data.admitStatus,
          mobileNo: data.user.mobileNo,
          bloodGroup: data.user.bloodGroup,
        }));

        setData(temp);
        console.log(temp);
        toast.success("Data Loaded");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  // ---------------------------------------------------------------------

  const [name, setName] = useState("");

  const [admitStatus, setAdmitStatus] = useState(false);

  const [value, setValue] = useState({
    current_status: false,
    admitStatus: false,
    health_history: [],
  });

  const [health_history, setHealth_history] = useState({
    diseases: "",
    prescriptionInstruction: "",
  });

  const [id, setId] = useState();

  const updateValue = (patientId) => {
    setId(patientId);
    setModal(!modal);
    console.log(patientId);
  };

  useEffect(() => {
    getPatientDetails(id).then((servervalue) => {
      setName(servervalue.user.firstName + " " + servervalue.user.lastName);
    });
  }, [id]);

  const handleChange = (event, field) => {
    setHealth_history({ ...health_history, [field]: event.target.value });

    console.log(health_history);
  };

  const handleFormSubmit = () => {
    console.log("Inside server call");

    updatePatientStatus(id, value).then((servervalue) => {
      console.log("value from server");
      console.log(servervalue);
      toast.success("Updated the Patient");
    });

    console.log(value);
  };

  useEffect(() => {
    setValue((value) => ({
      ...value,
      health_history: [...value.health_history, health_history],
      admitStatus : admitStatus
    }));
  }, [admitStatus]);

  // ---------------------------------------------------------------------

  return (
    <Container>
      <Table hover responsive size="" striped className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            {/* <th>symptoms</th> */}
            <th>Gender</th>
            <th>Contact</th>
            <th>bloodGroup</th>
          </tr>
        </thead>

        <tbody>
          {localData?.map((patient) => {
            return (
              <tr key={patient?.id}>
                <th scope="row">{patient?.id}</th>
                <td>{patient?.firstName}</td>
                <td>{patient?.gender}</td>
                <td>{patient?.mobileNo}</td>
                <td>{patient?.bloodGroup}</td>

                <Button
                  outline
                  color="primary"
                  className="my-1"
                  onClick={() => {
                    updateValue(patient.id);
                  }}
                  // tag={Link}
                >
                  Update
                </Button>
              </tr>
            );
          })}
          {/* to={`/user/update/patient/${patient.id}`} */}
        </tbody>
      </Table>

      {/* ------------------------------------------------------------------- */}

      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Update Patient</ModalHeader>
        <ModalBody>
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
                value={health_history.diseases}
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
                onChange={(e) => handleChange(e, "prescriptionInstruction")}
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
          </Form>
        </ModalBody>
        <ModalFooter>
          <Container className="text-center ">
            <Button outline color="primary" onClick={() => handleFormSubmit()}>
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
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default AppointPatientList;
