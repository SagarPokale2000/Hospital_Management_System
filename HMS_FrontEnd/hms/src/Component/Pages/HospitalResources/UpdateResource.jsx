import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { RESOURCEAXIOS } from "../../../ServerCall/Axios/AxiosHelper";
import {
  Form,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
  Input,
  Button,
} from "reactstrap";
import { UpdateResources } from "../../../ServerCall/HospitalResources/Resources";
import Base from "../../Base/Base";
import { toast } from "react-toastify";

const UpdateResource = (props) => {
    // used to navigate
  const navigate = useNavigate()
    const [data, setData] = useState({
    resource_name: "",
    total_quantity: "",
      occupy_quantity: "",
      remaining_quantity:""
    });
    const location = useLocation()
    useEffect(() => {
        const { ResourceId } = location.state
        getDetails(ResourceId)
    }, [])
    
    const getDetails = (id) => {
        RESOURCEAXIOS
          .get('/resources/' + id)
          .then((response) => {
            const result = response.data
            if (result['status'] === 'success') {
              // set the details
              setData(result['data'])
              console.log(result['data'])
            } else {
              toast.error(result['error'])
    
              // if home not found then to back to the previous page
             // navigate('/AdminGetResources')
            }
          })
    }
    
  const handleChange = (event, property) => {
    // dynamic setting of values
    setData({...data, [property]: event.target.value })
    console.log(data);
  };

  // Reset the form
    const resetData = () => {
        setData({
            resource_name: "",
    total_quantity: "",
      occupy_quantity: "",
      remaining_quantity:""
  });
  }
  const submitForm = (event) => {
    // debugger
    event.preventDefault();

    console.log(data);
    console.log("Before send to Server");
    // Data validate

    // Call server API
    UpdateResources(data,props.id)
        .then((response) => {
          console.log(response)
         toast.success("Resource Added Successfully");
        resetData();
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });
    };
    
  return (
      <div>
      <Base>
        <br />
        <Container>
          <Row className="mt-5 mb-5">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card outline color="dark">
                <CardHeader>
                  
                  <h1>Welcome</h1>
                  <h3>Update Hospital Resource</h3>
                              </CardHeader>
                              <CardBody>
                  <Form onSubmit={submitForm}>
                
                    <FormGroup>
                      <Label for="resource_name">Enter Resource Name</Label>
                      <Input
                        type="text"
                        placeholder="Enter Here"
                        id="resource_name"
                        onChange={(e) => {
                          handleChange(e, "resource_name");
                        }}
                        value={data.resource_name}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="total_quantity">Enter Resource Total Quantity</Label>
                      <Input
                        type="number"
                        placeholder="Enter Here"
                        id="total_quantity"
                        onChange={(e) => {
                          handleChange(e, "total_quantity");
                        }}
                        value={data.total_quantity}
                      />
                                      </FormGroup>
                                      
                    <FormGroup>
                      <Label for="occupy_quantity">Enter Resource Occupy Quantity</Label>
                      <Input
                        type="number"
                        placeholder="Enter Here"
                        id="occupy_quantity"
                        onChange={(e) => {
                          handleChange(e, "occupy_quantity");
                        }}
                        value={data.occupy_quantity}
                      />
                                  </FormGroup>
                                  
                    <FormGroup>
                      <Label for="remaining_quantity">Enter Resource Remaining Quantity</Label>
                      <Input
                        type="number"
                        placeholder="Enter Here"
                        id="remaining_quantity"
                        onChange={(e) => {
                          handleChange(e, "remaining_quantity");
                        }}
                        value={data.remaining_quantity}
                      />
                    </FormGroup>
                   

                    <Container className="text-center">
                      <Button outline color="primary">
                        Update Resource
                      </Button>
                      <Button
                        onClick={resetData}
                        outline
                        color="secondary"
                        className="ms-3"
                      >
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
}

export default UpdateResource;
