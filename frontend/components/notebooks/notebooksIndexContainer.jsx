import notebooksIndexForm from './notebooksIndexForm';
import {connect} from 'react-redux';
import {getNotebooks} from '../../actions/notebookActions';
import React from 'react';
import { openModal, closeModal, openEditModal  } from "../../actions/modalActions";
const msp = state => ({
    user: state.entities.user[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
}); 

const mdp = dispatch => ({
    getNotebooks: (user) => dispatch(getNotebooks(user)),
    editModal: (id) => dispatch(openEditModal(id)),
    addModal: () => dispatch(openModal('add')),
    closeModal: () => dispatch(closeModal()),
    
});

export default connect(msp, mdp)(notebooksIndexForm);