import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './NewCardForm.css';

const DEFAULT_CARD_FORM = {
    message: '',
    // preview: '',
};

const NewCardForm = (props) => {

    const [cardFormData, setCardFormData] = useState(DEFAULT_CARD_FORM);

    const handleChange = (event) => {
        console.log(event.target.name)

        const newCardData = {
            ...cardFormData,
            [event.target.name]: event.target.value
        }
        setCardFormData(newCardData);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.createNewCard(cardFormData);
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
            <label htmlFor="preview">Preview Your Message Here</label>
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
    createNewCard: PropTypes.func.isRequired,
}

export default NewCardForm;