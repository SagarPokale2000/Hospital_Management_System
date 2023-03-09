import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Col, Container, Row, Table } from "reactstrap";
import { loadAllEmployee } from "../../../ServerCall/Admin/Admin";
import Base from "../../Base/Base";
import VerticalNavbarAdmin from "./VerticalNavbarAdmin";

function AllEmployee() {
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
          content: [...serverData.content],
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

  return (
    <div>
      <Base>
        <br />
        <br />
        <br />
        <Row>
          <Col sm={{ size: 3 }}>
            <VerticalNavbarAdmin />
          </Col>
          <Col sm={{ size: 8 }}>
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
                {data &&
                  data?.content?.map((user) => {
                    return (
                      <tr key={user?.user.id}>
                        <th scope="row">{user?.id}</th>
                        <td>
                          {user?.user.firstName + " " + user?.user.lastName}
                        </td>
                        <td>{user?.user.roles[0].name}</td>
                        <td>{user?.user.gender}</td>
                        <td>{user?.qualificaton}</td>
                        <td>{user?.user.dob}</td>
                        <td>{user?.user.mobileNo}</td>
                        <td>{user?.user.email}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Base>
    </div>
  );
}

export default AllEmployee;
