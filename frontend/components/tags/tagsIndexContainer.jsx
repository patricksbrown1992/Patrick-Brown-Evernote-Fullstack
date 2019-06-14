import TagsIndexForm from './tagsIndexForm';
import { connect } from 'react-redux';

const msp = state => ({
    tags: Object.values(state.entities.tags)
});

export default connect(msp, null)(TagsIndexForm);
