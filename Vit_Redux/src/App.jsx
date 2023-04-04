import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { addUser,updateUser ,resetEdit} from "./Redux/Action/action";

function App() {
  const dispatch = useDispatch();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationObj = yup.object({
    firstName: yup
      .string()
      .required("Please Enter First Name")
      .max(10, "Maximum Input Should Be 10"),
    lastName: yup
      .string()
      .required("Please Enter Last Name")
      .max(10, "Maximum Input Should Be 10"),
    // userName: yup
    //     .string()
    //     .required('Please Enter Username')
    //     .matches(userNamePattern, 'Special Characters Not Allowed')
    //     .min(8, 'Username must be between 8 and 15 characters long')
    //     .max(15, 'Username must be between 8 and 15 characters long')
    //     .matches(/^(\S+$)/g, 'Space Not Allow'),
    email: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Please Enter Email"),
    // password: yup
    //   .string()
    //   .required("Please Enter Password")
    //   .max(15, "Maximum Input Should Be 15")
    //   .min(6, "minimum 6 char Require"),
    gender: yup
      .string().required("Please select one"),
    phone: yup
      .string()
      .required("phone number is required")
      .matches(phoneRegExp, 'phone number is not valid')
      .min(10, "too short")
      .max(10, "too long"),
    birthdate: yup.string()
    .required("Please Select your Birth-date"),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationObj)});
  
  const onSubmit = (data) => {
    if (data.id) {
      dispatch (updateUser(data))
      reset({
        firstName : "",
        lastName : "",
        birthdate : "",
        gender : "",
        email : "",
        phone : ""
      })
      dispatch(resetEdit())
    }else{
      dispatch (addUser ({...data}))
      reset({
            firstName : "",
            lastName : "",
            birthdate : "",
            gender : "",
            email : "",
            phone : ""
          })
    }
  };
  const {editData} = useSelector((state) => state.formReducer)
  console.log(editData,"editData")

  useEffect(() => {
   if (editData?.id) {
    reset(editData)
   }
  }, [editData])
  
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ "borderRadius": "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="FirstName"
                            name="firstName"
                            {...register("firstName")}
                            // value={userDetails?.firstName}
                            
                          />
                          {/* <label className="form-label" for="firstName">
                            First Name
                          </label> */}
                          <span
                            style={{ color: 'red' }}
                          >
                            {
                              errors.firstName
                                ?.message
                            }
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="LastName"
                            className="form-control form-control-lg"
                            {...register('lastName')}
                              // value={userDetails?.lastName}
                            
                          />
                          {/* <label className="form-label" for="lastName">
                            Last Name
                          </label> */}
                          <span
                            style={{ color: 'red' }}
                          >
                            {
                              errors.lastName
                                ?.message
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            name="birthdate"
                            placeholder="Birthday"
                            // value={userDetails?.birthdate}
                            max={new Date().toISOString().slice(0,10)}
                            id="birthdayDate"
                            {...register("birthdate")}
                          />
                          {/* <label for="birthdayDate" className="form-label">
                            Birthday
                          </label> */}
                          <span
                            style={{ color: 'red' }}
                          >
                            {
                              errors.birthdate
                                ?.message
                            }
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="Female"
                            id="femaleGender"
                            // value={values.gender}
                            // checked = {userDetails?.gender === "Female"}
                            // onChange={() => setFieldValue("gender", "Female")}
                            {...register("gender")}

                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="maleGender"
                            value="Male"
                            // value={values.gender}
                            // checked = {userDetails?.gender === "Male"}
                            // onChange={() => setFieldValue("gender", "Male")}
                            {...register("gender")}
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="otherGender"
                            value="Others"
                            // value={values.gender}
                            // onChange={() => setFieldValue("gender", "Others")}
                            // checked = {userDetails?.gender === "Others"}
                            {...register("gender")}
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>

                        </div>
                        {
                          <span
                            style={{ color: 'red' }}
                          >
                            {
                              errors.gender
                                ?.message
                            }
                          </span>
                        }
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="emailAddress"
                            name="email"
                            placeholder="Enter Email Address"
                            // value={userDetails?.email}
                            className="form-control form-control-lg"
                            {...register ("email")}
                            />
                          {/* <label className="form-label" for="emailAddress">
                            Email
                          </label> */}
                          <span
                            style={{ color: 'red' }}
                          >
                            {
                              errors.email
                                ?.message
                            }
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phone"
                            placeholder="Phone Number"
                            className="form-control form-control-lg"
                            // value={userDetails?.phone}
                            {...register("phone")}            
                          />
                          {/* <label className="form-label" for="phoneNumber">
                            Phone Number
                          </label> */}
                          <span
                            style={{ color: 'red' }}
                          >
                            {
                              errors.phone
                                ?.message
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-0">
                        <select className="select form-control" name="subject">
                          <option value="1" disabled>
                            Choose option
                          </option>
                          <option value="2">Subject 1</option>
                          <option value="3">Subject 2</option>
                          <option value="4">Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
                      </div>
                    </div> */}

                    <div className="mt-4 pt-2">
                      <button type="submit" className="btn btn-primary btn-lg" >
                      {editData?.id ? "Update" : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
