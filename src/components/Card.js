import PropTypes from 'prop-types';
import './Card.css';


const Card = ({ cardId, boardId, message, likes, updateLike }) => {
    console.log(message)

    const onLikeButtonClick = () => {
        const updatedCard = {
            'board_id': boardId,
            'card_id': cardId,
            'message': message,
            'likes': likes + 1
        }
        updateLike(updatedCard);
    }


    return (
        <section className='card'>
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
    message: PropTypes.string.isRequired,
    likes: PropTypes.number
};

export default Card;