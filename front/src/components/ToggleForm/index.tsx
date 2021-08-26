import { useCallback } from "react";
import { useToggle } from "../../hooks/useToggle";
import { LoginForm } from "../LoginForm";
import { CreateAccountForm } from "../CreateAccountForm";

enum EState {
  login = "login",
  createAccount = "createAccount",
}

export const ToggleForm: React.FC = () => {
  const [state, toggleState] = useToggle(EState.login, EState.createAccount);
  const Form = state === EState.login ? <LoginForm /> : <CreateAccountForm />;

  const handleClick = useCallback(() => {
    toggleState();
  }, [toggleState]);

  return (
    <div className="border mt-5 w-75 mx-auto">
      {Form}
      <hr className="w-75 mx-auto my-0" />
      <nav className="text-center">
        <button
          className="my-3 btn btn-link btn-outline-none"
          onClick={handleClick}
        >
          {state === EState.login ? "Create account" : "Sign in"}
        </button>
      </nav>
    </div>
  );
};
