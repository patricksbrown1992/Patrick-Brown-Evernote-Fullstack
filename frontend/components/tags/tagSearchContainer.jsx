import { connect } from 'react-redux';
import { closeModal } from "../../actions/modalActions";
import TagSearchForm from './tagSearchForm';

const msp = state => ({
    user: state.entities.user,
    tags: Object.values(state.entities.tags),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(TagSearchForm);