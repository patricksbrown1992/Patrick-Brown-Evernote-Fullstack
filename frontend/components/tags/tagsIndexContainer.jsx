import TagsIndexForm from './tagsIndexForm';
import { connect } from 'react-redux';
import { getTags, clearTags} from '../../actions/tagActions';
import { openAddTagModal, editTagModal, deleteTagModal, tagDropDown } from '../../actions/modalActions';
import {getTaggings} from '../../actions/taggingActions';


const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags),
    search: state.ui.search
});

const mdp = dispatch => ({
    getTags: user => dispatch(getTags(user)),
    addTag: (entity) => dispatch(openAddTagModal(entity)),
    deleteTagModal: entity => dispatch(deleteTagModal(entity)),
    editTagModal: entity => dispatch(editTagModal(entity)),
    tagDropDown: entity => dispatch(tagDropDown(entity)),
    clearTags: () => dispatch(clearTags()),
    getTaggings: (user) => dispatch(getTaggings(user))
});

export default connect(msp, mdp)(TagsIndexForm);