import NotebookShowForm2 from './notebookShowForm2';
import { connect } from 'react-redux';
import { getNotebooks, deleteNotebook } from '../../actions/notebookActions';
import { clearNotes } from '../../actions/noteAction';
import {getNotes} from '../../actions/noteAction';
import { withRouter } from 'react-router-dom';

const msp = (state) => ({
    user: state.entities.user[state.session.id],
    notebooks: state.entities.notebooks,
    notes: Object.values(state.entities.notes)

});

const mdp = dispatch => ({
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
    getNotes: id => dispatch(getNotes(id)),
    clearNotes: () => dispatch(clearNotes())
});

export default withRouter(connect(msp, mdp)(NotebookShowForm2));