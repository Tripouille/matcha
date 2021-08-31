import { ReactComponent as Feather } from "./feather.svg";

export const Logo: React.FC = () => {
  return (
    <div className="row mt-4 w-75 mx-auto justify-content-center logo-container">
      <p className="col-auto logo-text my-auto text-center">Read me</p>
      <Feather className="logo-img my-auto d-none d-md-block" fill="white" />
    </div>
  );
};
