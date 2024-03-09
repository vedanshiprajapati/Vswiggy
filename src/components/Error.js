import { useRouteError } from "react-router-dom";
import image from "../utils/illustration.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="text-center font-['Arial',_sans-serif] m-0 p-0 flex items-center justify-center h-screen flex-col">
      <img
        src={image}
        alt="Illustration"
        className="w-[500px] h-auto mt-[30px]"
      />
      <Link
        className="text-[white] font-bold px-[20px] py-[10px] border-[none] bg-[#FC8019] [transition:ease-in-out_0.01s] hover:[box-shadow:0px_0px_5px_3px_white,0px_0px_7px_3px_#fcb57b]"
        to="/"
      >
        Go back
      </Link>
      {/* <p>{err.data}</p> */}
    </div>
  );
};

export default Error;
