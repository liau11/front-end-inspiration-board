import logo from './logo.svg';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import { useState } from 'react';
import CardList from './components/CardList';


const sampleBoardData = [{ 'title': 'HIIIII', 'owner_name': 'Lily' }, { 'title': 'Byeee', 'owner_name': 'Niambi' }]

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

  const [boardData, setBoardData] = useState(sampleBoardData)
  const [cardData, setCardData] = useState(CARDS_DATA)

  const createNewBoard = (newBoard) => {
    setBoardData()
    console.log(sampleBoardData)
  }

  const addNewCard = (newCard) => {
    setCardData([...cardData, newCard])
    console.log(cardData)
  }

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <Board sampleBoardData={sampleBoardData} />
      <CardList cards={cardData} />
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
