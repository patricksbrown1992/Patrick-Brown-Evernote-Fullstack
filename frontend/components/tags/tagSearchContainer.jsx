import { connect } from 'react-redux';
import { closeModal } from "../../actions/modalActions";
import TagSearchForm from './tagSearchForm';
import { getTags } from '../../actions/tagActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    getTags: user => dispatch(getTags(user))
})

export default connect(msp, mdp)(TagSearchForm);