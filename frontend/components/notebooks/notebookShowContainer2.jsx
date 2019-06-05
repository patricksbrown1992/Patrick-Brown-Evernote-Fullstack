import NotebookShowForm2 from './notebookShowForm2';
import { connect } from 'react-redux';
import { getNotebook, deleteNotebook } from '../../actions/notebookActions';
import {clearNotes} from '../../actions/noteAction';

const msp = (state) => ({
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)

});

const mdp = dispatch => ({
    getNotebook: notebook => dispatch(getNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id)),
    clearNotes: () => dispatch(clearNotes())
});

export default connect(msp, mdp)(NotebookShowForm2);