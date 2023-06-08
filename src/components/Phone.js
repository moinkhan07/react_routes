import { Link, Outlet } from "react-router-dom";

const Phone = () => {
  return (
    <>
      <Link to={"log"}>
        <h2>Phone: 9087654321</h2>
      </Link>
      <Outlet />
    </>
  );
};

export default Phone;
