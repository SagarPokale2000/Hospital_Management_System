import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Table } from "reactstrap";
import { GetAllAppintmentHistory } from "../../../ServerCall/Patient/PatientAxios";
import Base from "../../Base/Base";
import { PrivateAxios } from "../../../ServerCall/Axios/AxiosHelper";

function AppintmentHistory(args) {
    const navigate = useNavigate()
  const [data, setData] = useState({
    content: [],
  });
  
  useEffect(() => {
    // load post of postId
    GetAllAppintmentHistory()
      .then((serverData) => {
      console.log(serverData)
      setData({
        // Concatinent the pageContent with new data -> new data with existing data
        content: [...data.content, ...serverData]
      });

      // console.log(serverData);
      // setData(serverData);
      // debugger;
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error in loading");
    });
  }, []);
  const [message, setMessage] = useState([]);
  const chooseMessage = (message) => {
    setMessage(message);
  };

  const getAppointmentHistory = (id) => {

    PrivateAxios.get(`/patient/`+id+`/healthhistory`).then((response) => {
      //const result = response.data
      setData(response.data);//logic issue
      toast.success("Appointment Deleted Successfully");
  })
  }

    const cancelAppointment = (id) => {
        PrivateAxios.delete(`/healthhistory/`+id).then((response) => {
            const result = response.data
            //debugger;
              if (result.success === true) {
                // reload the screen
                getAppointmentHistory(JSON.parse(localStorage.data).user.patient.id);
                  //navigate('/user/AppintmentHistory')
                //toast.success("Appointment Deleted Successfully");
              } else {
                toast.error(result['error'])
              }
            })
  }
  
    const dash = () => {
        navigate('/user/Patient')
  }

  console.log(data?.content);
  const healthhistory = data?.content;

  return (
    <div>
      <Base>
        <br />
        <br />
              <br />
              <Button
                    onClick={dash}
                    className='btn btn-sm btn-info'>
                    Back
                  </Button>
              <Container>
              
          <Table hover responsive size="" striped className="w-100  p-3">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Appintment Date</th>
                <th>Appintment Time</th>
                              <th>symptoms</th>
                              <th>Cancel Appointment</th>
              </tr>
            </thead>
            {/* patient user address medicines */}
            <tbody>
              {data &&
                data?.content?.map((healthhistory) => {
                  return (
                    <tr key={healthhistory?.healthhistory?.id}>
                      <th scope="row">{healthhistory.id}</th>
                      <td>{healthhistory.patient.user.firstName +" " + healthhistory.patient.user.lastName}</td>
                      <td>{healthhistory.appointmentDate}</td>
                      <td>{healthhistory.appointmentTime}</td>
                          <td>{healthhistory.symptoms}</td>
                          <td>   <Button
                    onClick={() => cancelAppointment(healthhistory.id)}
                    style={styles.button}
                    className='btn btn-sm btn-danger'>
                    Cancel
                  </Button></td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Container>
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
  
export default AppintmentHistory;