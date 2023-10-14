import React, { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { userRegisterAction } from "../../actions/userAction";
import SimpleBackdrop from "../../components/Backdrop";


const Register = () => {
  const [registerUser,setRegisterUser] = useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const dispatch = useDispatch()
  const [checkedTerms, setCheckedTerms] = useState(false)

  const registerNewUser = (e) =>{
    e.preventDefault()
    if(registerUser.password !== registerUser.confirmPassword){
      alert('password does not match')
      return
    }
      dispatch(userRegisterAction({
        fullName:registerUser.fullName,
        email:registerUser.email,
        password:registerUser.password
      }))
      setRegisterUser({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
      })
  }

  return (
    <>
     <SimpleBackdrop />
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4" onSubmit={registerNewUser}>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              class="form-control"
                              name="fullName"
                              value={registerUser.fullName}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                            />
                            <label class="form-label">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"                       
                              class="form-control"
                              name="email"
                              value={registerUser.email}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                            />
                            <label class="form-label">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              value={registerUser.password}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                              class="form-control"
                            />
                            <label class="form-label">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="confirmPassword"
                              value={registerUser.confirmPassword}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4cd">
                              Confirm Password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            checked={checkedTerms}
                            onChange={()=>setCheckedTerms(!checkedTerms)}
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" disabled={!checkedTerms} class="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                        <NavLink to="/login">
                          <div class="d-flex justify-content-center">
                            Existing User? Login
                          </div>
                        </NavLink>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
