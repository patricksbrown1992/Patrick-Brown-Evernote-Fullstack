import { connect } from 'react-redux';
import noteShowForm from './noteShowForm2';
import { updateNote, clearNotes } from '../../actions/noteAction';
import { withRouter } from 'react-router-dom';
import {createTagging} from '../../actions/taggingActions'

const msp = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.note_id];
    
    return {

        user: state.entities.user[state.session.id],
        notes: Object.values(state.entities.notes),
        note: note,
        search: state.ui.search
    }
};

const mdp = dispatch => ({
    updateNote: (id, note) => dispatch(updateNote(id, note)),
    clearNotes: () => dispatch(clearNotes()),
    createTagging: (tagging) => dispatch(createTagging(tagging))
});

export default withRouter(connect(msp, mdp)(noteShowForm));