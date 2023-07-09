import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Space } from "antd";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();
  const listStyle = {
    paddingInlineStart: "0px",
  };
  const btnStyle = {
    width: "100px",
  };
  const spanStyle = {
    width: "500px",
    display: "inline-block",
  };

  useEffect(() => {
    getAlbums(userId);
  }, [userId]);

  const getAlbums = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const data = await response.json();
      localStorage.setItem("albums", JSON.stringify(data));
      setAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };

  const users = JSON.parse(localStorage.getItem("users"));

  const getUserById = (userId) => {
    return users.find((user) => user.id === +userId);
  };

  const user = getUserById(userId);

  return (
    <div>
      <h2>{user ? user.name : ""}'s Albums</h2>
      <ul style={listStyle}>
        {albums.map((album) => (
          <li key={album.id}>
            <span style={spanStyle}>{album.title}</span>
            <Space wrap>
              <Button type="primary" style={btnStyle}>
                <Link to={`/hw26.1/albums/${userId}/photos/${album.id}`}>
                  Photos
                </Link>
              </Button>
            </Space>
          </li>
        ))}
      </ul>
    </div>
  );
}
