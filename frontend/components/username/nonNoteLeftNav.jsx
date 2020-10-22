import React, { useState } from "react";
import { Link } from "react-router-dom";

const usernameFormLeft = (props) => {
  const [body, updateBody] = useState(() => {
    return "";
  });

  const [selected, updateSelected] = useState(() => {
    return false;
  });

  const [shortCutChecker, updateShortCutChecker] = useState(() => {
    return false;
  });

  const [search, updateSearch] = useState(() => {
    return props.search;
  });

  function updateShortcuts() {
    props
      .getNotebooks(props.user)
      .then(() =>
        props.notebooks.forEach((notebook) => {
          props.getNotes(notebook.id);
        })
      )
      .then(() => updateShortCutChecker(!shortCutChecker));
  }

  function changeSelected() {
    props.getNotebooks(props.user).then(() => updateSelected(!selected));
  }

  function handleChange(e) {
    e.preventDefault();

    updateSearch(e.target.value);
    props.receiveSearch(e.target.value);
  }

  function handleNoteSearch(e) {
    e.preventDefault();
    props.noteSearch(body);
  }

  function handleRemoveNotebook(entity) {
    return (e) => {
      e.preventDefault();
      const name = entity.name;
      const user_id = entity.user_id;
      const shortcut = !entity.shortcut;
      const id = entity.id;
      props.updateNotebook({
        id: id,
        name: name,
        user_id: user_id,
        shortcut: shortcut,
      });
    };
  }

  function handleRemoveNote(entity) {
    return (e) => {
      e.preventDefault();
      let title = entity.title;
      let body = entity.body;
      let notebook_id = entity.notebook_id;
      let id = entity.notebook_id;
      let id2 = entity.id;
      let shortcut = !entity.shortcut;
      let note = { title, body, notebook_id, id: id2, shortcut };
      props.updateNote({ id, note });
    };
  }

  function handleLogOut(e) {
    e.preventDefault();
    props.logOutModal();
  }

  function handleClearSearch(e) {
    e.preventDefault();
    props.clearSearch();
    updateSearch("");
  }

  let notebooks;
  let leftcaret;
  let shortCutCaret;
  let allNotebooks;
  let allNotes;

  if (selected) {
    leftcaret = "fas fa-caret-down";
    notebooks = props.notebooks.map((notebook) => (
      <li key={notebook.id}>
        <div className="username-left-notebook-index">
          <i className="fas fa-book"></i>
          <Link to={`/username/${notebook.id}`}>{notebook.name}</Link>
        </div>
      </li>
    ));
  } else {
    notebooks = "";
    leftcaret = "fas fa-caret-right";
  }

  if (shortCutChecker) {
    shortCutCaret = "fas fa-caret-down";
    allNotebooks = props.notebooks.map((notebook) => {
      if (notebook.shortcut) {
        return (
          <li className="shortcut-notebook" key={notebook.id}>
            <div className="username-left-notebook-index">
              <i className="fas fa-book"></i>
              <Link to={`/username/${notebook.id}`}>{notebook.name}</Link>
            </div>
            <i
              onClick={handleRemoveNotebook(notebook)}
              class="far fa-times-circle"
            ></i>
          </li>
        );
      }
    });

    allNotes = props.notes.map((note) => {
      if (note.shortcut) {
        return (
          <li className="shortcut-note" key={note.id}>
            <div className="username-left-notebook-index">
              <i className="fas fa-sticky-note"></i>
              <Link to={`/username/${note.notebook_id}/notes/${note.id}`}>
                {note.title}
              </Link>
            </div>
            <i onClick={handleRemoveNote(note)} class="far fa-times-circle"></i>
          </li>
        );
      }
    });
  } else {
    shortCutCaret = "fas fa-caret-right";
  }

  return (
    <div className="left-nav">
      <ul>
        <li
          className="user-email"
          onClick={handleLogOut}
          className="user-email"
        >
          {props.user.email}
        </li>
        <form onSubmit={handleNoteSearch}>
          <div className="left-search-input">
            <input
              onChange={handleChange}
              value={search}
              placeholder="Search all notes..."
              type="text"
            ></input>
            <i
              onClick={handleClearSearch}
              className={
                search ? "search-circle far fa-times-circle" : "hidden-circle"
              }
            ></i>
          </div>
        </form>

        <li className="shortcuts-li" onClick={updateShortcuts}>
          <i className={shortCutCaret}></i>
          <i className="fas fa-star"></i>Shortcuts
        </li>
        <ul className="username-left-shortcuts-ul">
          {allNotebooks}
          {allNotes}
        </ul>
        <li className="all-notes-li">
          <Link to="/allnotes">
            <i className="fas fa-sticky-note"></i>All Notes
          </Link>
        </li>
        <li className="notebooks-li">
          <i className={leftcaret} onClick={changeSelected}></i>
          <Link to="/notebooks">
            <i className="fas fa-book"></i>Notebooks
          </Link>
        </li>
        <ul className="username-left-ul">{notebooks}</ul>
        {/* <li><i className="fas fa-user-friends"></i>Shared with Me</li> */}
        <li className="tags-li">
          <Link to="/tags">
            <i className="fas fa-tag"></i>Tags
          </Link>
        </li>
        <li className="notebooks-li">
          <a
            href="https://patricksbrown1992.github.io/portfolio/"
            target="_blank"
          >
            Portfolio
          </a>
        </li>
        <li className="notebooks-li">
          <a
            href="https://www.linkedin.com/in/patricksbrown1992/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="notebooks-li">
          <a href="https://github.com/patricksbrown1992" target="_blank">
            Github
          </a>
        </li>
        {/* <li><i className="fas fa-trash"></i>Trash</li> */}
        {/* <i class="fas fa-caret-down"></i> */}
      </ul>
    </div>
  );
};

export default usernameFormLeft;
