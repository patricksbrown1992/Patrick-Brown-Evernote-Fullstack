import React from 'react';


class LogoutForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
    }

    handleSubmitLogOut(e) {
        // debugger
        e.preventDefault();
        this.props.logout();
        this.props.closeModal();
    }


    render(){
        // debugger
        return(

            <div className="logout-modal">
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <br/>
                <br/>


                <button onClick={this.handleSubmitLogOut} type='submit'>Log Out {this.props.user.email}</button>
                
             
            </div>
        )
    }
}

export default LogoutForm;