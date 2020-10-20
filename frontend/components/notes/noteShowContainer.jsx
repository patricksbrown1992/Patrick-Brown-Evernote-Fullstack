import { connect } from "react-redux";
import noteShowForm from "./noteShowForm";
import { updateNote, clearNotes, getNote } from "../../actions/noteAction";
import { withRouter } from "react-router-dom";
// import {createTagging} from '../../actions/taggingActions'
import { noteTagAdd } from "../../actions/modalActions";

const msp = (state, ownProps) => {
  let note = state.entities.notes[ownProps.match.params.note_id];

  return {
    user: state.entities.user[state.session.id],
    notes: state.entities.notes,
    note: note,
    search: state.ui.search,
    notebooks: state.entities.notebooks,
    taggings: Object.values(state.entities.taggings),
    tags: Object.values(state.entities.tags),
  };
};

const mdp = (dispatch) => ({
  updateNote: (id, note) => dispatch(updateNote(id, note)),
  clearNotes: () => dispatch(clearNotes()),

  // createTagging: (tagging) => dispatch(createTagging(tagging)),
  noteTagAddModal: (entity) => dispatch(noteTagAdd(entity)),
});

export default withRouter(connect(msp, mdp)(noteShowForm));
