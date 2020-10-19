import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { withRouter } from "react-router-dom";
import TagAllDeleteForm from "./tagAllDeleteForm";
import { deleteTagging, getTaggings } from "../../actions/taggingActions";

const msp = (state) => ({
  user: state.entities.user[state.session.id],
  tags: Object.values(state.entities.tags),
  notes: Object.values(state.entities.notes),
  taggings: Object.values(state.entities.taggings),
});

const mdp = (dispatch) => ({
  deleteTagging: (id) => dispatch(deleteTagging(id)),
  closeModal: () => dispatch(closeModal()),
  getTaggings: (user) => dispatch(getTaggings(user)),
});

export default withRouter(connect(msp, mdp)(TagAllDeleteForm));
