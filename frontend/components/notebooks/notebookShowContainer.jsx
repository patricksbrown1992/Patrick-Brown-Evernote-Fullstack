import NotebookShowForm2 from "./notebookShowForm";
import { connect } from "react-redux";
import { getNotebooks } from "../../actions/notebookActions";
import { clearNotes } from "../../actions/noteAction";
import { getNotes } from "../../actions/noteAction";
import { withRouter } from "react-router-dom";
import {
  notebookDropDown,
  tagSearchDropDown,
} from "../../actions/modalActions";
import { getTags, clearTags } from "../../actions/tagActions";
import { removeTriage } from "../../actions/tagTriageAction";

const msp = (state) => ({
  user: state.entities.user[state.session.id],
  notebooks: state.entities.notebooks,
  notes: Object.values(state.entities.notes),
  tags: Object.values(state.entities.tags),
  search: state.ui.search,
  triage: Object.values(state.ui.triage),
});

const mdp = (dispatch) => ({
  getNotebooks: (user) => dispatch(getNotebooks(user)),
  getNotes: (id) => dispatch(getNotes(id)),
  clearNotes: () => dispatch(clearNotes()),
  notebookDropDown: (notebook) => dispatch(notebookDropDown(notebook)),
  tagSearchDropDown: () => dispatch(tagSearchDropDown()),
  getTags: (user) => dispatch(getTags(user)),
  clearTags: () => dispatch(clearTags()),
  removeTriage: () => dispatch(removeTriage()),
});

export default withRouter(connect(msp, mdp)(NotebookShowForm2));
