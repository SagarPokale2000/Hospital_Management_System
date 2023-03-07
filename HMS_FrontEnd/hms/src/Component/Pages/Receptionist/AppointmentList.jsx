import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Container,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
} from "reactstrap";
import { PrivateAxios } from "../../../ServerCall/Axios/AxiosHelper";
import { GetAllAppointmentList } from "../../../ServerCall/Receiptionist/ReceptionistAxios";

function AppointmentList() {
  const [data, setData] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [pat, setPat] = useState({
    id: "",
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
    doctorId: "",
  });

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    // load post of postId
    GetAllAppointmentList()
      .then((serverData) => {
        setData({
          // Concatinent the pageContent with new data -> new data with existing data
          content: [...serverData.content],
          totalPages: serverData.totalPages,
          totalElements: serverData.totalElements,
          pageSize: serverData.pageSize,
          lastPage: serverData.lastPage,
          pageNumber: serverData.pageNumber,
        });
        console.log(serverData);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const resetData = () => {
    pat.id = "";
    pat.appointmentDate = "";
    pat.appointmentTime = "";
    pat.symptoms = "";
    pat.doctorId = "";
    setPat({});
    setDoctor([]);
  };

  const getHealthHistory = (id) => {
    resetData();
    pat.id = id;
    PrivateAxios.get(`patient/` + id + `/healthhistory/paymentstatus`).then(
      (response) => {
        var result = response.data;
        pat.appointmentDate = result.appointmentDate;
        pat.appointmentTime = result.appointmentTime;
        setPat({ ...pat, symptoms: result.symptoms });
      }
    );
    getAllDocotors();
  };

  const getAllDocotors = () => {
    PrivateAxios.get(`doctors`).then((response) => {
      var result = response.data;
      setDoctor(result);
    });
    toggle();
  };

  const confirmDoctor = () => {
    debugger;
    PrivateAxios.put(`patients/` + pat.id + `/doctor/` + pat.doctorId).then(
      (response) => {
        toggle();
        toast.success("Doctor updated Successfully");
      }
    );
    resetData();
  };

  const AppointDoctor = (event) => {
    debugger;
    pat.doctorId = event.target.value;
  };

  return (
    <div>
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
              <th>Assign Doctor</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data?.content?.map((user) => {
                return (
                  <tr key={user?.user.id}>
                    <th scope="row">{user?.id}</th>
                    <td>
                      {user?.user?.firstName + " " + user?.user?.lastName}
                    </td>
                    <td>{user?.user?.gender}</td>
                    <td>{user?.user?.dob}</td>
                    <td>{user?.user?.mobileNo}</td>
                    <td>{user?.user?.email}</td>
                    <td>
                      <Button
                        onClick={() => {
                          getHealthHistory(user?.id);
                        }}
                        style={styles.button}
                        className="btn btn-sm btn-success"
                      >
                        Appoint Doctor
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
      <Modal
        isOpen={modal}
        toggle={toggle}
        centered={true}
        scrollable={true}
        size={"md"}
      >
        <ModalHeader toggle={toggle}>Update Patient Payment</ModalHeader>
        <ModalBody>
          <>
            <Table>
              <tbody>
                <tr>
                  <th>Appointment Date = </th>
                  <td>{pat.appointmentDate}</td>
                </tr>
                <tr>
                  <th>Appointment Time = </th>
                  <td>{pat.appointmentTime}</td>
                </tr>
                <tr>
                  <th>Symptoms = </th>
                  <td>{pat.symptoms}</td>
                </tr>
                <tr>
                  <td>
                    <Label for="doctor">Select Doctor</Label>
                    <Input
                      type="select"
                      id="doctor"
                      placeholder="Enter here"
                      className="rounded-0"
                      name="id"
                      onChange={(e) => {
                        AppointDoctor(e);
                      }}
                      defaultValue={0}
                    >
                      <option disabled value={0}>
                        --Select Docotor--
                      </option>
                      {doctor.map((d) => (
                        <option value={d?.id} key={d?.id}>
                          {d.employee.user.firstName +
                            " " +
                            d.employee.user.lastName}
                        </option>
                      ))}
                    </Input>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Button
                      outline
                      color="primary"
                      onClick={() => {
                        confirmDoctor();
                      }}
                    >
                      Allocate Doctor
                    </Button>
                  </th>
                  <th></th>
                </tr>
              </tbody>
            </Table>
          </>
        </ModalBody>
      </Modal>
    </div>
  );
}
const styles = {
  h3: {
    textAlign: "center",
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
};
export default AppointmentList;
