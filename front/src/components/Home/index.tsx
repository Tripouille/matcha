import { Logo } from "../Logo";
import { ToggleForm } from "../ToggleForm";

export const Home: React.FC = () => {
  return (
    <div className="container">
      <Logo />
      <ToggleForm />
    </div>
  );
};
