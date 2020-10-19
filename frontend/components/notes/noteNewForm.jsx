import React, { useState } from "react";

const NoteNewForm = (props) => {
  const [title, updateTitle] = useState(() => {
    return "";
  });

  const [body, updateBody] = useState(() => {
    return "";
  });

  function handleChangeBody(e) {
    e.preventDefault();
    updateBody(e.target.value);
  }

  function handleChangeTitle(e) {
    e.preventDefault();
    updateTitle(e.target.value);
  }

  function handleSubmit(e) {
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
      <span>
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="Note Title"
        />
      </span>
      <h5>Body</h5>
      <span>
        <input
          type="text"
          value={body}
          onChange={handleChangeBody}
          placeholder="Note Body"
        />
      </span>
      <br />

      {body.length && title.length ? (
        <button onClick={handleSubmit} className="valid" type="submit">
          Done
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NoteNewForm;
