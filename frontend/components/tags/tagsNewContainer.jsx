import { connect } from 'react-redux';
import TagNewForm from './tagsNewForm'
import { closeModal } from "../../actions/modalActions";
import { createTag } from '../../actions/tagActions';

const msp = state => ({
    user: state.entities.user,
});

const mdp = dispatch => ({
    createTag: (tag) => (dispatch(createTag(tag))),
    closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(TagNewForm);