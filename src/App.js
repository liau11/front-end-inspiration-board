import logo from './logo.svg';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import { useState } from 'react';
import CardList from './components/CardList';


const boardData = [
  { board_id: 1,
    title: 'Flowers',
    owner_name: 'Lily',
  },
  { board_id: 2,
    title: 'Books',
    owner_name: 'Lily',
  },
  { board_id: 3,
    title: 'Beets, Bears, & BattleStar Galatica',
    owner_name: 'Niambi',
  },
  { 
    board_id: 4,
    title: 'Byeee', 
    owner_name: 'Niambi' },
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

  const [newboardData, setBoardData] = useState(boardData)
  const [cardData, setCardData] = useState(CARDS_DATA)

  const createNewBoard = (newBoard) => {
    setBoardData()
    console.log(newboardData)
  }

  const addNewCard = (newCard) => {
    setCardData([...cardData, newCard])
    console.log(cardData)
  }

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <Board sampleBoardData={boardData} />
      <h2>Selected Board</h2>
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
