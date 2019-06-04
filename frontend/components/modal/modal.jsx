import React from 'react';
import { openModal, closeModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import NotebookNewForm from '../notebooks/notebookNewContainer';
import NotebookEditForm from '../notebooks/notebookEditContainer';

function Modal({ modal, closeModal }) {
    debugger
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'add':
            debugger
            component = <NotebookNewForm />;
            break;
        case 'edit':
            debugger
            component = <NotebookEditForm />; 
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