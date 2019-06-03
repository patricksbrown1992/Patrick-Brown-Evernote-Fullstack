import React from 'react';
import UsernameFormLeft from '../username/usernameLeftContainer';

const notebooksIndexForm = () => (
    <div className='notebooks-index'>
        <div className="left-nav">

            <UsernameFormLeft />
        </div>
        <div className='notebooks-left'>
            <h1>Notebooks</h1>
            <h3>My notebook list</h3>
        </div>
        
        
    </div>
)

export default notebooksIndexForm;