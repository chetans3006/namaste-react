import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https://dummyimage.com/200x200/000/fff.png&text=User",
      },
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }
  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.timer);
  }
  async componentDidMount() {
    // API call

    const data = await fetch("https://api.github.com/users/chetans3006");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, contact, avatar_url } = this.state.userInfo;

    return (
      <div className="user   ">
        <img
          className="w-32 h-32 rounded-full my-2"
          src={avatar_url}
          alt="User Avatar"
        />
        <h2 className="text-xl font-bold my-2 ">Name = {name}</h2>
        <h3 className="text-lg font-semibold my-1">Location = {location}</h3>
        <h4 className="text-md font-normal my-1">Contact = {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
