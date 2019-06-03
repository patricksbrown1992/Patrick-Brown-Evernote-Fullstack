import notesIndexForm from './notesIndexForm';
import {connect} from 'react-redux';
import {getNotebooks} from '../../actions/notebookActions';
import {getNotes} from '../../actions/noteAction';

const msp = (state, ownProps) => ({
    user: state.entities.user[state.session.id],
    // notebook: ownProps.notebook,
    // notes: ownProps.notebook.notes
});

const mdp = dispatch => ({
    
    getNotes: notebook => dispatch(getNotes(notebook))
});

export default connect(msp, mdp)(notesIndexForm);