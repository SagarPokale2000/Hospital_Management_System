import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { loadAllEmployee, loadAllPatient } from "../../../ServerCall/Admin/Admin";
import Base from "../../Base/Base";

function AllPatient() {
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
    loadAllPatient()
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
        // debugger;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  console.log(data?.content[0]?.admitStatus);
  // debugger
  const user = data?.content;
  // debugger;

  return (
    <div>
      {/* <Base> */}
        <Container>
          <Table hover responsive size="" striped className="w-100  p-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>E-Mail</th>
                <th>Admit Status</th>
              </tr>
            </thead>

            <tbody>
              {
              data && data?.content?.map((user) => {
                return (
                  <tr key={user?.user.id}>
                    <th scope="row">{user?.user.id}</th>
                    <td>{user?.user.firstName}</td>
                    <td>{user?.user.gender}</td>
                    <td>{user?.user.dob}</td>
                    <td>{user?.user.mobileNo}</td>
                    <td>{user?.user.email}</td>
                    <td>{user?.user.admitStatus}</td>
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
      {/* </Base> */}
    </div>
  );
}

export default AllPatient;
