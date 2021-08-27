import React from "react";

export const LoginForm: React.FC = () => {
  return (
    <form className="container my-3 loginForm d-flex flex-column justify-content-around">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="AliasInput"
          placeholder="Alias"
        />
        <label htmlFor="AliasInput">Alias</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
        />
        <label htmlFor="passwordInput">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};
