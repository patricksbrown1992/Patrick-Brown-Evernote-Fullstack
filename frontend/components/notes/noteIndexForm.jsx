import React, { useState, useEffect } from "react";
import { Link, Route, withRouter, Redirect } from "react-router-dom";
import NoteShowForm from "../notes/noteShowContainer";
import styleDate from "../../util/styleDate";
import { merge } from "lodash";

const NotesIndexForm = (props) => {
  const [loaded, updateLoaded] = useState(() => {
    return false;
  });

  useEffect(() => {
    props.clearTaggings();
    props
      .getNotes(props.notebook.id)
      .then(() => props.getTaggings(props.user))
      .then(() => updateLoaded(true));

    return () => {
      props.removeTriage();
    };
  }, []);

  function onlyCorrectNotes(notes) {
    const ans = [];
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].notebook_id == parseInt(props.match.params.notebook_id)) {
        let newObject = merge({}, notes[i]);

        ans.push(newObject);
      }
    }
    return ans;
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
        if (note.id == tagging.note_id && tagging.tag_id === triage.id) {
          let newObject = merge({}, note);

          ans.push(newObject);
        }
      }
    }
    return ans;
  }

  if (props.search.length > 0) return <Redirect to="/allnotes" />;
  if (!loaded) return null;

  let notes = onlyCorrectNotes(props.notes);
  if (props.triage.length > 0) {
    notes = triageNotes(notes);
  }

  notes = notes.map((note) => (
    <li key={note.id} className="note-index-title">
      <Link to={`/username/${props.notebook.id}/notes/${note.id}`}>
        <h1>{note.title}</h1>
      </Link>
      <Link to={`/username/${props.notebook.id}/notes/${note.id}`}>
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
    <>
      <ul>{notes.length ? notes : "No notes yet"}</ul>
      <Route
        path={`${props.match.url}/notes/:note_id`}
        component={NoteShowForm}
      />
    </>
  );
};
export default withRouter(NotesIndexForm);
