import React from 'react';
import { openModal, closeModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import NoteNewForm from '../notes/noteNewContainer';
import NotebookNewForm from '../notebooks/notebookNewContainer';
import NotebookEditForm from '../notebooks/notebookEditContainer';
import TagNewContainer from '../tags/tagsNewContainer';
import TagEditContainer from '../tags/tagEditContainer';
import TagDeleteContainer from '../tags/tagDeleteContainer';
import NotebookDropDown from '../notebooks/notebookDropDownContainer';
import NotebookDeleteContainer from '../notebooks/notebookDeleteContainer';
function Modal({ modal, closeModal }) {
    // debugger
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
            component = <NotebookEditForm id={modal.entity.id} />;
            break;
        case 'addNote':
            component = <NoteNewForm id={modal.entity.id} />;
            break;
        case 'addTag':
            component = <TagNewContainer id={modal.entity.id} />;
            break;
        case 'notebookDropDown':
            component = <NotebookDropDown notebook={modal.entity} />;
            break;
        case 'notebookDelete':
            component = <NotebookDeleteContainer notebook={modal.entity} />;
            break;
        case 'editTag':
            component = <TagEditContainer id={modal.entity.id}/>;
            break;
        case 'deleteTag':
            component = <TagDeleteContainer tag={modal.entity} />;
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