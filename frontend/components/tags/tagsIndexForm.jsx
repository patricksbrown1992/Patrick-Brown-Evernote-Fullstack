import React from 'react';
import UsernameFormLeft from '../username/nonNoteLeftContainer';
import { merge } from 'lodash';

class TagIndexForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {tag: ''};
        this.handleSubmitNewTag = this.handleSubmitNewTag.bind(this);
        this.handleSubmitDropDown = this.handleSubmitDropDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sortTags = this.sortTags.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
    }

    componentDidMount() {
        this.props.getTags(this.props.user);
    }

    handleSubmitNewTag(entity) {
        return (e) => {
            e.preventDefault();
            this.props.addTag(entity);
        };
    }

    handleChange() {
        return (e) => {
            this.setState({ tag: e.target.value })
        }
    }

    sortTags(tags){
        let newTags = this.duplicateArray(tags)
        let sorted = false;
        // debugger
        while(!sorted){
            sorted = true;
            // bubble sort
            for(let i = 0; i < newTags.length - 1; i++){
                let current = newTags[i];
                let next = newTags[i+1];
                if (current.name.toUpperCase() > next.name.toUpperCase()){
                    // Swaps if first element is after second in alphabet
                    sorted = false;
                    [newTags[i], newTags[i + 1]] = [newTags[i + 1], newTags[i]]
                }
            }

            for(let i = 0; i < newTags.length; i++){
                if(i === 0){
                    newTags[i].duplicate = false;
                } else {
                    if (newTags[i].name[0].toUpperCase() == newTags[i-1].name[0].toUpperCase()){
                        newTags[i].duplicate = true;
                    } else {
                        newTags[i].duplicate = false;
                    }
                }
            }
        }
        return newTags;
    }

    duplicateArray(array){
        // deep dupes objects
        let ans = [];
        for(let i = 0; i < array.length; i++){
            let newObject = merge({}, array[i]);
            ans.push(newObject);
        }
        // debugger
        return ans;
    }


    handleSubmitDropDown(entity){
        return(e) => {
            e.preventDefault();
            this.props.tagDropDown(entity);
        }
    }


    render() {
        // first render or no tags
        let tags
        if (this.props.tags.length < 1) {
            return (
                <div className="tag-index">
                    <UsernameFormLeft />
                    <div className="tag-index-header">
                        <h1>Tags</h1>
                        <span onClick={this.handleSubmitNewTag(this.props.user)} className="new-tag"><i className="fas fa-plus-circle"></i><button type='submit'><p>New Tag</p></button></span>
                        
                    </div>
                </div>
            )
        } else {
            // debugger
            tags = this.sortTags(this.props.tags);
            // debugger
            tags = tags.map(tag => {
                if(tag.duplicate){
                    // if tag starts with same letter as one before it
                    return (
                        <li key={tag.id}>
                            {/* <div className="tag-index-intial">{tag.name[0]}</div> */}
                            <div className="tag-name">{tag.name}<button onClick={this.handleSubmitDropDown(tag)} className='chevron-down-button'><i class="fas fa-chevron-down"></i></button></div>
                        </li>
                    )
                } else {
                    return (
                    <li key={tag.id}>
                        <div className="tag-index-intial">{tag.name[0].toUpperCase()}</div>
                        <div className="tag-name">{tag.name}<button onClick={this.handleSubmitDropDown(tag)} className='chevron-down-button'><i class="fas fa-chevron-down"></i></button></div>
                    </li>
                )
                }
            })

            return (
                <div className="tag-index">
                    <UsernameFormLeft />
                    <div className="tag-index-right">
                        <div className="tag-index-upper">
                            <div className="tag-index-header">
                                <h1>Tags</h1>
                                <input placeholder='Find Tags...' type="text" onChange={this.handleChange} />
                            </div>
                            <div className="tag-index-add">
                                <span onClick={this.handleSubmitNewTag(this.props.user)} className="new-tag"><button type='submit'><i className="fas fa-plus-circle"></i><p>New Note</p></button></span>
                            </div>
                        </div>
                        
                        
                        <div className="tag-index-list">
                            <ul>{tags}</ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default TagIndexForm;