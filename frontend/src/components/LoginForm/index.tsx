import React, { useCallback } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Modal } from "../Modal";

export const LoginForm: React.FC = () => {
  const [modalDisplay, toggleModalDisplay] = useToggle(false, true);
  const submitForgotMyPassword = useCallback((e) => {
    e.preventDefault();
    
    //toggleModalDisplay();
  }, [toggleModalDisplay]);
  const modalFooter = (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
        onClick={toggleModalDisplay}
      >
        Cancel
      </button>
      <button
        type="submit"
        form="forgotPasswordForm"
        className="btn btn-primary"
      >
        Send
      </button>
    </>
  );
  return (
    <form className="container my-3 loginForm d-flex flex-column justify-content-around">
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
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          autoComplete="current-password"
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
      <button
        className="btn btn-link btn-outline-none py-0"
        type="button"
        onClick={toggleModalDisplay}
      >
        Forgot my password
      </button>
      {modalDisplay && (
        <Modal
          title="Account recovery"
          onClose={toggleModalDisplay}
          footer={modalFooter}
        >
          <form onSubmit={submitForgotMyPassword}
            id="forgotPasswordForm"
            className="container my-3 d-flex flex-column justify-content-around"
          >
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Email address"
                required
              />
              <label htmlFor="emailInput">Email address</label>
            </div>
          </form>
        </Modal>
      )}
    </form>
  );
};
