import React, { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import { Redirect } from "react-router-dom";

const NoteShowForm = (props) => {
  {
    if (!props.notes[props.match.params.note_id])
      return <Redirect to={`/notebooks`} />;
  }

  const [body, updateBody] = useState(() => {
    return props.note.body;
  });

  useEffect(() => {
    updateBody(props.notes[props.match.params.note_id].body);
  }, [props.match.params.note_id]);

  function handleAddTag(e) {
    e.preventDefault();
    props.noteTagAddModal(props.match.params.note_id);
  }

  function handleMouseOut(e) {
    e.preventDefault();

    const id = props.notes[props.match.params.note_id].id;
    const note = { body, id };
    props.updateNote({ id, note });
  }

  if (props.search.length > 0) return <Redirect to="/allnotes" />;

  let showtagbutton =
    props.tags.length < 1 ? (
      ""
    ) : (
      <button className="add-tag-on-note-button" onClick={handleAddTag}>
        Add Tag
      </button>
    );

  const modules = {
    toolbar: [
      [{ header: [1, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "indent",
    "strike",
    "blockquote",
    "link",
    "image",
  ];

  return (
    <>
      <div className="right-nav">
        <div className="note-title-top">
          <h1>{props.note.title}</h1>
          {showtagbutton}
        </div>
      </div>

      <div className="quill-container" onMouseLeave={handleMouseOut}>
        <ReactQuill
          className="react-quill-element"
          value={body}
          formats={formats}
          modules={modules}
          onChange={(e) => {
            return updateBody(e);
          }}
          theme="snow"
        />
      </div>
    </>
  );
};

export default NoteShowForm;
