import PropTypes from 'prop-types';
import './Card.css';
import { useState } from 'react';


const Card = ({ cardId, boardId, message, likes, updateLike, deleteCard }) => {

    const onLikeButtonClick = () => {
        const updatedLikeCount = likes + 1
        updateLike(cardId, updatedLikeCount);
    }


    return (
        <section className='card'>
            <div className='delete-button'>
                <button onClick={() => deleteCard(cardId)}>
                    x
                </button>
            </div>
            <h2>
                {message}
            </h2 >
            <div>
                <div>
                    {likes} ♡
                    <button onClick={onLikeButtonClick}>
                        + 1
                    </button>

                </div>
            </div>
        </section>
    )

}

Card.propTypes = {
    cardId: PropTypes.number.isRequired,
    boardId: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    updateLike: PropTypes.func,
    deleteCard: PropTypes.func
};

export default Card;