import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

// Testing data
// const board_id = 1

const CardList = ({ cards, updateLike, deleteCard, selectedBoardName, selectedBoardId }) => {
    // pass in list of cards to all Cards, generate Card component using list
    const allCards = cards.map((card) => {
        if (card.board_id === selectedBoardId) {
            return (
                < Card
                    key={card.id}
                    cardId={card.id}
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
            {/* send all cards for one board data here */}
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