import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Col, Container, Row, Table } from "reactstrap";
import { GetAllResources } from "../../../ServerCall/HospitalResources/Resources";
import Base from "../../Base/Base";
import VerticalNavbarDoctor from "../Doctor/VerticalNavbarDoctor";

function GetResources() {
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
    GetAllResources()
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
        // setData(serverData);
        debugger;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  // console.log(data?.content);
  const resource = data?.content;
  console.log(resource);
  //debugger;
  return (
    <div>
      <Base>
        <br />
        <br />
        <br />
        <Row>
          <Col sm={{ size: 3 }}>
            <VerticalNavbarDoctor />
          </Col>
          <Col sm={{ size: 9 }}>
            <Table hover responsive size="" striped className="w-100  p-3">
              <thead>
                <tr>
                  <th>id</th>
                  <th>resource_name</th>
                  <th>total_quantity</th>
                  <th>occupy_quantity</th>
                  <th>remaining_quantity</th>
                </tr>
              </thead>

              <tbody>
                {data &&
                  data?.content?.map((resource) => {
                    return (
                      <tr key={resource.id}>
                        <th scope="row">{resource.id}</th>
                        <td>{resource.resource_name}</td>
                        <td>{resource.total_quantity}</td>
                        <td>{resource.occupy_quantity}</td>
                        <td>{resource.remaining_quantity}</td>
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

export default GetResources;
