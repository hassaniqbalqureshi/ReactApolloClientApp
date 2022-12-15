import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client"
import { CREATE_USERS } from "../Graphql/mutations";
function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [createUser] = useMutation(CREATE_USERS)
    const addUser = () => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }
        })
    }
    // const [newTask, setTask] = useState('');
    // const [taskArray, setArr] = useState([]);

    // const handleChange = e => {
    //     e.preventDefault();
    //     setTask(e.target.value);

    // }

    // function addNewTask() {

    //     setArr([...taskArray, newTask]);
    // }

    // function deleteTask(index) {
    //     var dupparray = [...taskArray]
    //     dupparray.splice(index, 1);
    //     setArr(dupparray)
    // }
    // const displayList = taskArray.map((task, index) => {
    //     return (
    //         <div><p>{task}</p>
    //             <button onClick={deleteTask(index)}>delete</button></div>
    //     )
    // })

    // const handleSubmit = e => {
    //   e.preventDeafult();

    // }
    return (
        <div className="row justify-content-center">
            <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded" >
                <h2>User Details</h2>
                <input placeholder="setFirstName" type="text" onChange={(e) => {
                    setFirstName(e.target.value)
                }} />
                <br />
                <input placeholder="setLastName" type="text" onChange={(e) => {
                    setLastName(e.target.value)
                }} />
                <br />
                <input placeholder="setEmail" type="text" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <br />
                <input placeholder="setPassword" type="text" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <br />

                <button onClick={addUser}>Add</button>
            </div>
        </div>
    );
}
export default Form;