import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
// import { loadAllEmployee, loadAllPatient } from "../../../ServerCall/Admin/Admin";
import { GetAllAppointmentList } from "../../../ServerCall/Receiptionist/ReceptionistAxios";
import Base from "../../Base/Base";

function AppointmentList() {
  const [data, setData] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  useEffect(() => {
    // load post of postId
    GetAllAppointmentList()
      .then((serverData) => {
        setData({
          // Concatinent the pageContent with new data -> new data with existing data
          content: [...data.content, ...serverData.content],
          totalPages: serverData.totalPages,
          totalElements: serverData.totalElements,
          pageSize: serverData.pageSize,
          lastPage: serverData.lastPage,
          pageNumber: serverData.pageNumber,
          
        });

        // console.log(serverData);
        // setData(serverData);
        //debugger;
      })

      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);


  console.log(data?.content[0]?.admitStatus);
  //debugger
  const user = data?.content;
   debugger;

  return (
    <div>
      <Base>
        <br />
        <br />
        <br />
        <Container>
          <Table hover responsive size="" striped className="w-100  p-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>AppointmentDate</th>
                <th>AppointmentTime</th>
                <th>Symptoms</th>
                <th>MobileNo</th>
                <th>Appointed Doctor</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              {
              data && data?.content?.map((user) => {
                return (
                  <tr key={user?.user.id}>
                    <th scope="row">{user?.user.id}</th>
                    <td>{user?.user.firstName}</td>
                    <td>{user?.user.appointmentDate}</td>
                    <td>{user?.user.appointmentTime}</td>
                    <td>{user?.user.symptoms}</td>
                    <td>{user?.user.mobileNo}</td>
                    <td>{user?.user.doctor}</td>
                    {/* <td>{user?.user.bloodGroup}</td> */}
                  </tr>
                  
                );
              })
              
              
              
              
              }

             
            </tbody>

          </Table>
        </Container>
      </Base>
    </div>
  );
}

export default AppointmentList;
