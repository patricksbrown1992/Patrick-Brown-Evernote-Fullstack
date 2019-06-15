import React from 'react';
import styleDate from '../../util/styleDate';
import LeftNav from '../username/usernameLeftContainer';
class AllNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false }
    }

    // componentDidMount(){
    //     debugger
    //     this.props.clearNotebooks().then(() => this.props.getNotebooks(this.props.user))
    //     // .then( () => this.props.getNotes())
    // }

    render() {
        return (


            <>
                <LeftNav />
                <h1>Hello World</h1>
            </>
        )
    }
}
export default AllNoteForm;