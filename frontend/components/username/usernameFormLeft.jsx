import React from 'react';
import { Link } from 'react-router-dom';


class usernameFormLeft extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { body: '', selected: false, shortCutChecker: false, search: this.props.search};
        this.updateSelected = this.updateSelected.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.updateShortcuts = this.updateShortcuts.bind(this);
        this.handleRemoveNotebook = this.handleRemoveNotebook.bind(this);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
    }


    updateSelected() {
        this.props.getNotebooks(this.props.user).then(() => this.setState({selected: !this.state.selected}));
    }

    updateShortcuts(){
        this.props.getNotebooks(this.props.user).then(() => this.props.notebooks.forEach((notebook) => {
            this.props.getNotes(notebook.id)
        })).then(() => this.setState({ shortCutChecker: !this.state.shortCutChecker }));
    }

    handleRemoveNotebook(entity) {
        return (e) => {
            e.preventDefault();
            const name = entity.name;
            const user_id = entity.user_id;
            const shortcut = !entity.shortcut;
            const id = entity.id;
            this.props.updateNotebook({ id: id, name: name, user_id: user_id, shortcut: shortcut })
        };
    };

    handleChange(){
        return (e) => {
            this.setState({ search: e.target.value }, () => this.props.receiveSearch(this.state.search));
        }
    }

    // handleSubmitLogOut(e) {
    //     e.preventDefault();
    //     this.props.logout();
    // }

    handleSubmitNewNote(entity) {
        return (e) => {
            e.preventDefault();
            this.props.addNote(entity);
        };
    }

    handleRemoveNote(entity) {
        return (e) => {
            e.preventDefault();
            let title = entity.title;
            let body = entity.body;
            let notebook_id = entity.notebook_id;
            let id = entity.notebook_id;
            let id2 = entity.id;
            let shortcut = !entity.shortcut;
            let note = { title, body, notebook_id, id: id2, shortcut };
            this.props.updateNote({ id, note })
        }
    }

    handleNoteSearch(){
        return (e) => {
            e.preventDefault();
            this.props.noteSearch(this.state.body);
        }
    }
    handleLogOut(){
        return (e) => {
            e.preventDefault();
            this.props.logOutModal();
        }
    }
    handleClearSearch(){
        return(e) => {
            e.preventDefault();
            this.props.clearSearch()
        }
    }


    render() {
        
        let notebooks;
        let caret;
        let shortCutCaret;
        let allNotebooks;
        let allNotes;
        let searchCircle;
        if (this.state.search.length > 0) {
            searchCircle = 'search-circle far fa-times-circle'
        } else {
            searchCircle = 'hidden-circle'
        }
        if(this.state.selected){
   
            caret = "fas fa-caret-down";
            notebooks = this.props.notebooks.map(notebook => (
                <li key={notebook.id}>
                    <div className="username-left-notebook-index"><i className="fas fa-book"></i><Link to={`/username/${notebook.id}`}>{notebook.name}</Link></div>
                </li>
            ))
        } else {
         
            notebooks = '';
            caret = "fas fa-caret-right";
        }

        if (this.state.shortCutChecker){
            shortCutCaret = "fas fa-caret-down";
            allNotebooks = this.props.notebooks.map(notebook => {
                if(notebook.shortcut){
                    return (
                        <li className="shortcut-notebook" key={notebook.id}>
                            <div className="username-left-notebook-index"><i className="fas fa-book"></i><Link to={`/username/${notebook.id}`}>{notebook.name}</Link></div>
                            <i onClick={this.handleRemoveNotebook(notebook)} className="far fa-times-circle"></i>
                        </li>

                    )

                }
            })

            allNotes = this.props.notes.map(note => {
                if(note.shortcut){
                    return (
                        <li className="shortcut-note" key={note.id}>
                            <div className="username-left-notebook-index"><i className="fas fa-sticky-note"></i><Link to={`/username/${note.notebook_id}/notes/${note.id}`}>{note.title}</Link></div>
                            <i onClick={this.handleRemoveNote(note)} className="far fa-times-circle"></i>
                        </li>
                    )
                }
            })


        } else {
            shortCutCaret = "fas fa-caret-right";
        }

       
        return (
            

            <div className="left-nav">
                <ul>
                    
                    <li className = "user-email" onClick={this.handleLogOut()}className="user-email">{this.props.user.email}</li>
                    <form onSubmit={this.handleNoteSearch}>
                        <div className="left-search-input"><input onChange={this.handleChange()} value={this.state.search} placeholder="Search all notes..." type="text" ></input><i onClick={this.handleClearSearch()} className={searchCircle} ></i></div>
                    </form>
                    <span onClick={this.handleSubmitNewNote(this.props.notebook)} className="new-note"><i className="fas fa-plus-circle fa-2x"></i><button type='submit'>New Note</button></span>
                    <li  className="shortcuts-li" onClick={this.updateShortcuts}><i className={shortCutCaret}></i><i className="fas fa-star"></i>Shortcuts</li>
                    <ul className="username-left-shortcuts-ul">
                        {allNotebooks}
                        {allNotes}
                    </ul>
                    <li className="all-notes-li"><Link to='/allnotes'><i className="fas fa-sticky-note"></i>All Notes</Link></li>
                    <li className="notebooks-li"><i className={caret} onClick={this.updateSelected}></i><Link to='/notebooks'><i className="fas fa-book"></i>Notebooks</Link></li>
                    <ul className="username-left-ul">
                        {notebooks}
                    </ul>
                    {/* <li><i className="fas fa-user-friends"></i>Shared with Me</li> */}
                    <li className="tags-li"><Link to='/tags'><i className="fas fa-tag"></i>Tags</Link></li>
                    <li className='notebooks-li'><a href="https://patricksbrown1992.github.io/portfolio/" target="_blank">Portfolio</a></li>
                    <li className='notebooks-li'><a href="https://www.linkedin.com/in/patricksbrown1992/" target="_blank">LinkedIn</a></li>
                    <li className='notebooks-li'><a href="https://github.com/patricksbrown1992" target="_blank">Github</a></li>
                    {/* <li><i className="fas fa-trash"></i>Trash</li> */}
                    {/* <i class="fas fa-caret-down"></i> */}

                </ul>
            </div>




        )
    }
}



export default usernameFormLeft;