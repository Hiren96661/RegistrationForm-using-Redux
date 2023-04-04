import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove } from "./Redux/Action/action";

const Page = () => {
  const {userData} = useSelector((state) => state.formReducer)
  const dispatch = useDispatch();
console.log("data",userData)
  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SR.No.</th>
            <th scope="col">First_Name</th>
            <th scope="col">Last_Name</th>
            <th scope="col">BirthDate</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone_Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {userData?.map((user, index) => {
          return (
            <tbody>
              <tr key={index}>
                <th scope="col" >{index +1}</th>
                <th scope="col"> {user.firstName} </th>
                <th scope="col"> {user.lastName} </th>
                <th scope="col"> {user.birthdate} </th>
                <th scope="col"> {user.gender} </th>
                <th scope="col"> {user.email} </th>
                <th scope="col"> {user.phone} </th>
                <button scope="col" onClick={()=> dispatch(edit(user))}> Edit</button>
                <button scope="col" onClick={()=> dispatch(remove(user.id))}> Delete </button>
              </tr>
            </tbody>
          )
        })}
      </table>
    </>
  )
}

export default Page