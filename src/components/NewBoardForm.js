import { useState } from "react";
import PropTypes from "prop-types";
import './NewBoardForm.css';


const DEFAULT_FORM = {
    title: '',
    owner_name: '',
    preview: '', 
    preview_2: ''
};

const NewBoardForm = (props) => {
    const [boardFormData, setBoardFormData] = useState(DEFAULT_FORM);
    const [hideBoardForm, setHideBoardForm] = useState(false);

    const handleChange = (event) => {
        console.log(event.target.name)

        const newFormData = {
            ...boardFormData,
            [event.target.name]: event.target.value
        }
        setBoardFormData(newFormData);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.createNewBoard(boardFormData);
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
            {/* <input type="submit" value="Add an owner" /> */}

            <label htmlFor="preview">Preview:</label>
            <input className="preview"
                type='text'
                id='message'
                name='message'
                value={boardFormData.title}
                onChange={handleChange}
            />

            {/* <input type="submit" value="Add a title" /> */}
            <label htmlFor="owner_name">Owner's name</label>
            <input
                type='text'
                id='owner_name'
                name='owner_name'
                value={boardFormData.owner_name}
                onChange={handleChange}
            />
            <label htmlFor="preview_2">Preview:</label> 
            <input className="preview_2"
                type='text'
                id='message'
                name='message'
                value={boardFormData.owner_name}
                onChange={handleChange}
            />
            <input type="submit" value="submit" />

        </form>

    )

}

NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired,
}

export default NewBoardForm;