import React from 'react';
import { Button, Form } from 'react-bootstrap';
import UserLists from '../user/UserLists';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });

        event.preventDefault();
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });

        event.preventDefault();
    }

    handleSubmit(event) {
        const { REACT_APP_BACKEND_IP } = process.env;
        const url = `${REACT_APP_BACKEND_IP}api-token-auth`
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
        }

        fetch(url, requestOptions)
            .then(response =>
                response.json()
            )
            .then(data => {
                console.log("data", data);
                localStorage.setItem("token", data.token)
                this.setState({ token: data.token })
                if (localStorage.getItem("token") === "undefined") localStorage.removeItem("token")
            })


        event.preventDefault();
    }

    render() {
        let token = localStorage.getItem("token")

        if (!token)
            return (
                <div className='container'>
                    <h1>Login</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={this.handleUsernameChange} value={this.state.username} type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                <span className='red'>
                                    {this.state.error}
                                </span>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            );

        return <UserLists />;
    }
}