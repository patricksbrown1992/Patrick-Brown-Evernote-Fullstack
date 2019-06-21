import { connect } from 'react-redux';
import noteShowForm from './noteShowForm2';
import { updateNote} from '../../actions/noteAction';
import { closeModal } from "../../actions/modalActions";


const msp = (state, ownProps) => {
    return {

        user: state.entities.user[state.session.id],
        notes: Object.values(state.entities.notes),
    }
};

const mdp = dispatch => ({
    updateNote: (id, note) => dispatch(updateNote(id, note)),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(noteShowForm);