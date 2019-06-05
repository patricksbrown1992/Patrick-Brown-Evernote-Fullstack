import React from 'react';
import { openModal, closeModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import NoteNewForm from '../notes/noteNewContainer';
import NotebookNewForm from '../notebooks/notebookNewContainer';
import NotebookEditForm from '../notebooks/notebookEditContainer';
import NoteEditForm from '../notes/noteEditContainer';

function Modal({ modal, closeModal }) {
    debugger
    if (!modal.type) {
        return null;
    }
    let component;
    switch (modal.type) {
        case 'add':
            // debugger
            component = <NotebookNewForm />;
            break;
        case 'edit':
            // debugger
            component = <NotebookEditForm id={modal.entity.id}/>; 
            break;
        case 'addNote':
            component = <NoteNewForm id={modal.entity.id}/>;
            break;
        case 'editNote':
            component = <NoteEditForm id={modal.entity.id} notebook_id={modal.entity.notebook_id} />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);