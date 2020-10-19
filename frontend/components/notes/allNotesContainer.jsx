import AllNotesForm from "./allNotesForm";
import { connect } from "react-redux";
import { getNotebooks, clearNotebooks } from "../../actions/notebookActions";
import { getNotes, clearNotes, deleteNote } from "../../actions/noteAction";
import { noteDropDown, tagSearchDropDown } from "../../actions/modalActions";
import { removeTriage } from "../../actions/tagTriageAction";
import { getTags } from "../../actions/tagActions";
import { getTaggings } from "../../actions/taggingActions";

const msp = (state) => ({
  user: state.entities.user[state.session.id],
  notebooks: Object.values(state.entities.notebooks),
  notes: Object.values(state.entities.notes),
  search: state.ui.search,
  taggings: Object.values(state.entities.taggings),
  triage: Object.values(state.ui.triage),
  tags: Object.values(state.entities.tags),
});

const mdp = (dispatch) => ({
  getNotebooks: (user) => dispatch(getNotebooks(user)),
  getNotes: (id) => dispatch(getNotes(id)),
  clearNotebooks: () => dispatch(clearNotebooks()),
  clearNotes: () => dispatch(clearNotes()),
  deleteNote: (note) => dispatch(deleteNote(note)),
  noteDropDown: (entity) => dispatch(noteDropDown(entity)),
  removeTriage: () => dispatch(removeTriage()),
  getTags: (user) => dispatch(getTags(user)),
  getTaggings: (user) => dispatch(getTaggings(user)),
  tagSearchDropDown: () => dispatch(tagSearchDropDown()),
});

export default connect(msp, mdp)(AllNotesForm);
