import { useState } from "react";
import PropTypes from "prop-types";
import './NewBoardForm.js';

const NewBoardForm = (props) => {
    const DEFAULT_FORM = {
        title: '',
        owner: ''
    };

    const [boardFormData, setBoardFormData] = useState(DEFAULT_FORM);
    // const [hideBoardForm, setHideBoardForm] = useState(false);

    const handleChange = (event) => {
        console.log(event.target.name)

        const newFormData = {
            ...boardFormData,
            [event.target.name]: event.target.value
        }
        setBoardFormData(newFormData);
    }
    const handleFormSubmit = (event) => {
        console.log(boardFormData)
        event.preventDefault();
        props.createNewBoardCallback(boardFormData);
        setBoardFormData(DEFAULT_FORM);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Title</label>
            <input
                type='text'
                id='title'
                name='title'
                value={boardFormData.title}
                onChange={handleChange}
            />
            <label htmlFor="owner">Owner's name</label>
            <input
                type='text'
                id='owner'
                name='owner'
                value={boardFormData.owner}
                onChange={handleChange}
            />
            <input type="submit" value="Submit" />
            <label htmlFor="preview">Preview Your Message Here</label>
            <input className="preview"
                type='text'
                id='message'
                name='message'
                value={`${boardFormData.title}: ${boardFormData.owner}`}
                onChange={handleChange}
            />
        </form>

    )

}


NewBoardForm.propTypes = {
    createNewBoardCallback: PropTypes.func.isRequired,
}

export default NewBoardForm;