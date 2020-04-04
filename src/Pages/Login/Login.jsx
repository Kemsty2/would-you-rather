import React, { Component } from "react";
import { Button, FormGroup, Label, Input, FormText, FormFeedback } from "reactstrap";
import logo from "../../logo.svg"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        user: {
          value: "",
          error: null
        }
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    //  Validation Form

    // Todo: Submit Form
  };

  onChange = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        ...prevState
      };
    });
  };

  render() {
    const { fields } = this.state;

    return (
      <div className="container">
        <form className="form_container">
          <div className="row no-gutters">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="login_form">
                <div className="login_header">
                  <figure>
                    <img src={logo} alt="login_logo" />
                  </figure>
                  <h2> Sign In</h2>
                </div>
                <div className="login_body">
                  <FormGroup>
                    <Label for="user">Select</Label>
                    <Input type="select" name="user" id="user" value={fields["user"].value} invalid={fields["user"].error !== null}>
                      <option value="">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Input>          
                    {fields["user"].error !== null ? <FormFeedback>Please Choose a User</FormFeedback> : null}                              
                    <FormText>Select a User To Login</FormText>
                  </FormGroup>                 
                  <Button
                    color="primary"
                    type="submit"
                    onSubmit={this.handleSubmit}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
