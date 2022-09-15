import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Status = () => {
  return (
    <div className="row mt-3">
      <div className="col">
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-primary active" : "btn btn-light"
          }
          to={"/status/1"}
        >
          Game 1
        </NavLink>
      </div>
      <div className="col">
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
          to={"/status/2"}
        >
          Game 2
        </NavLink>
      </div>
      <div className="col">
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
          to={"/status/3"}
        >
          Game 3
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Status;
