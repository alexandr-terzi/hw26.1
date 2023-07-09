import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";

export default function Users() {
  const [users, setUsers] = useState([]);
  const listStyle = {
    paddingInlineStart: "0px",
  };
  const spanStyle = {
    width: "200px",
    display: "inline-block",
  };
  const btnStyle = {
    width: "300px",
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      localStorage.setItem("users", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Users List</h1>
      <ul style={listStyle}>
        {users.map((user) => (
          <li key={user.id}>
            <span style={spanStyle}>{user.name}</span>

            <Space wrap>
              <Button type="primary" style={btnStyle}>
                <Link to={`/albums/${user.id}`}>Albums</Link>
              </Button>
            </Space>
          </li>
        ))}
      </ul>
    </div>
  );
}
