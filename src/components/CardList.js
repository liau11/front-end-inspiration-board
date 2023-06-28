import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

// Testing data
const board_id = 1

const CardList = ({ cards, updateLike, deleteCard }) => {
    const allCards = cards.map((card) => {
        if (card.board_id === board_id) {
            return (
                < Card
                    key={card.card_id}
                    cardId={card.card_id}
                    boardId={card.board_id}
                    message={card.message}
                    likes={card.likes}
                    updateLike={updateLike}
                    deleteCard={deleteCard}
                />
            );
        }
    });

    return (
        <div>
            <h2> Cards for *** name of board *** </h2>
            <div className='all-cards'>{allCards}</div>
        </div>
    );
};


CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    updateLike: PropTypes.func,
    deleteCard: PropTypes.func
}


export default CardList;