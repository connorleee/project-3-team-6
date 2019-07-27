import React, { Component } from "react";

class Login extends Component {

    render() {
        return (
            <div>
                <div className="container text-center">
                    <div className="fluid-jumbotron">
                        <h1 className="display-4">Stem</h1>
                        <p className="lead">An app for easy stalking</p>
                        <hr className="my-4" />
                        <a className="btn btn-primary btn-lg" href="" role="button">Login or Sign up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;