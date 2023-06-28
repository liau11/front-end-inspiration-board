import logo from './logo.svg';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import { useState } from 'react';
import CardList from './components/CardList';


const BOARDS_DATA = [
  {
    board_id: 1,
    title: 'Flowers',
    owner_name: 'Lily'
  },
  {
    board_id: 2,
    title: 'Books',
    owner_name: 'Lily'
  },
  {
    board_id: 3,
    title: 'Beets, Bears, & BattleStar Galatica',
    owner_name: 'Niambi'
  },
  {
    board_id: 4,
    title: 'Byeee',
    owner_name: 'Niambi'
  },
]



const CARDS_DATA = [
  {
    board_id: 1,
    card_id: 1,
    message: "message1",
    likes: 0
  },
  {
    board_id: 1,
    card_id: 2,
    message: "message2",
    likes: 0
  },
  {
    board_id: 2,
    card_id: 3,
    message: "message3",
    likes: 0
  }
]

function App() {

  const [boardData, setBoardData] = useState(BOARDS_DATA)
  const [cardData, setCardData] = useState(CARDS_DATA)

  const createNewBoard = (newBoard) => {
    setBoardData([...boardData, newBoard])
    console.log(boardData)
  }

  const addNewCard = (newCard) => {
    setCardData([...cardData, newCard])
    console.log(cardData)
  }

  const updateLike = (updatedCard) => {
    const updatedData = cardData.map(card => {
      if (card.card_id == updatedCard.card_id) {
        return updatedCard;
      } else {
        return card
      }
    });
    setCardData(updatedData)
  };

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <Board boardData={BOARDS_DATA} />
      <CardList cards={cardData} updateLike={updateLike} />
      <h2>Create A New Board</h2>
      <NewBoardForm createNewBoard={createNewBoard} setBoardData={setBoardData} />
      <div className="Card-Form">
        <h2>Create a New Card</h2>
        <NewCardForm addNewCard={addNewCard} />
      </div>
    </div>
  );
}

export default App;
