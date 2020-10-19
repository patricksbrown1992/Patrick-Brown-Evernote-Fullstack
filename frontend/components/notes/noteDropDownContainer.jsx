import { connect } from "react-redux";
import NoteDropDown from "./noteDropDownForm";
import { closeModal, noteEdit, noteDelete } from "../../actions/modalActions";
import { updateNote } from "../../actions/noteAction";

const msp = (state) => ({
  user: state.entities.user[state.session.id],
  notebooks: Object.values(state.entities.notebooks),
  notes: Object.values(state.entities.notes),
});

const mdp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  noteEdit: (entity) => dispatch(noteEdit(entity)),
  noteDelete: (note) => dispatch(noteDelete(note)),
  updateNote: (id, note) => dispatch(updateNote(id, note)),
});

export default connect(msp, mdp)(NoteDropDown);
