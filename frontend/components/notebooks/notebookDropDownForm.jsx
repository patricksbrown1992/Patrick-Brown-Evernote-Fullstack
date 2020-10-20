import React from "react";

const NotebookDropDownForm = (props) => {
  function handleClickDelete(e) {
    e.preventDefault();
    props.notebookDelete(props.notebook);
  }
  function handleClickEdit(e) {
    e.preventDefault();
    props.editModal(props.notebook);
  }

  function handleClickShortcut(e) {
    e.preventDefault();
    const name = props.notebook.name;
    const user_id = props.notebook.user_id;
    const shortcut = !props.notebook.shortcut;
    const id = props.notebook.id;
    props.closeModal();
    props.updateNotebook({
      id: id,
      name: name,
      user_id: user_id,
      shortcut: shortcut,
    });
  }

  return (
    <div className="notebook-drop-down-modal">
      <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      <p>{props.notebook.name}</p>
      <button onClick={handleClickDelete}>Delete Notebook</button>
      <button onClick={handleClickEdit}>Edit Notebook Name</button>
      <button onClick={handleClickShortcut}>
        {props.notebook.shortcut ? "Remove from Shortcuts" : "Add to Shortcuts"}
      </button>
    </div>
  );
};

export default NotebookDropDownForm;
