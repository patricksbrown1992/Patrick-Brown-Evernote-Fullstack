import TagsIndexForm from './tagsIndexForm';
import { connect } from 'react-redux';
import { getTags } from '../../actions/tagActions';
import { openAddTagModal } from '../../actions/modalActions';


const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags)
});

const mdp = dispatch => ({
    getTags: user => dispatch(getTags(user)),
    addTag: (entity) => dispatch(openAddTagModal(entity))
});

export default connect(msp, mdp)(TagsIndexForm);