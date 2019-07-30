import { connect } from 'react-redux';
import { closeModal } from "../../actions/modalActions";
import TagSearchForm from './tagSearchForm';
import { getTags } from '../../actions/tagActions';
import { receiveTriage, removeTriage } from '../../actions/tagTriageAction';

const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags),
    notes: Object.values(state.entities.notes)
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    getTags: user => dispatch(getTags(user)),
    updateTriage: entity => dispatch(receiveTriage(entity)),
    removeTriage: () => dispatch(removeTriage())

})

export default connect(msp, mdp)(TagSearchForm);