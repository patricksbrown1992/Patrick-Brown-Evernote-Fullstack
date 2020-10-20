import React, { useEffect, useState } from "react";
import styleDate from "../../util/styleDate";
import LeftNav from "../username/nonNoteLeftContainer";
import { Link } from "react-router-dom";
import { merge } from "lodash";
const AllNoteForm = (props) => {
  const [loaded, updateLoaded] = useState(() => {
    return false;
  });

  useEffect(() => {
    props.clearNotebooks();
    props
      .getNotebooks(props.user)
      .then((notebooks) => {
        return notebooks.notebooks.forEach((notebook) => {
          props.getNotes(notebook.id);
        });
      })
      .then(() => props.getTaggings(props.user))
      .then(() => props.getTags(props.user));

    // return props.removeTriage();
  }, []);

  function handleTagModal(e) {
    e.preventDefault();
    props.tagSearchDropDown();
  }

  function handleRemoveTriage(e) {
    e.preventDefault();
    props.removeTriage();
  }

  function handleSubmitNoteDropDown(entity) {
    return (e) => {
      e.preventDefault();
      props.noteDropDown(entity);
    };
  }

  function duplicateArray(array) {
    // deep dupes objects
    let ans = [];
    for (let i = 0; i < array.length; i++) {
      let newObject = merge({}, array[i]);
      ans.push(newObject);
    }
    return ans;
  }

  function triageNotes(notes) {
    let ans = [];
    let triage = props.triage[0];
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];

      for (let j = 0; j < props.taggings.length; j++) {
        let tagging = props.taggings[j];
        if (note.id === tagging.note_id && tagging.tag_id === triage.id) {
          let newObject = merge({}, note);

          ans.push(newObject);
        }
      }
    }
    return ans;
  }

  let notes = duplicateArray(props.notes);
  notes = notes.filter((note) =>
    note.title.toUpperCase().includes(props.search.toUpperCase())
  );
  if (props.triage.length > 0) {
    notes = triageNotes(notes);
  }

  notes = notes.map((note) => (
    <li key={note.id} className="all-note-title">
      <Link to={`/username/${note.notebook_id}/notes/${note.id}`}>
        {" "}
        <h1>{note.title}</h1>{" "}
      </Link>
      <Link to={`/username/${note.notebook_id}/notes/${note.id}`}>
        {" "}
        <h3>{note.body.replace(/(<([^>]+)>)/gi, "")}</h3>
      </Link>
      Last updated:
      <br />
      {styleDate(note.updated_at)}
      <br />
      <i
        onClick={handleSubmitNoteDropDown(note)}
        className="fas fa-ellipsis-h"
      ></i>
    </li>
  ));

  return (
    <div className="all-note-page">
      <LeftNav />
      {notes.length ? (
        <div className="all-note-right">
          <div className="all-note-title">
            <h1>All Notes</h1>

            <h3 className="all-notes-length">{notes.length} notes</h3>
            <div className="notebook-show-icons">
              <div className="tag-triage-div">
                {props.triage.length ? (
                  <button
                    onClick={handleRemoveTriage}
                    className="tag-triage-name"
                  >
                    {props.triage[0].name} x
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="notebook-show-bottom">
                <i
                  onClick={handleTagModal}
                  className={props.tags.length ? "fas fa-tag" : ""}
                ></i>
              </div>
            </div>
          </div>
          <div className="all-note-nav">{notes}</div>
        </div>
      ) : (
        <div className="all-note-right">
          {" "}
          <h1>No Notes</h1>{" "}
        </div>
      )}
    </div>
  );
};
export default AllNoteForm;
