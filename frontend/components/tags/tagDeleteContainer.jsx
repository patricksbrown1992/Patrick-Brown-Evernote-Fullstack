import TagDeleteForm from "./tagDeleteForm";
import { connect } from "react-redux";
import { deleteTag } from "../../actions/tagActions";
import { closeModal } from "../../actions/modalActions";

const msp = (state) => ({
  user: state.entities.user,
});

const mdp = (dispatch) => ({
  deleteTag: (tag) => dispatch(deleteTag(tag)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(TagDeleteForm);
