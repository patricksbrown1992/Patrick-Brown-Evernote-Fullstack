import React, { useState } from "react";

const TagEditForm = (props) => {
  const [nameOfTag, updateName] = useState(() => {
    return "";
  });

  function handleChange(e) {
    e.preventDefault();
    updateName(e.target.value);
  }

  function handleSubmit(e) {
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

      <input type="text" value={nameOfTag} onChange={handleChange} />

      {nameOfTag ? (
        <button onClick={handleSubmit} className="valid">
          Done
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TagEditForm;
