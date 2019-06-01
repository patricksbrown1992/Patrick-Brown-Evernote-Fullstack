import React from 'react';

class usernameForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        this.props.getNotebooks();
    }

   
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }


    render(){
        debugger
        let notebooks = this.props.notebooks.length > 0 || <h1>empty</h1>;
        return (
        <div className="username-form">
            
            

          
                <div className="left-nav">
                    <ul>
                        <form onSubmit={this.handleSubmit}>
                            <div className='log-out-button'>
                                <button type='submit'>Log Out</button>
                            </div>
                        </form>
                        <li className="user-email">Email</li>
                        <input placeholder="Search all notes..." type="text"></input>
                        <li className="new-note">New Note</li>
                        <li>Shortcuts</li>
                        <li>All Notes</li>
                        <li>Notebooks</li>
                        <li>Shared with Me</li>
                        <li>Tags</li>
                        <li>Trash</li>
                    </ul>
                </div>
                <div className="center-nav">
                    <ul>
                        <li className="notebook-title">Notebook Title</li>
                        <li>{notebooks}</li>

                    </ul>
                </div>

                <div className="right-nav">
                    <h1>First Note</h1>
                    <h3>This is the first note</h3>
                    <h3>Really the first note</h3>

                </div>

         
        </div>
        )
    }
}

export default usernameForm;