import { connect } from 'react-redux';
import TagDropDownForm from './tagDropDownForm';

const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags)
});

const mdp = dispatch => ({
    deleteTagModal: entity => dispatch(deleteTagModal(entity)),
    editTagModal: entity => dispatch(editTagModal(entity))
});

export default connect(msp, mdp)(TagDropDownForm);