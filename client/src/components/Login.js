import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogi } from "../JS/userSlice/userSlice";

function Login() {
  const navigate = useNavigate();
  const [logi, setlogi] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapperr">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setlogi({ ...logi, email: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) => setlogi({ ...logi, password: e.target.value })}
          />

          <label class="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              setTimeout(() => {
                dispatch(userlogi(logi));
                navigate("/");
              }, 1000);
            }}
          >
            login
          </button>
          <h5>
            u already have account <Link to="/register">Register now</Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Login;
