import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Table,Button,Modal, ModalHeader, ModalBody,Input,Label } from "reactstrap";
import { PrivateAxios } from "../../../ServerCall/Axios/AxiosHelper";
import { GetPatientForAdmit } from "../../../ServerCall/Receiptionist/ReceptionistAxios";
import Base from "../../Base/Base";

function AdmitPatient() {
  const [data, setData] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [pat, setPat] = useState({
      wardid:""
  });
    
  const [health, setHealth] = useState({});
    
  const [ward, setWard] = useState([]);

  useEffect(() => {
    // load post of postId
    GetPatientForAdmit()
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
    
  const [modal, setModal] = useState(false);
  const toggle = () => {
      setModal(!modal);
  }
  
    const handleChange = (event, property) => {
        setHealth({ ...health, [property]: event.target.value });
    };
    
  const resetData = () => {
      pat.wardid = "";
      setPat({});
      setWard([]);
      setHealth({});
  };

  const getHealthHistory = (id) => {
    resetData();
    PrivateAxios.get(`patient/`+ id+`/healthhistory/paymentstatus`).then((response) => {
        var result = response.data;
        setHealth(result);
    })
    getAllWards();
  }

  const getAllWards= () => {
    PrivateAxios.get(`wards/`).then((response) => {
      var result = response.data;
      setWard(result);
      //debugger;
    })
    toggle();
  }

  const confirm = () => {
    PrivateAxios.put(`healthhistory/ward/`+pat.wardid,health).then((response) => {
      toast.success("Ward and Bed Allocated Successfully");
    })
    toggle();
    resetData();
  }

  const AllocateWard = (event) => {
    pat.wardid = event.target.value;
  }

  const user = data?.content;

  return (
    <div>
      <Base>
        <Container>
          <Table hover responsive size="" striped className="w-100  p-3">
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>E-Mail</th>
                <th>Allocate Ward</th>
              </tr>
            </thead>

            <tbody>
              {
              data && data?.content?.map((user) => {
                return (
                  <tr key={user?.user.id}>
                    <th scope="row">{user?.id}</th>
                    <td>{user?.user?.firstName + " "+user?.user?.lastName }</td>
                    <td>{user?.user?.gender}</td>
                    <td>{user?.user?.dob}</td>
                    <td>{user?.user?.mobileNo}</td>
                    <td>{user?.user?.email}</td>
                    <td><Button
                    onClick={() => { getHealthHistory(user?.id) }}
                    style={styles.button}
                    className='btn btn-sm btn-success'>
                    Admit Patient
                  </Button></td>
                  </tr>
                );
              })
              }
            </tbody>
          </Table>
        </Container>
        <Modal isOpen={modal} toggle={toggle} centered={true} scrollable={true} size={"md"}>
          <ModalHeader toggle={toggle}>Allocate Bed and Ward</ModalHeader>
          <ModalBody>
              <>
                <Table>
                  <tbody>
                  <tr>
                    <td>
                    <Label for="ward" >Select Ward</Label>
                            <Input
                                type="select"
                                id="ward"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="ward"
                        onChange={(e) => { AllocateWard(e) }}
                                defaultValue={0}
                            >
                       <option disabled value={0} >--Select Ward--</option>
                        {
                          ward.map((d) => (
                            <option value={d?.id} key={d?.id}>
                              {d.wardType+" "+"charges = "+d.wardCharges}
                            </option>
                          ))
                        }
                      </Input>
                    </td>
                </tr>
                <tr>
                    <td>
                    <Label for="allocatedBed">Enter Bed Number </Label>
                      <Input
                        type="text"
                        placeholder="Enter Here"
                        id="allocatedBed"
                        onChange={(e) => {
                          handleChange(e, "allocatedBed");
                        }}
                        value={user.allocatedBed}
                      />             
                    </td>
                </tr>
                    <tr>
                    <th><Button outline color="primary" onClick={() => { confirm() }}> 
                  Admit Patient
                      </Button></th>
                      <th></th>
                    </tr>
                  </tbody>
                </Table>
                </>
          </ModalBody>            
          </Modal>
      </Base>
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
export default AdmitPatient;
