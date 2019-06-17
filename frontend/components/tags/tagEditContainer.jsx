import { connect } from 'react-redux';
import TagEditForm from './tagEditForm';
import {updateTag } from '../../actions/tagActions';
import { closeModal } from "../../actions/modalActions";

const msp = state => ({
    user: state.entities.user,
});

const mdp = dispatch => ({
    updateTag: tag => dispatch(updateTag(tag)),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(TagEditForm);