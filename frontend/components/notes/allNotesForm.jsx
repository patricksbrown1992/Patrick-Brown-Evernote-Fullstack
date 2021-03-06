import React, { useEffect, useState } from "react";
import styleDate from "../../util/styleDate";
import LeftNav from "../username/usernameLeftContainer";
import { Link } from "react-router-dom";
import { merge } from "lodash";
const AllNoteForm = (props) => {
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
  }, []);

  function handleTagModal(e) {
    e.preventDefault();
    props.tagSearchDropDown();
  }

  function handleRemoveTriage(e) {
    e.preventDefault();
    props.removeTriage();
  }

  function handleClickNoteDropDown(entity) {
    return (e) => {
      e.preventDefault();
      props.noteDropDown(entity);
    };
  }

  function triageNotes(notes) {
    const ans = [];
    const triage = props.triage[0];
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

  let notes = props.notes.filter((note) =>
    note.title.toUpperCase().includes(props.search.toUpperCase())
  );

  if (props.triage.length > 0) {
    notes = triageNotes(notes);
  }

  notes = notes.map((note) => (
    <li key={note.id} className="all-note-title">
      <Link to={`/username/${note.notebook_id}/notes/${note.id}`}>
        <h1>{note.title}</h1>
      </Link>
      <Link to={`/username/${note.notebook_id}/notes/${note.id}`}>
        <h3>{note.body.replace(/(<([^>]+)>)/gi, "")}</h3>
      </Link>
      <h3>Last updated:</h3>

      <h3>{styleDate(note.updated_at)}</h3>

      <i
        onClick={handleClickNoteDropDown(note)}
        className="fas fa-ellipsis-h"
      ></i>
    </li>
  ));

  return (
    <div className="all-note-page">
      <LeftNav />

      <div className="all-note-right">
        <div className="all-note-title">
          <h1>{notes.length ? "All Notes" : "No Notes"}</h1>

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
    </div>
  );
};
export default AllNoteForm;
