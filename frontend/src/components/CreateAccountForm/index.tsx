import React from "react";

export const CreateAccountForm: React.FC = () => {
  return (
    <form className="container my-3 createAccountForm d-flex flex-column justify-content-around">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="FirstNameInput"
          placeholder="FirstName"
          autoComplete="given-name"
        />
        <label htmlFor="FirstNameInput">First Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="LastNameInput"
          placeholder="LastName"
          autoComplete="family-name"
        />
        <label htmlFor="LastNameInput">Last Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="AliasInput"
          placeholder="Alias"
          autoComplete="username"
        />
        <label htmlFor="AliasInput">Alias</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="Email address"
          autoComplete="email"
        />
        <label htmlFor="emailInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          autoComplete="new-password"
        />
        <label htmlFor="passwordInput">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="passwordConfirmationInput"
          placeholder="Password confirmation"
          autoComplete="new-password"
        />
        <label htmlFor="passwordConfirmationInput">Password confirmation</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Create account
      </button>
    </form>
  );
};
