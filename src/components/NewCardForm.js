import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './NewCardForm.css';


const NewCardForm = ({ addNewCard, selectedBoardId }) => {

    const DEFAULT_CARD_FORM = {
        board_id: null,
        like_count: 0,
        message: "",
    }

    const [cardFormData, setCardFormData] = useState(DEFAULT_CARD_FORM);

    const handleChange = (event) => {
        const newCardData = {
            ...cardFormData,
            board_id: selectedBoardId,
            [event.target.name]: event.target.value
        }
        setCardFormData(newCardData);
        console.log(cardFormData)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        addNewCard(cardFormData);
        setCardFormData(DEFAULT_CARD_FORM);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Message</label>
            <input
                type='text'
                id='message'
                name='message'
                value={cardFormData.message}
                onChange={handleChange}
            />
            <input type="submit" value="submit" />
            <label htmlFor="preview">Preview: </label>
            <input className="preview"
                type='text'
                id='message'
                name='message'
                value={cardFormData.message}
                onChange={handleChange}
            />
        </form>
    )

}

NewCardForm.propTypes = {
    addNewCard: PropTypes.func.isRequired,
}

export default NewCardForm;