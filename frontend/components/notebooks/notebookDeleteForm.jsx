import React from "react";
import { Redirect } from "react-router-dom";

const NotebookDeleteForm = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    props
      .deleteNotebook(props.notebook)
      .then(() =>
        props.notes.forEach((note) => {
          if (note.notebook_id == props.notebook.id) {
            props.deleteNote(note);
          }
        })
      )
      .then(() => props.closeModal());
  }

  return (
    <div className="notebook-delete-modal">
      <div className="noteboook-delete-top">
        <h1>Delete Notebook?</h1>
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>
        Are you sure you want to delete the "{props.notebook.name}" notebook?
      </h3>

      <button onClick={handleSubmit} type="submit">
        Delete
      </button>
    </div>
  );
};

export default NotebookDeleteForm;
