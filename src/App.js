import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/BoardList';
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
    // console.log(boardData)
  }

//   const deleteBoard = (boardId) => {
//     axios.get(`http://127.0.0.1:5000/boards/${boardId}`)
//     .then((response) => {
//       const deleteBoards = boards.map((board) => {
//         if (board_id !== boardId) {
//           return {...board};
//         }
//   } );
//   // taken from https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
//   const filteredUpdatedData = updatedAnimals.filter(function (element) {
//   return element !== undefined;
// });

// setAnimals(filteredUpdatedData);
// })
// .catch((error) => {
// // if it's not successful, print out error details for now
// console.log('could not delete animal', error, error.response);
// });
// }


//   const deleteAllBoards = (updatedBoards) => {
//   // const updatedBoardList = boardData.
//   }

  const addNewCard = (newCard) => {
    setCardData([...cardData, newCard])
    // console.log(cardData)
  }

  const deleteCard = (cardId) => {
    const newCardData = cardData.filter(
      (card) => card.card_id !== cardId
    )
    setCardData(newCardData);
  };

  const updateLike = (cardId, likeCount) => {
    const updatedData = cardData.map(card => {
      if (card.card_id === cardId) {
        return {
          ...card,
          likes: likeCount
        };
      } else {
        return card
      }
    });
    setCardData(updatedData)
    console.log(cardData)
  };

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section>
        <h2>Boards</h2>
        <Board boardData={boardData} />
        <CardList cards={cardData} updateLike={updateLike} deleteCard={deleteCard} />
      </section>
      <section className='form-section'>
        <h2>Create A New Board</h2>
        <NewBoardForm createNewBoard={createNewBoard} setBoardData={setBoardData} />
        <div className="Card-Form">
          <h2>Create a New Card</h2>
          <NewCardForm addNewCard={addNewCard} />
        </div>
      </section>
    </div>
      <h2>Boards</h2>
      <Board className="board-data"
      boards={BOARDS_DATA} 
      // deleteBoard={deleteBoard}
      />
      <SelectedBoard
      <CardList 
      cards={cardData} 
      updateLike={updateLike} 
      deleteCard={deleteCard} 
      />
      <h2>Create A New Board</h2>
      <NewBoardForm
      createNewBoard={createNewBoard} 
      setBoardData={setBoardData} 
      />
      <div className="Card-Form">
      <h2>Create a New Card</h2>
      <NewCardForm 
      addNewCard={addNewCard} 
      />

      </div>
      </div>
  );
}

export default App;
