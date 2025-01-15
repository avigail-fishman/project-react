import React, { useContext, useState } from "react";
import MyContext from "../context/context";
import {
  userManagerContainerStyle,
  userManagerHeaderStyle,
  userListStyle,
  userItemStyle,
  userItemHoverStyle,
} from "../css/usersManagerCss";

function UsersManager() {
  const { users } = useContext(MyContext);
  const [hoveredUser, setHoveredUser] = useState(null); // User ID to track hover state

  return (
    <div style={userManagerContainerStyle}>
      <h1 style={userManagerHeaderStyle}>רשימת המשתמשים</h1>
      <ul style={userListStyle}>
        {users &&
          users.map((user) => (
            <li
              key={user.id}
              style={{
                ...userItemStyle,
                ...(hoveredUser === user.id ? userItemHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredUser(user.id)}
              onMouseLeave={() => setHoveredUser(null)}
            >
              <span>{user.id}</span>
              <span>{user.username}</span>
              <span>{user.email}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UsersManager;