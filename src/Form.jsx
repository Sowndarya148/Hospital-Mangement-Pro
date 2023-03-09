import React, { Component } from "react";
import axios from "axios";
import "./Form.css";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        id:'',
        name:"",
        age:'',
        address:'',
        did:'',
        dname:'',
            Data: [], 
        };
    }

    componentDidMount() {
        
        axios.get("http://localhost:8080/getPatient").then((response) => {
            this.setState({ Data: response.data });
        });
    }

    handleid = (event) =>{
        this.setState({ id : event.target.value});
    };
    handlename = (event) =>{
        this.setState({name : event.target.value});
    };
    handleage = (event) =>{
        this.setState({ age : event.target.value});
    };
    handleaddress = (event) =>{
        this.setState({ address : event.target.value});
    };
    handledid= (event) =>{
        this.setState({ did: event.target.value});
    };
    handledname = (event) =>{
        this.setState({ dname : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            did: this.state.did,
            dname: this.state.dname,
        };
        console.log(data);
        axios.post("http://localhost:8080/addPatient", data).then((response) => {
            
            this.setState({
                Data: [...this.state.Data, response.data],
                id:'',
                name:"",
                age:'',
                address:'',
                did:'',
                dname:'',
            });
        });
    };

    handleUpdate = (id, data) => {
        axios.put(`http://localhost:8080/update/${id}`, data).then((response) => {
            
            const updatedData = this.state.Data.map((details) => {
                if (details.id === response.data.id) {
                    return response.data;
                } else {
                    return details;
                }
            });
            this.setState({ fuelData: updatedData });
        });
    };

    handleDelete = (id) => {
        
        axios.delete(`http://localhost:8080/delete/${id}`).then((response) => {
            
            const updatedData = this.state.Data.filter(
                (details) => details.id !== id
            );
            this.setState({ fuelData: updatedData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            name: data.name,
            age: data.age,
            address: data.address,
            did: data.did,
            dname: data.dname,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            did: this.state.did,
            dname: this.state.dname,
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:8080/update/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    id:'',
                    name:"",
                    age:'',
                    address:'',
                    did:'',
                    dname:'',
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="hospital" >
               <label className="login-label">Patient Id </label>
               <input
               className="hospital"
               type="text"
               value={this.state.id}
               onChange={this.handleid}
               />

               <br></br><br></br>

               <label className="login-label">Patient Name </label>
               <input
               className="hospital"
               type="text"
               value={this.state.name}
               onChange={this.handlename}
               />
                
                <br></br><br></br>
                <label className="login-label">Patient Age </label>
               <input
               className="hospital"
               type="text"
               value={this.state.age}
               onChange={this.handleage}
               />
                
                <br></br><br></br>


               <label className="login-label">Patient Address </label>
               <input
               className="hospital"
               type="text"
               value={this.state.address}
               onChange={this.handleaddress}
               />

<br></br><br></br>

               <label className="login-label">Doctor Id </label>
               <input
               className="hospital"
               type="text"
               value={this.state.did}
               onChange={this.handledid}
               />

<br></br><br></br>

               <label className="login-label">Doctor Name </label>
               <input
               className="hospital"
               type="text"
               value={this.state.dname}
               onChange={this.handledname}
               />



<br></br><br></br>

               <button className="submitt" type="submit" id="asd">
Submit
               </button>
               <br></br><br></br>
               </form>

                <table className="output">
                    
                    <thead>
                        <tr>
                            <th>Patient Id</th>
                            <th>Patient Name</th>
                            <th>Patient Age</th>
                            <th>Patient Address</th>
                            <th>Doctor Id</th>
                            <th>Doctor Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Data.map((data) => (
                            <tr>
                           <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.address}</td>
                                <td>{data.did}</td>
                                <td>{data.dname}</td>
                               
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>Patient Id:</label>
                    <input
                        type="text"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Patient Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Patient Age:</label>
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Patient Address</label>
                    <input
                        type="text"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Doctor Id</label>
                    <input
                        type="text"
                        name="did"
                        value={this.state.did}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Doctor Name:</label>
                    <input
                        type="text"
                        name="dname"
                        value={this.state.dname}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Form;