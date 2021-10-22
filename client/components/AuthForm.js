import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
    const { name, displayName, handleSubmit, error } = props;

    return (
        <div className="login-page-container">
            <form
                onSubmit={handleSubmit}
                name={name}
                className="pure-form pure-form-aligned login--form"
            >
                <div className="pure-control-group">
                    <label htmlFor="username">
                        <small>Username</small>
                    </label>
                    <input name="username" type="text" />
                    <span class="pure-form-message-inline">
                        This is a required field.
                    </span>
                </div>
                <br />
                <div className="pure-control-group">
                    <label htmlFor="password">
                        <small>Password</small>
                    </label>
                    <input name="password" type="password" />
                    <span class="pure-form-message-inline">
                        This is a required field.
                    </span>
                </div>
                <br />
                <div className="pure-control-group">
                    <button
                        type="submit"
                        className="button-secondary pure-button"
                    >
                        {displayName}
                    </button>
                </div>
                {error && error.response && <div> {error.response.data} </div>}
            </form>
        </div>
    );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
    return {
        name: "login",
        displayName: "Login",
        error: state.auth.error
    };
};

const mapSignup = (state) => {
    return {
        name: "signup",
        displayName: "Sign Up",
        error: state.auth.error
    };
};

const mapDispatch = (dispatch) => {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const formName = evt.target.name;
            const username = evt.target.username.value;
            const password = evt.target.password.value;
            dispatch(authenticate(username, password, formName));
        }
    };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
