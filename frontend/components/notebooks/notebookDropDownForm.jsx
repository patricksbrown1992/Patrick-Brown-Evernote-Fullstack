import React from "react";

const NotebookDropDownForm = (props) => {
  function handleSubmitDelete(e) {
    e.preventDefault();
    props.notebookDelete(props.notebook);
  }
  function handleSubmitEdit(e) {
    e.preventDefault();
    props.editModal(props.notebook);
  }

  function handleSubmitShortcut(e) {
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
      <br />
      <p>{props.notebook.name}</p>
      <br />

      <button onClick={handleSubmitDelete}>Delete Notebook</button>

      <br />

      <button onClick={handleSubmitEdit}>Edit Notebook Name</button>

      <br />

      <button onClick={handleSubmitShortcut}>
        {props.notebook.shortcut ? "Remove from Shortcuts" : "Add to Shortcuts"}
      </button>

      <br />
    </div>
  );
};

export default NotebookDropDownForm;
