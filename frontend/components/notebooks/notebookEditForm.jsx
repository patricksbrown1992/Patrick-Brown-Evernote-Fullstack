import React, { useState } from "react";

const NotebookEditForm = (props) => {
  const [newName, updateName] = useState(() => {
    return "";
  });

  function handleClick(e) {
    e.preventDefault();
    const name = newName;
    const user_id = props.user.id;
    const id = props.id;
    props.updateNotebook({ name, user_id, id }).then(() => props.closeModal());
  }

  return (
    <div className="notebook-edit-modal">
      <div className="notebook-edit-top">
        <h1>Rename notebook</h1>
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>Name</h3>

      <input
        type="text"
        value={newName}
        onChange={(e) => updateName(e.target.value)}
      />

      {newName ? (
        <button onClick={handleClick} className="valid">
          Done
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NotebookEditForm;
