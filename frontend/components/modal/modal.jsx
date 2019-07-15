import React from 'react';
import { closeModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import NoteNewForm from '../notes/noteNewContainer';
import NotebookNewForm from '../notebooks/notebookNewContainer';
import NotebookEditForm from '../notebooks/notebookEditContainer';
import TagNewContainer from '../tags/tagsNewContainer';
import TagEditContainer from '../tags/tagEditContainer';
import TagDeleteContainer from '../tags/tagDeleteContainer';
import NotebookDropDown from '../notebooks/notebookDropDownContainer';
import NotebookDeleteContainer from '../notebooks/notebookDeleteContainer';
import NoteDeleteContainer from '../notes/noteDeleteContainer';
import NoteEditContainer from '../notes/noteEditContainer';
import NoteDropDownContainer from '../notes/noteDropDownContainer';
import LogoutContainer from '../username/logoutContainer';
import TagDropDownContainer from '../tags/tagDropDownContainer';
import TagSearch from '../tags/tagSearchContainer';

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
        case 'noteEdit':
            component = <NoteEditContainer note={modal.entity}/>;
            break;
        case 'noteDelete':
            component = <NoteDeleteContainer note={modal.entity}/>;
            break;
        case 'logout':
            component = <LogoutContainer />;
            break;
        case 'noteDropDown':
            component = <NoteDropDownContainer note={modal.entity} />;
            break;
        case 'tagDropDown':
            component = <TagDropDownContainer tag={modal.entity}/>;
            break;

        case 'tagSearch':
            component = <TagSearch /> ;
            break
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