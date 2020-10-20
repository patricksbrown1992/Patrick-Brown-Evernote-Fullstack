import React, { useState } from "react";
const NoteEditForm = (props) => {
  const [newName, updateName] = useState(() => {
    return "";
  });

  function handleChange(e) {
    e.preventDefault();
    updateName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const title = newName;
    const body = props.note.body;
    const notebook_id = props.note.notebook_id;
    const id = props.note.notebook_id;
    const id2 = props.note.id;
    const note = { title, body, notebook_id, id: id2 };
    props.updateNote({ id, note }).then(() => props.closeModal());
  }

  return (
    <div className="note-edit-modal">
      <div className="note-edit-modal-top">
        <h1>Rename note</h1>
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>Title</h3>

      <input type="text" value={newName} onChange={handleChange} />

      {newName ? (
        <button onClick={handleSubmit} className="valid">
          Done
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NoteEditForm;
