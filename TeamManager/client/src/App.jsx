import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./lux.css";
import Edit from "./views/Edit";
import Main from "./views/Main";
import New from "./views/New";
import Nav from "./views/Nav";
import Status from "./views/Status";
import StatusList from "./components/StatusList";

function App() {
  return (
    <div className="container">
    <Nav />
      <Routes>
          <Route path='/' element={<Navigate to={"/team"} /> } /> 
          <Route element={<Main />} path="/team" />
          <Route element={<New />} path="/new" />
          <Route element={<Edit />} path="/team/edit/:id" />
          <Route path="status" element={<Status />}>
            <Route index element={<Navigate to="1" />} />
            <Route path="1" element={<StatusList num="1" />} />
            <Route path="2" element={<StatusList num="2" />} />
            <Route path="3" element={<StatusList num="3" />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
