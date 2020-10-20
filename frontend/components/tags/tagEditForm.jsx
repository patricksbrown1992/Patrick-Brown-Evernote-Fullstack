import React, { useState } from "react";

const TagEditForm = (props) => {
  const [nameOfTag, updateName] = useState(() => {
    return "";
  });

  function handleClick(e) {
    e.preventDefault();
    const name = nameOfTag;
    const user_id = Object.values(props.user)[0].id;
    const id = props.id;
    props.updateTag({ name, user_id, id }).then(() => props.closeModal());
  }

  return (
    <div className="tag-edit-modal">
      <div className="tag-edit-modal-top">
        <h1>Rename tag</h1>
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>Name</h3>

      <input
        type="text"
        value={nameOfTag}
        onChange={(e) => updateName(e.target.value)}
      />

      {nameOfTag ? (
        <button onClick={handleClick} className="valid">
          Done
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TagEditForm;
