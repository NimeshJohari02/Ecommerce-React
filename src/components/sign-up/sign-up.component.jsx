import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password must be same ");
      return;
    }
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(`Error during Auth ${e}`);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Don't have an account ? </h2>
        <span> Signup using your email and Password</span>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <Button type="submit">Sign Up </Button>
        </form>
      </div>
    );
  }
}
export default Signup;
