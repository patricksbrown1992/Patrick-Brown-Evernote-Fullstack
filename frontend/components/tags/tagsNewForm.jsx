import React, { useState } from "react";

const TagNewForm = (props) => {
  const [name, updateName] = useState(() => {
    return "";
  });

  function handleClick(e) {
    e.preventDefault();
    const user_id = Object.values(props.user)[0].id;
    props.createTag({ name, user_id }).then(() => props.closeModal());
  }

  return (
    <div className="new-tag-modal">
      <div className="tag-new-modal-top">
        <h1>Create New Tag</h1>
        <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
      </div>
      <h3>Name</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Tag name"
      />

      {name ? (
        <button onClick={handleClick} className="valid">
          Done
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TagNewForm;
