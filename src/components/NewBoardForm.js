import { useState } from "react";
import PropTypes from "prop-types";


const DEFAULT_FORM = {
    title: '',
    owner_name: ''
};

const NewBoardForm = (props) => {
    const [boardFormData, setBoardFormData] = useState(DEFAULT_FORM);

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
            <input type="submit" value="Add a title" />
            <label htmlFor="owner_name">Owner's name</label>
            <input
                type='text'
                id='owner_name'
                name='owner_name'
                value={boardFormData.owner_name}
                onChange={handleChange}
            />
            <input type="submit" value="Add an owner" />
        </form>
    )

}

NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired,
}

export default NewBoardForm;