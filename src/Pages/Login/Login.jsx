import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  Form
} from "reactstrap";
import logo from "../../logo.svg";
import { connect } from "react-redux";
import { userLogin, listUsers } from "../../Redux/Actions/user";
import { validateField, isFormValid } from "../../validations/validator";
import LoaderForm from "../../Components/LoaderForm";

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

  componentDidMount() {
    this.props.getUsers();
  }

  handleSubmit = e => {
    e.preventDefault();

    const { fields } = this.state;

    //  Validation Form
    if (isFormValid(fields, "loginUser") !== true) {      
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
                error: validateField(name, value, [], "loginUser")
              }
            }
          };
        });
      }
      return;      
    }
    // Todo: Submit Form
    this.props.login(fields.user.value);    
  };

  onChange = e => {
    e.preventDefault();
    const {name, value} = e.target;


    this.setState(prevState => {
      return {
        ...prevState,
        fields: {
          ...prevState.fields,
          [name]: {
            value,
            error: validateField(name, value, [], "loginUser")
          }
        }
      };
    });
  };

  render() {
    const { fields } = this.state;
    const { listOfUsers } = this.props;
    const keys = Object.keys(listOfUsers);

    const users = keys.map(key => {
      const user = listOfUsers[key];
      return (
        <option key={key} value={key}>
          {user.name}
        </option>
      );
    });

    return (
      <div className="container">
        {this.props.status === "pending" ? <LoaderForm /> : null}
        <Form className="form_container" onSubmit={this.handleSubmit}>
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
                    <Input
                      type="select"
                      name="user"
                      id="user"
                      value={fields["user"].value}
                      invalid={fields["user"].error !== null}
                      onChange={this.onChange}
                    >
                      <option value="" disabled>Please select a User</option>
                      {users}
                    </Input>
                    {fields["user"].error !== null ? (
                      <FormFeedback>Please Choose a User</FormFeedback>
                    ) : null}
                    <FormText>Select a User To Login</FormText>
                  </FormGroup>
                  <Button
                    color="primary"
                    type="submit"                    
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const su = state.user,
    sm = state.message;

  return {
    listOfUsers: su.listOfUsers,
    message: sm.message,
    status: sm.status
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getUsers: () => dispatch(listUsers()),
  login: d => dispatch(userLogin(d))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
