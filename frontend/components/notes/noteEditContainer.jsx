import { connect } from "react-redux";
import noteEditForm from "./noteEditForm";
import { updateNote } from "../../actions/noteAction";
import { closeModal } from "../../actions/modalActions";

const msp = (state) => {
  return {
    user: state.entities.user[state.session.id],
    notes: Object.values(state.entities.notes),
  };
};

const mdp = (dispatch) => ({
  updateNote: (id, note) => dispatch(updateNote(id, note)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(noteEditForm);
