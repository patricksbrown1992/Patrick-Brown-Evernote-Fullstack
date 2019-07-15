import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class TagSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
        this.sortTags = this.sortTags.bind(this);
    }

    handleChange() {
        return (e) => {
            this.setState({ name: e.target.value });
        };
    }

    duplicateArray(array) {
        // deep dupes objects
        let ans = [];
        for (let i = 0; i < array.length; i++) {
            let newObject = merge({}, array[i]);
            ans.push(newObject);
        }
        // debugger
        return ans;
    }

    sortTags(tags) {
        let newTags = this.duplicateArray(tags)
        let sorted = false;
        // debugger
        while (!sorted) {
            sorted = true;
            // bubble sort
            for (let i = 0; i < newTags.length - 1; i++) {
                let current = newTags[i];
                let next = newTags[i + 1];
                if (current.name.toUpperCase() > next.name.toUpperCase()) {
                    // Swaps if first element is after second in alphabet
                    sorted = false;
                    [newTags[i], newTags[i + 1]] = [newTags[i + 1], newTags[i]]
                }
            }
        }
    }

    render(){
        tags = this.sortTags(this.props.tags);
        tags = tags.filter(tag => (
            tag.name.toUpperCase().includes(this.state.name.toUpperCase()))
        )   
        tags = tags.map(tag => {
            return (
                <li> </li>
            )
        })


        return(
            <div className="tag-search-modal">
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <input type="text" value={this.state.name} onChange={this.handleChange()} placeholder='Find tags...' />
                <ul>{tags}</ul>
            </div>
        )



    }




}

export default TagSearchForm;