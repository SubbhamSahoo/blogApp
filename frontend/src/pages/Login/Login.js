import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../actions/userAction";
import SimpleBackdrop from "../../components/Backdrop";

const Login = () => {
  const [loginUser,setLoginUser] = useState({
    email:"",
    password:""
  })
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginBlogUser = (e) => {
    e.preventDefault()
    if(validateForm()){
      dispatch(userLoginAction(loginUser,navigate))
    }
  }

  const validateForm = () => {
    let isValid = true;
    const validationErrors = {}

    if(!loginUser.email){
      validationErrors.email = 'Email is required'
      isValid = false
    }else if(!validateEmail(loginUser.email)){
      validationErrors.email = 'Invalid email format'
      isValid = false
    }

    if(!loginUser.password){
      validationErrors.password = 'Password is required'
      isValid = false
    }

    setErrors(validationErrors)
    return isValid
  }

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
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
                        Sign In
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Your Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={loginUser.email}
                              onChange={(e)=>setLoginUser({...loginUser,[e.target.name]:e.target.value})}
                              className="form-control"
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
                              value={loginUser.password}
                              onChange={(e)=>setLoginUser({...loginUser,[e.target.name]:e.target.value})}
                              className="form-control"
                            />
                            {errors.password && <span className="danger">{errors.password}</span>}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" onClick={loginBlogUser} className="btn btn-primary btn-lg">
                            Login
                          </button>
                        </div>
                        <NavLink to="/register">
                          <div className="d-flex justify-content-center ">
                            New to iblog?Create an account
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

export default Login;
