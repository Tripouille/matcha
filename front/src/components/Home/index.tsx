import { Logo } from "../Logo";
import { ToggleForm } from "../ToggleForm";

export const Home: React.FC = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <Logo />
      <ToggleForm />
    </div>
  );
};
