import { connect } from 'react-redux';
import { closeModal } from "../../actions/modalActions";
import NoteTagAdd from './noteTagAddForm';
import { getTags } from '../../actions/tagActions';
import {createTagging} from '../../actions/taggingActions';
import { withRouter } from 'react-router-dom';


const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags),
    notes: Object.values(state.entities.notes),
    taggings: Object.values(state.entities.taggings)
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    getTags: user => dispatch(getTags(user)),
    createTagging: tagging => dispatch(createTagging(tagging)),

    
})

export default withRouter(connect(msp, mdp)(NoteTagAdd));