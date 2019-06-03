import notesIndexForm from './notesIndexForm';
import {connect} from 'react-redux';

const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes)
});

// const mdp = dispatch => ({
//     logout: () => dispatch(logout()),
//     getNotebooks: (user) => dispatch(getNotebooks(user))
// });

export default connect(msp, null)(notesIndexForm);