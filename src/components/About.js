import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="m-2 p-2 border border-solid border-black rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <h1 className="text-2xl font-bold my-2 text-center ">About Us</h1>
      <p className="text-gray-600 text-sm my-2 p-2">
        We are a team of passionate food lovers dedicated to bringing you the
        best dining experiences. Our mission is to connect food enthusiasts with
        the finest restaurants in town, offering a diverse range of cuisines and
        exceptional service. Whether you're looking for a cozy cafe or a fine
        dining establishment, we've got you covered. Join us on this culinary
        journey and discover your next favorite meal!
      </p>
      <UserClass
        name={"Chetan Sharma"}
        location={"Rahon"}
        contact={"989897999"}
      />
    </div>
  );
};
export default About;
