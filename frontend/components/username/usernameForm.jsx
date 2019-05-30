import React from 'react';
const usernameForm = () => (
    <div className = "username-form">
        <div className="left-nav">
            <ul>
                <li class="user-email">Email</li>
                <input placeholder="Search all notes..."type="text"></input>
                <li className="new-note">New Note</li>
                <li>Shortcuts</li>
                <li>All Notes</li>
                <li>Notebooks</li>
                <li>Shared with Me</li>
                <li>Tags</li>
                <li>Trash</li>
            </ul>
        </div>
        <div className="center-nav">
            <ul>
                <li>First Note</li>

                
            </ul>
        </div>

    </div>
)

export default usernameForm;