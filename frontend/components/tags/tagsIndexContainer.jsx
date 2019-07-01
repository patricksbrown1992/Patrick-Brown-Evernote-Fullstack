import TagsIndexForm from './tagsIndexForm';
import { connect } from 'react-redux';
import { getTags} from '../../actions/tagActions';
import { openAddTagModal, editTagModal, deleteTagModal, tagDropDown } from '../../actions/modalActions';


const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags)
});

const mdp = dispatch => ({
    getTags: user => dispatch(getTags(user)),
    addTag: (entity) => dispatch(openAddTagModal(entity)),
    deleteTagModal: entity => dispatch(deleteTagModal(entity)),
    editTagModal: entity => dispatch(editTagModal(entity)),
    tagDropDown: entity => dispatch(tagDropDown(entity))
});

export default connect(msp, mdp)(TagsIndexForm);