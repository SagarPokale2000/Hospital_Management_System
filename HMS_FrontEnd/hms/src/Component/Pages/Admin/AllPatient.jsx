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
          content: [...data.content, ...serverData.content],
          totalPages: serverData.totalPages,
          totalElements: serverData.totalElements,
          pageSize: serverData.pageSize,
          lastPage: serverData.lastPage,
          pageNumber: serverData.pageNumber,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  console.log(data?.content[0]?.admitStatus)
  console.log(data);
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
                    <th scope="row">{user?.id}</th>
                    <td>{user?.user.firstName+" "+user?.user.lastName}</td>
                    <td>{user?.user.gender}</td>
                    <td>{user?.user.dob}</td>
                    <td>{user?.user.mobileNo}</td>
                    <td>{user?.user.email}</td>
                    <td>{ user.admitStatus ?  "Yes" : "No"}  </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      {/* </Base> */}
    </div>
  );
}

export default AllPatient;
