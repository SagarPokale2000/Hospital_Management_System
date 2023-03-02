import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { loadAllEmployee, loadAllPatient } from "../../../ServerCall/Admin/Admin";
import Base from "../../Base/Base";

function AllPatient() {
  const [data, setData] = useState({
    content: []
  });

  useEffect(() => {
    // load post of postId
    loadAllPatient()
      .then((serverData) => {
        setData({
          // Concatinent the pageContent with new data -> new data with existing data
          content: [...data.content, ...serverData.content]
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

  console.log(data?.content[0]?.admitStatus);
  debugger
  const patient = data?.content;
  // debugger;

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
                <th>Id</th>
                <th>Name</th>
                <th>symptoms</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>bloodGroup</th>
              </tr>
            </thead>

            <tbody>
              {
              data && data?.content?.map((patient) => {
                return (
                  <tr key={patient?.patient.id}>
                    <th scope="row">{patient?.patient.id}</th>
                        <td>{patient?.patient.user.firstName}</td>
                        <td>{patient?.patient.user.email}</td>
                    <td>{patient?.patient.user.gender}</td>
                    <td>{patient?.patient.user.dob}</td>
                    <td>{patient?.patient.user.mobileNo}</td>
                    <td>{patient?.patient.user.bloodGroup}</td>
                  </tr>
                );
              })}

              {/* {
              postContent?.content?.map((post) => (
                // <Post post={post} key={post.postId} deletePost={post} />
                <Post post={post} key={post.postId} />
              ))} */}
{/* 
              <tr>
                <th scope="row">1</th>
                <td>{user?.firstName}</td>
                <td>{user?.roles[0]?.name}</td>
                <td>{user?.gender}</td>
                 <td>{data?.content[0]?.qualificaton}</td> 
                <td>{user?.dob}</td>
                <td>{user?.mobileNo}</td>
                <td>{user?.email}</td>
              </tr> */}
            </tbody>
          </Table>
        </Container>
      </Base>
    </div>
  );
}

export default AllPatient;
