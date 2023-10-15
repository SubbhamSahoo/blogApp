import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const [checkedTerms, setCheckedTerms] = useState(false)

  const validateForm = () => {
    let isValid = true;
    const validationErrors = {}

    if(!registerUser.fullName){
      validationErrors.fullName = 'Name is required'
      isValid = false
    }

    if(!registerUser.email){
      validationErrors.email = 'Email is required'
      isValid = false
    }else if(!validateEmail(registerUser.email)){
      validationErrors.email = 'Invalid email format'
      isValid = false
    }

    if(!registerUser.password){
      validationErrors.password = 'Password is required'
      isValid = false
    }

    if(!registerUser.confirmPassword){
      validationErrors.confirmPassword = "Confirm Password is required"
    }else if(registerUser.confirmPassword !== registerUser.password){
      validationErrors.confirmPassword = "password does not match"
    }
    setErrors(validationErrors)
    return isValid
  }

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const registerNewUser = (e) =>{
    e.preventDefault()
    if(validateForm()){
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
  }

  return (
    <>
     <SimpleBackdrop />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={registerNewUser}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="fullName"
                              value={registerUser.fullName}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                            />
                            {errors.fullName && <span className="danger">{errors.fullName}</span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Your Email
                            </label>
                            <input
                              type="email"                       
                              className="form-control"
                              name="email"
                              value={registerUser.email}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                            />
                            {errors.email && <span className="danger">{errors.email}</span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={registerUser.password}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                              className="form-control"
                            />
                            {errors.password && <span className="danger">{errors.password}</span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              value={registerUser.confirmPassword}
                              onChange={(e)=>setRegisterUser({...registerUser,[e.target.name]:e.target.value})}
                              className="form-control"
                            />
                            {errors.confirmPassword && <span className="danger">{errors.confirmPassword}</span>}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            checked={checkedTerms}
                            onChange={()=>setCheckedTerms(!checkedTerms)}
                            id="terms"
                          />
                          <label className="form-check-label" htmlFor="terms">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" disabled={!checkedTerms} className="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                        <NavLink to="/login">
                          <div className="d-flex justify-content-center">
                            Existing User? Login
                          </div>
                        </NavLink>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
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
