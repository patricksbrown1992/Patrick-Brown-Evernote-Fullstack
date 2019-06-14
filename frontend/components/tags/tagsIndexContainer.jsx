import TagsIndexForm from './tagsIndexForm';
import { connect } from 'react-redux';
import {getTags} from '../../actions/tagActions';
const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags)
});

const mdp = dispatch => ({
    getTags: user => dispatch(getTags(user))
});

export default connect(msp, mdp)(TagsIndexForm);
