import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table } from "reactstrap";
import { GetAllResources } from "../../../ServerCall/HospitalResources/Resources";
import Base from "../../Base/Base";
import { RESOURCEAXIOS } from "../../../ServerCall/Axios/AxiosHelper";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
function AdminGetResources() {
  const navigate = useNavigate()
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
          content: [...data.content, ...serverData.content],
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
  console.log(resource)
   //debugger;
  
  const getAdminGetResources = () => {
    debugger;
    axios.get(RESOURCEAXIOS+"/resources?pageNumber=0&pageSize=5",resource).then((response) => {
    const result = response.data

    if (result['status'] === 'success') {
      console.log(result)
      // set the homes to the state member
      setData(result['data'])
    } else {
      toast.error(result['error'])
    }
  })
  }

  const deleteResource = (id) => {
    RESOURCEAXIOS.delete(`/resources/`+id,resource).then((response) => {
          const result = response.data
          if (result['status'] === 'success') {
            // reload the screen
            getAdminGetResources()
            //toast.success("Resource Deleted Successfully");
          } else {
            toast.error(result['error'])
          }
        })
    }
  
    // edit my home
    const updateResource = (id) => {
      // pass the home id which you want to edit
      navigate('/UpdateResource', { state: { ResourceId: id } })
    }
    
  return (
    <div>
      {/* <Base> */}
        <Container>
          <Table hover responsive size="" striped className="w-100  p-3">
            <thead>
            <tr>
            <th>id</th>
                <th>resource_name</th>
                <th>total_quantity</th>
                <th>occupy_quantity</th>
              <th>remaining_quantity</th>
              <th>Update Resource</th>
              <th>Delete Resource</th>
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
                      <td> <button
                    onClick={() => updateResource(resource.id)}
                    style={styles.button}
                    className='btn btn-sm btn-success'>
                    Update
                  </button></td>
                  <td>   <button
                    onClick={() => deleteResource(resource.id)}
                    style={styles.button}
                    className='btn btn-sm btn-danger'>
                    Delete
                  </button></td>
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

const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}


export default AdminGetResources;
