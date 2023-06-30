import PropTypes from 'prop-types';
import './Card.css';
import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PlusOneOutlinedIcon from '@mui/icons-material/PlusOneOutlined';


const Card = ({ cardId, message, likes, updateLike, deleteCard }) => {

    const onLikeButtonClick = () => {
        const updatedLikeCount = likes + 1
        updateLike(cardId, updatedLikeCount);
    }


    return (
        <section className='card'>
            <div className='delete-button'>
                <button className="delete-button" onClick={() => deleteCard(cardId)}>
                    <DeleteOutlineOutlinedIcon />
                </button>
            </div>
            <h2>
                {message}
            </h2 >
            <div>
                <div className="likeCount">
                    {likes} ♡
                    <button className="plusOneButton" onClick={onLikeButtonClick}>
                        <PlusOneOutlinedIcon fontSize="small" />
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