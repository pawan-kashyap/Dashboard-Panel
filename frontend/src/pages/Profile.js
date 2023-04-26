import { useContext, useMemo, useState } from "react";
import { Layout } from "../components/Layout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context";
import { updateUser } from "../services/users";

export const Profile = () => {
  let navigate = useNavigate();
  const loggedUser = useMemo(() => JSON.parse(localStorage.getItem("User")).user, []);
  const [user, setUser] = useState({
    firstName: loggedUser.firstName,
    lastName: loggedUser.lastName,
    username: loggedUser.username,
    email: loggedUser.email
  });
  const [isEditing, setIsEditing] = useState(false)
  console.log("user", user);
  const handleChange = (e)=>{
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value});
    };
  const handleSubmit = async e => {
    e.preventDefault();
    if(isEditing){
      updateUser(loggedUser._id ,user,(updatedUser)=>{
        localStorage.setItem("User", JSON.stringify(updatedUser));
        setIsEditing(false);
      });
    }else{
      setIsEditing(!isEditing)
    }
  };

  return (
    <Layout>
      <>
        <div className="container">
          <div className="container text-center w-75 mx-auto shadow p-5">
          <h1>Profile Details</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  disabled = {!isEditing}
                  className="form-conrtrol form-control-lg"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={e => handleChange(e)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  disabled = {!isEditing}
                  className="form-conrtrol form-control-lg"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={e => handleChange(e)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  disabled = {!isEditing}
                  className="form-conrtrol form-control-lg"
                  placeholder="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={e => handleChange(e)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  disabled = {!isEditing}
                  className="form-conrtrol form-control-lg"
                  placeholder="Email address"
                  name="email"
                  value={user.email}
                  onChange={e => handleChange(e)}
                />
              </div>
              <br />
              <br />
              <Button variant="btn btn-primary" type="submit">
                {isEditing ? 'Save': 'Edit'}
              </Button>
            </Form>
          </div>
        </div>
      </>
    </Layout>
  );
};
