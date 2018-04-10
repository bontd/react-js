import React from 'react';

class Popup extends React.Component {
    render() {
        return (
            <div className="container">
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Modal Header</h4>
                            </div>
                            <div className="modal-body">
                                <p>Some text in the modal.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <PopupSignup />
                <PopupLogin />
            </div>
        );
    }
}

class PopupSignup extends React.Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col-auto row">
                                <label for="inlineFormInputGroup">Username:</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend bg--icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-auto row">
                                <label htmlFor="">Email:</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-append bg--icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <input type="email" className="form-control" placeholder="abc@gmail.com" />
                                </div>
                            </div>
                            <div className="col-auto row">
                                <label htmlFor="">Password:</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-append bg--icon">
                                        <i className="fa fa-key"></i>
                                    </div>
                                    <input type="password" className="form-control" placeholder="********" />
                                </div>
                            </div>
                            <div className="col-auto row">
                                <label htmlFor="">Repeat Password:</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-append bg--icon">
                                        <i className="fa fa-key"></i>
                                    </div>
                                    <input type="password" className="form-control" placeholder="********" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary pull-left">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class PopupLogin extends React.Component {
    render() {
        return (
            <div className="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col-auto row">
                                <label for="inlineFormInputGroup">Username:</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend bg--icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-auto row">
                                <label htmlFor="">Password:</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-append bg--icon">
                                        <i className="fa fa-key"></i>
                                    </div>
                                    <input type="password" className="form-control" placeholder="********" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary pull-left">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Popup;