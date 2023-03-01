import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { loadAllEmployee } from "../../../ServerCall/Admin/Admin";
import Base from "../../Base/Base";

function Admin() {
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
    loadAllEmployee()
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

  console.log(data?.content[0]);
  let user = data?.content[0]?.user;
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
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Qualification</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>E-Mail</th>
              </tr>
            </thead>
           
           
            <tbody>
   
   
   
              {user?.map((user) => {
                <tr>
                  <th scope="row">1</th>
                  <td>{user?.firstName}</td>
                </tr>;
              })}

              
               {/* <tr>
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

export default Admin;
