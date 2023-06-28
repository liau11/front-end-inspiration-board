import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

// Testing data
const board_id = 2

const CardList = ({ cards, updateLike }) => {
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
    cards: PropTypes.array.isRequired
}


export default CardList;