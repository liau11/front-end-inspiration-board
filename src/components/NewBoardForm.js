import { useState } from "react";
import PropTypes from "prop-types";
import './NewBoardForm.js';
import './NewBoardForm.css';

const NewBoardForm = (props) => {
    const DEFAULT_FORM = {
        title: '',
        owner: ''
    };

    const [boardFormData, setBoardFormData] = useState(DEFAULT_FORM);
    const [preview, setPreview] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBoardFormData({ ...boardFormData, [name]: value });
        setPreview(boardFormData.title !== '' || boardFormData.owner !== '' ? `${boardFormData.title}: ${boardFormData.owner}` : '');
    };

    const handleFormSubmit = (event) => {
        console.log(boardFormData)
        event.preventDefault();
        props.createNewBoardCallback(boardFormData);
        setBoardFormData(DEFAULT_FORM);
        setPreview('');
    }


    return (
        <form onSubmit={handleFormSubmit} className="new-board-form">
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={boardFormData.title}
                    onChange={handleChange}
                />
                <label htmlFor="owner">Owner's name:</label>
                <input
                    type='text'
                    id='owner'
                    name='owner'
                    value={boardFormData.owner}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </div>
            <div>
                <label htmlFor="preview">Preview: </label>
                <input
                    className="preview"
                    type='text'
                    id='message'
                    name='message'
                    value={preview}
                />
            </div>
        </form>
    )
}


NewBoardForm.propTypes = {
    createNewBoardCallback: PropTypes.func.isRequired,
}

export default NewBoardForm;