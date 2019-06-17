import TagsIndexForm from './tagsIndexForm';
import { connect } from 'react-redux';
import { getTags, deleteTag } from '../../actions/tagActions';
import { openAddTagModal } from '../../actions/modalActions';


const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags)
});

const mdp = dispatch => ({
    getTags: user => dispatch(getTags(user)),
    addTag: (entity) => dispatch(openAddTagModal(entity)),
    deleteTag: tag => dispatch(deleteTag(tag))
});

export default connect(msp, mdp)(TagsIndexForm);