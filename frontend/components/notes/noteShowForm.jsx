import React from 'react';


class NoteShowForm extends React.Component {
    constructor(props){
        super(props);
        // this.state = {selected: 1};
        // this.updateSelected = this.updateSelected.bind(this);
    }

    // updateSelected(id) {
    //     return () => {
    //         this.setState({ selected: id });
    //     };
    // }

    render(){
        // let note;
        // debugger
        // if(!note){
        //     note = Object.values(this.props.notes)[0];
        // } else {
            
            return (
                <div className="right-nav">
                    <h1>First note</h1>
                    <h3>this is the first note</h3>
                </div>
            );
        // }
    }

}


export default NoteShowForm;