import React from "react";

const NoteDropDownForm = (props) => {
  function handleClickDelete(e) {
    e.preventDefault();
    props.noteDelete(props.note);
  }

  function handleClickEdit(e) {
    e.preventDefault();
    props.noteEdit(props.note);
  }

  function handleClickShortcut(e) {
    e.preventDefault();
    const title = props.note.title;
    const body = props.note.body;
    const notebook_id = props.note.notebook_id;
    const id = props.note.notebook_id;
    const id2 = props.note.id;
    const shortcut = !props.note.shortcut;
    const note = { title, body, notebook_id, id: id2, shortcut };
    props.closeModal();
    props.updateNote({ id, note });
  }

  return (
    <div className="note-drop-down-modal">
      <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      <p>{props.note.title}</p>
      <button onClick={handleClickDelete}>Delete Note</button>
      <button onClick={handleClickEdit}>Edit Note Title</button>
      <button onClick={handleClickShortcut}>
        {props.note.shortcut ? "Remove From Shortcuts" : "Add to Shortcuts"}
      </button>
    </div>
  );
};

export default NoteDropDownForm;
