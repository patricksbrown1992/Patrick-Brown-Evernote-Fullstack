import React from 'react';

class LogoutForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
    }

    handleSubmitLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }


    render(){
        <div className="logout-modal">
            <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
            <br/>
            <br/>


            <form onSubmit={this.handleSubmitLogOut}>
                <button type='submit'>Log Out {this.props.user.email}</button>
            </form>
        </div>
    }
}

export default LogoutForm;