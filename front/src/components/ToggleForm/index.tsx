import { useCallback } from "react";
import { useToggle } from "../../hooks/useToggle";
import { LoginForm } from "../LoginForm";
import { SubscribeForm } from "../SubscribeForm";

enum EState {
  login = "login",
  subscribe = "subscribe",
}

export const ToggleForm: React.FC = () => {
  const [state, toggleState] = useToggle(EState.login, EState.subscribe);
  const Form = state === EState.login ? <LoginForm /> : <SubscribeForm />;

  const handleClick = useCallback(() => {
    toggleState();
  }, [toggleState]);

  return (
    <div className="border mt-5">
      {Form}
      <hr className="w-75 mx-auto my-0" />
      <nav className="text-center">
        <button
          className="my-3 btn btn-link btn-outline-none"
          onClick={handleClick}
        >
          {state === EState.login ? "Connect" : "Subscribe"}
        </button>
      </nav>
    </div>
  );
};
