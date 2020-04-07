import React, { Component } from "react";
import logo from "../../logo.svg";
import { FormGroup, Input, FormFeedback, Label, FormText } from "reactstrap";
import {savePoll} from "../../Redux/Actions/polls";
import {connect} from "react-redux";
import { validateField, isFormValid } from "../../validations/validator";
import LoaderForm from "../../Components/LoaderForm";
import lodash from "lodash";

class AddPool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        optionOne: {
          value: "",
          error: null
        },
        optionTwo: {
          value: "",
          error: null
        }
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {fields} = this.state;

    if (isFormValid(fields, "pollNew") !== true) {      
      const keys = Object.keys(fields);
      for (let name of keys) {
        this.setState(prevState => {
          let value = prevState.fields[name].value;
          return {
            fields: {
              ...prevState.fields,
              [name]: {
                ...prevState.fields[name],
                value: value,
                error: validateField(name, value, [], "pollNew")
              }
            }
          };
        });
      }
      return;      
    }

    const payload = lodash.mapValues(fields, "value");    
    console.log(payload);

    this.props.savePoll(payload);

    //this.props.history.push("/");
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
        {this.props.status === "pending" ? <LoaderForm /> : null}
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
                        <Label for="optionOne">Option One</Label>
                        <Input
                          id="optionOne"
                          name="optionOne"
                          value={fields["optionOne"].value}
                          invalid={fields["optionOne"].error !== null}
                          onChange={this.onChange}                          
                        />
                        <FormText>Please Provide The First Option</FormText>
                        {fields["optionOne"].error !== null ? (
                          <FormFeedback>
                            {fields["optionOne"].error}
                          </FormFeedback>
                        ) : null}                        
                      </FormGroup>
                      <FormGroup>
                        <Label for="option2">Option Two</Label>
                        <Input
                          id="optionTwo"
                          name="optionTwo"
                          value={fields["optionTwo"].value}
                          invalid={fields["optionTwo"].error !== null}
                          onChange={this.onChange}
                        />
                        <FormText>Please Provide The Second Option</FormText>
                        {fields["optionTwo"].error !== null ? (
                          <FormFeedback>
                            {fields["optionTwo"].error}
                          </FormFeedback>
                        ) : null}                        
                      </FormGroup>
                    </div>
                  </div>
                  <div id="bottom-wizard">
                    <button type="submit" name="forward" className="forward">
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


const mapStateToProps = (state) => {
  const sm = state.message;
  return {
    message: sm.message,
    status: sm.status
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  savePoll: (payload) => dispatch(savePoll(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPool);