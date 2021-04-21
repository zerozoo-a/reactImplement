import React, { useState, useEffect } from "react";
import userList from "./users";

const App = () => {
  const [input, setInput] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => setUsers(userList), []);

  const filteredList = (users, input) => {
    return users.filter((user) => {
      if (input) {
        return (
          user.name.toLowerCase().includes(input.toLowerCase()) ||
          user.gender.toLowerCase().includes(input.toLowerCase()) ||
          user.id.toString().includes(input.toString())
        );
      } else {
        return user;
      }
    });
  };

  //들어온 값 = input 목록 = users 목록.filter(includes) pattern
  //filter가 완료 된 값을 map으로 뿌려줘야 함.
  //filteredList.map의 형태를 취해야 함.
  //if에도 return을 꼭 해주자.

  return (
    <>
      <input
        type="search"
        onChange={(e) => setInput(e.target.value)}
        placeholder=""></input>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>gender</th>
        </tr>
        {filteredList(users, input).map((v, i) => (
          <tr key={v + i}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.gender}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default App;
