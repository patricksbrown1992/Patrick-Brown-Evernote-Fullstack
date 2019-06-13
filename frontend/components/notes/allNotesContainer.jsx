import AllNotesForm from './allNotesForm';
import {connect} from 'react-redux';
import { getNotebooks, clearNotebooks } from '../../actions/notebookActions';
import {getNotes, clearNotes} from '../../actions/noteAction';

const msp = state = ({
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch = ({
    getNotebooks: user => dispatch(getNotebooks(user)),
    getNotes: id => dispatch(getNotes(id)),
    clearNotebooks: () => dispatch(clearNotebooks()),
    clearNotes: () => dispatch(clearNotes())

});

export default connect(msp,mdp)(AllNotesForm);
