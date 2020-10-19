import { connect } from "react-redux";
import TagDropDownForm from "./tagDropDownForm";
import {
  editTagModal,
  deleteTagModal,
  closeModal,
  tagAllDelete,
} from "../../actions/modalActions";

const msp = (state) => ({
  user: state.entities.user[state.session.id],
  tags: Object.values(state.entities.tags),
});

const mdp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  deleteTagModal: (entity) => dispatch(deleteTagModal(entity)),
  editTagModal: (entity) => dispatch(editTagModal(entity)),
  tagAllDelete: (entity) => dispatch(tagAllDelete(entity)),
});

export default connect(msp, mdp)(TagDropDownForm);
