import { useRouteError } from "react-router-dom";
import image from "../utils/illustration.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="Error-container">
      <img src={image} alt="Illustration" className="Error-image" />
      <Link className="go-back-btn" to="/">
        Go back
      </Link>
      {/* <p>{err.data}</p> */}
    </div>
  );
};

export default Error;
