import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import UserChatComponents from "./user/UserChatComponents";

function ProtectedRoutesComponent({ admin }) {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponents />
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
}

export default ProtectedRoutesComponent;
