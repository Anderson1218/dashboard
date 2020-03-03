import React, { useState, useEffect } from "react";
import { Box } from "grommet";
// import Card from "../components/card/Card";
import ListItem from "../components/listItem/ListItem";

const DashBoard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://authchatserver.herokuapp.com/users", {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(users => setUsers(users));
  }, []);
  const handleDeleteUser = id => {
    const token = localStorage.getItem("token");

    fetch(`https://authchatserver.herokuapp.com/users/${id}`, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        fetch("https://authchatserver.herokuapp.com/users", {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token
          },
          method: "GET"
        })
          .then(res => res.json())
          .then(users => setUsers(users))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };
  const handleChangePassword = (id, password) => {
    const token = localStorage.getItem("token");

    fetch(`https://authchatserver.herokuapp.com/users/${id}`, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({ password }),
      method: "PUT"
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <Box overflow="scroll" height="medium" fill={true} pad="medium">
      {users.map(user => (
        <ListItem
          key={user.id}
          user={user}
          handleDeleteUser={handleDeleteUser}
          handleChangePassword={handleChangePassword}
        />
      ))}
    </Box>
  );
};

export default DashBoard;
