import React, { useState, useEffect } from "react";
// import UsernameFormLeft from "../username/nonNoteLeftContainer";
import UsernameFormLeft from "../username/usernameLeftContainer";
import { merge } from "lodash";
import { Link, Redirect } from "react-router-dom";
import styleDate from "../../util/styleDate";

const NotebooksIndexForm = (props) => {
  const [selected, updateSelected] = useState(() => {
    return false;
  });

  const [body, updateBody] = useState(() => {
    return "";
  });

  const [title, updateTitle] = useState(() => {
    return false;
  });

  useEffect(() => {
    props.getNotebooks(props.user);
  }, []);

  function handleClickAdd(e) {
    e.preventDefault();
    props.addModal();
  }

  function handleTitleClick(e) {
    e.preventDefault();
    updateTitle(!title);
    handleSort(props.notebooks);
  }

  function handleSort(notebooks) {
    let newNotebooks = duplicateArray(notebooks);
    if (title === true) {
      let sorted = false;
      while (!sorted) {
        sorted = true;
        // bubble sort
        for (let i = 0; i < newNotebooks.length - 1; i++) {
          let current = newNotebooks[i];
          let next = newNotebooks[i + 1];
          if (current.name.toUpperCase() < next.name.toUpperCase()) {
            // Swaps if first element is before the second in alphabet
            sorted = false;
            [newNotebooks[i], newNotebooks[i + 1]] = [
              newNotebooks[i + 1],
              newNotebooks[i],
            ];
          }
        }
      }
      return newNotebooks;
    } else {
      let sorted = false;
      while (!sorted) {
        sorted = true;
        // bubble sort
        for (let i = 0; i < newNotebooks.length - 1; i++) {
          let current = newNotebooks[i];
          let next = newNotebooks[i + 1];
          if (current.name.toUpperCase() > next.name.toUpperCase()) {
            // Swaps if first element is after the second in alphabet
            sorted = false;
            [newNotebooks[i], newNotebooks[i + 1]] = [
              newNotebooks[i + 1],
              newNotebooks[i],
            ];
          }
        }
      }
      return newNotebooks;
    }
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

  function handleClickDropDown(entity) {
    return (e) => {
      e.preventDefault();
      props.notebookDropDown(entity);
    };
  }

  function changeSelected(id) {
    if ((selected === 0 || selected) && selected === id) {
      return (e) => {
        e.preventDefault();
        updateSelected(false);
      };
    } else {
      return (e) => {
        e.preventDefault();
        updateSelected(id);
      };
    }
  }
  if (props.search.length > 0) return <Redirect to="/allnotes" />;
  let notebooks;
  let arrow;

  notebooks = handleSort(props.notebooks);
  notebooks = notebooks.filter((notebook) =>
    notebook.name.toUpperCase().includes(body.toUpperCase())
  );

  notebooks = notebooks.map((notebook) => {
    return (
      <tr key={notebook.id}>
        <td>
          <Link to={`/username/${notebook.id}`}>{notebook.name}</Link>
        </td>
        <td>{props.user.email}</td>
        <td>{styleDate(notebook.updated_at)}</td>
        <td>
          <i
            onClick={handleClickDropDown(notebook)}
            className="fas fa-ellipsis-h"
          ></i>
        </td>
      </tr>
    );
  });
  if (title) {
    arrow = "fas fa-arrow-up";
  } else {
    arrow = "fas fa-arrow-down";
  }

  return (
    <div className="notebooks-index">
      <UsernameFormLeft />

      <div className="notebooks-index-right">
        <div className="notebook-index-top-div">
          <div className="notebook-index-top">
            <h1>Notebooks</h1>
            <input
              placeholder="Find Notebooks..."
              value={body}
              type="text"
              onChange={(e) => updateBody(e.target.value)}
            />
          </div>
          <div className="notebook-index-header">
            <h3>My notebook list</h3>

            <button className="new-notebook-button" onClick={handleClickAdd}>
              <i className="fas fa-book-medical"></i>New Notebook
            </button>
          </div>
        </div>
        <table>
          <tr style={{ marginBottom: "15px" }}>
            <th style={{ cursor: "pointer" }} onClick={handleTitleClick}>
              Title <i className={arrow}></i>
            </th>
            <th>Create By</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>

          {notebooks}
        </table>
      </div>
    </div>
  );
};

export default NotebooksIndexForm;
