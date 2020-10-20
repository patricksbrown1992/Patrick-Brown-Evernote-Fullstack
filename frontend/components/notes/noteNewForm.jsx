import React, { useState } from "react";

const NoteNewForm = (props) => {
  const [title, updateTitle] = useState(() => {
    return "";
  });

  const [body, updateBody] = useState(() => {
    return "";
  });

  function handleClick(e) {
    e.preventDefault();
    const notebook_id = props.id;
    const id = props.id;
    const note = { title, body, notebook_id };

    props.createNote({ id, note }).then(() => props.closeModal());
  }

  return (
    <div className="new-note-modal">
      <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      <h1>Create new Note</h1>

      <h5>Title</h5>

      <input
        type="text"
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
        placeholder="Note Title"
      />

      <h5>Body</h5>

      <input
        type="text"
        value={body}
        onChange={(e) => updateBody(e.target.value)}
        placeholder="Note Body"
      />

      {body.length && title.length ? (
        <button onClick={handleClick} className="valid">
          Done
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NoteNewForm;
