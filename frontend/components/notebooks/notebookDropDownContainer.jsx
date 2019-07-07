import { connect } from 'react-redux';
import NotebookDropDown from './notebookDropDownForm';
import { openModal, closeModal, openEditModal, notebookDelete } from "../../actions/modalActions";
import { receiveShortcut} from '../../actions/shortcutActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    shortcuts: state.ui.shortcut
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    editModal: (entity) => dispatch(openEditModal(entity)),
    notebookDelete: notebook => dispatch(notebookDelete(notebook)),
    addToShortcuts: entity => dispatch(receiveShortcut(entity)),
});

export default connect(msp, mdp)(NotebookDropDown);