import React,{Component} from "react";
import axios from "axios";

class Table extends Component{
    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/getPatient')
        .then(response =>{
            this.setState({
                data:response.data
                
            });
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>patientId</th>
                        <th>patientName</th>
                        <th>patientAge</th>
                        <th>patientAddress</th>
                        <th>doctorId</th>
                        <th>doctorName</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.address}</td>
                            <td>{user.did}</td>
                            <td>{user.dname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;