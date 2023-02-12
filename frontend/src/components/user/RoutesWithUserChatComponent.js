import React from "react";
import { Outlet } from "react-router-dom";
import UserChatComponents from "./UserChatComponents";

function RoutesWithUserChatComponent() {
  return (
    <>
      <UserChatComponents /> <Outlet />
    </>
  );
}

export default RoutesWithUserChatComponent;
