import { connect } from 'react-redux';
import noteShowForm from './noteShowForm';
import { updateNote } from '../../actions/noteAction';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notes: Object.values(state.entities.notes)
});

const mdp = state => ({
    updateNote: (id, note) => dispatch(updateNote(id, note))
});

export default connect(msp, mdp)(noteShowForm);