import { connect } from "react-redux";
import NotebookEditForm from "./notebookEditForm";
import { updateNotebook } from "../../actions/notebookActions";
import { closeModal } from "../../actions/modalActions";
const msp = (state) => ({
  user: state.entities.user[state.session.id],
});

const mdp = (dispatch) => ({
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(NotebookEditForm);
