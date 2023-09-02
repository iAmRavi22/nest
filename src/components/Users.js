import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <Link to="user1">User1</Link>
      <Link to="user2">User2</Link>
      <Link to="user3">User3</Link>
      {/* <Outlet /> */}
    </div>
  );
};

export default Users;
