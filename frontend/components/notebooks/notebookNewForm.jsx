import React, {useState} from 'react'; 


const NotebookNewForm = (props) => {

    
    const [newName, updateName] = useState(() => {
        return '';
    })

    function handleChange(e) {
        e.preventDefault();
        updateName(e.target.value);    
    }

    function handleSubmit(e){
        e.preventDefault();
        const name = newName;
        const user_id = Object.values(props.user)[0].id;
        props.createNotebook({name, user_id}).then( () => props.closeModal());
    }
    
    return(
        <div className='new-notebook-modal'>
            <div className='new-notebook-modal-top'>
                <h1>Create new notebook</h1>
                <i onClick={props.closeModal} className="fas fa-times fa-2x"></i>
            </div>
            <h3>Notebooks are useful for grouping notes around a common topic. They can be private or shared.</h3>
            <h5>Name</h5>
            <span>

                <input type="text" value={newName} onChange={handleChange} placeholder='Notebook name'/>
            </span>
            <br/>
            <br/>
            
            {newName ? <button onClick={handleSubmit} className="valid"  type='submit'>Done</button> : ''}
            
        </div>
    )

        
    
}


export default NotebookNewForm;