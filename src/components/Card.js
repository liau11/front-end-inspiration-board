import PropTypes from 'prop-types';
import './Card.css';


const Card = ({ cardId, boardId, message, likes }) => {
    console.log(message)

    return (
        <section className='card'>
            <h2>
                {message}
            </h2 >
            <div>
                <div>
                    {likes}
                    <button>
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