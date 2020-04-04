import React, { Component } from "react";
import logo from "../../logo.svg";
import { FormGroup, Input, FormFeedback, Label, FormText } from "reactstrap";

class AddPool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        option1: {
          value: "",
          error: null
        },
        option2: {
          value: "",
          error: null
        }
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  onChange = (e) => {
    const {name, value} = e.target;    

    this.setState(prevState => {
      return {
        ...prevState,
        fields: {
          ...prevState.fields,
          [name]: {
            value,
            error: null
          }
        }
      }
    })
  }

  render() {
    const { fields } = this.state;
    return (
      <div className="container min-h-100 mb-3">
        <div id="form_container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div id="left_form">
                <figure>
                  <img
                    src={logo}
                    alt=""
                    width="100"
                    height="100"
                    style={{ backgroundColor: "#fff" }}
                  />
                  <p>
                    Creation of a new Pool
                    <br />
                    Please Enter The Options
                  </p>
                </figure>
              </div>
            </div>
            <div className="col-lg-8">
              <div id="wizard_container" className="wizard">
                <form id="wrapped" className="fl-form fl-style-1 wizard-form" onSubmit={this.handleSubmit}>
                  <div
                    id="middle-wizard"
                    className="wizard-branch wizard-wrapper"
                  >
                    <div className="step wizard-step current">
                      <h3 className="main_question">
                        <i className="arrow_right"></i>
                        Would You Rather ?
                      </h3>
                      <FormGroup>
                        <Label for="option1">Option One</Label>
                        <Input
                          id="option1"
                          name="option1"
                          value={fields["option1"].value}
                          invalid={fields["option1"].error !== null}
                          onChange={this.onChange}                          
                        />
                        <FormText>Please Provide The First Option</FormText>
                        {fields["option1"].error !== null ? (
                          <FormFeedback>
                            {fields["option1"].error}
                          </FormFeedback>
                        ) : null}                        
                      </FormGroup>
                      <FormGroup>
                        <Label for="option2">Option Two</Label>
                        <Input
                          id="option2"
                          name="option2"
                          value={fields["option2"].value}
                          invalid={fields["option2"].error !== null}
                          onChange={this.onChange}
                        />
                        <FormText>Please Provide The Second Option</FormText>
                        {fields["option2"].error !== null ? (
                          <FormFeedback>
                            {fields["option2"].error}
                          </FormFeedback>
                        ) : null}                        
                      </FormGroup>
                    </div>
                  </div>
                  <div id="bottom-wizard">
                    <button type="button" name="forward" className="forward">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPool;
