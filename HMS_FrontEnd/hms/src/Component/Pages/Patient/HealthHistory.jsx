import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { healthHistory } from "../../../ServerCall/Patient/PatientAxios";
import Base from "../../Base/Base";

function HealthHistory() {
  const [data, setData] = useState({
    content: [],
  });

  useEffect(() => {
    // load post of postId
    healthHistory()
      .then((serverData) => {
        setData({
          // Concatinent the pageContent with new data -> new data with existing data
          content: [...data.content, ...serverData.content],
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading");
      });
  }, []);

  console.log(data?.content);
  const user = data?.content;
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
                <th>id</th>
                <th>Name</th>
                <th>Appintment Date</th>
                <th>Appintment Time</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data?.content?.map((user) => {
                  return (
                    <tr key={user?.user.id}>
                      <th scope="row">{user?.user.id}</th>
                      <td>{user?.user.firstName + user?.user.lastName}</td>
                      <td>{user?.user.dob}</td>
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

export default HealthHistory;
