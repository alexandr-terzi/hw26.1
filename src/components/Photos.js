import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const { userId, albumId } = useParams();
  const listStyle = {
    paddingInlineStart: "0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  useEffect(() => {
    getPhotos(albumId);
  }, [albumId]);

  const getPhotos = async (albumId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const users = JSON.parse(localStorage.getItem("users"));

  const getUserById = (userId) => {
    return users.find((user) => user.id === +userId);
  };

  const user = getUserById(userId);
  const albums = JSON.parse(localStorage.getItem("albums"));

  const getAlbumById = (albumId) => {
    return albums.find((album) => album.id === +albumId);
  };

  const album = getAlbumById(albumId);

  return (
    <div>
      <h2>
        Photos from the Album: "{album ? album.title : ""}" by{" "}
        {user ? user.name : ""}
      </h2>
      <ul style={listStyle}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
