import React, { useState } from "react";
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
  Button,Modal, ModalHeader, ModalBody, ModalFooter,toggle
} from "reactstrap";
import { AddResource } from "../../../ServerCall/HospitalResources/Resources";
import Base from "../../Base/Base";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddResources() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    resource_name: "",
    total_quantity: "",
      occupy_quantity: "",
      remaining_quantity:""
  });

  const handleChange = (event, property) => {
    // dynamic setting of values
    setData({...data, [property]: event.target.value })
    console.log(data);
  };
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }
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
    AddResource(data)
        .then((response) => {
          console.log(response)
         toast.success("Resource Added Successfully");
          resetData();
          navigate('/AdminGetResources');
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
      });
  };
  const dash = () => {
    navigate('/AdminGetResources')
}
//const firstName=localStorage.getItem("firstName")
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
                  <h3>Add Hospital Resource</h3>
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
                      <Button outline color="primary" onClick={toggle}>
                        Add Resource
                      </Button>
                      <Button
                    onClick={dash}
                    outline
                        color="secondary"
                        className="ms-3">
                    Cancel
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
        <Modal isOpen={modal} toggle={toggle} centered={true} scrollable={true} size={"sm"}>
          <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
          <ModalBody>
            <Button outline
                        color="primary"
                        className="ms-3" onClick={submitForm}>Yes</Button>
            <Button outline
                        color="danger"
                        className="ms-3" onClick={toggle} >No</Button>
            </ModalBody>            
          </Modal>
      </Base>
    </div>
  );
}

export default AddResources;
