import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // API call
  }, []);
  async function getUser() {}
  return (
    <div className="user">
      <h1>User Profile</h1>

      <h2>Name = {props.name}</h2>
      <h3>Location = {props.location}</h3>
      <h4>Contact = {props.contact}</h4>
    </div>
  );
};
export default User;
