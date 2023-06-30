import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

// Testing data
// const board_id = 1

const CardList = ({ cards, updateLike, deleteCard, selectedBoardName, selectedBoardId }) => {
    const allCards = cards.map((card) => {
        if (card.board_id === selectedBoardId) {
            return (
                < Card
                    key={card.card_id}
                    cardId={card.card_id}
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
            <h2> Cards for {selectedBoardName} </h2>
            <div className='all-cards'>{allCards}</div>
        </div>
    );
};


CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    updateLike: PropTypes.func,
    deleteCard: PropTypes.func,
    selectedBoardName: PropTypes.string,
}


export default CardList;