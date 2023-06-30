import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/BoardList';
import CardList from './components/CardList';


// const BOARDS_DATA = [
//   {
//     board_id: 1,
//     title: 'Flowers',
//     owner_name: 'Lily'
//   },
//   {
//     board_id: 2,
//     title: 'Books',
//     owner_name: 'Lily'
//   },
//   {
//     board_id: 3,
//     title: 'Beets, Bears, & BattleStar Galatica',
//     owner_name: 'Niambi'
//   },
//   {
//     board_id: 4,
//     title: 'Byeee',
//     owner_name: 'Niambi'
//   },
// ]

// const CARDS_DATA = [
//   {
//     board_id: 1,
//     card_id: 1,
//     message: "message1",
//     likes: 0
//   },
//   {
//     board_id: 1,
//     card_id: 2,
//     message: "message2",
//     likes: 0
//   },
//   {
//     board_id: 2,
//     card_id: 3,
//     message: "message3",
//     likes: 0
//   }
// ]

function App() {

  const [boardData, setBoardData] = useState([])
  const [cardData, setCardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({ "boardId": null, "title": null, "owner": null })

  const selectBoardCallback = (selectedBoard) => {
    setSelectedBoard(selectedBoard)
  }


  const API_URL = 'https://inspo-board-service.onrender.com';

  const populateBoards = () => {
    axios.get(`${API_URL}/boards`)
      .then((response) => {
        const initialBoardData = [];
        response.data.forEach((board) => {
          initialBoardData.push(board);
        });
        setBoardData(initialBoardData);
      })
      .catch((error) => {
        console.log("error: ", error);
      })

  }

  useEffect(populateBoards, []);

  const createNewBoard = (newBoardData) => {
    console.log(newBoardData)
    axios
      .post(`${API_URL}/boards`, newBoardData)
      .then(() => {
        populateBoards();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // const deleteBoard = (boardId) => {
  //   axios.delete(`${API_URL}/${boardId}`)
  //     .then((response) => {
  //       const updatedBoards = boardData.map((board) => {
  //         if (board.id !== boardId) {
  //           return { ...board };
  //         }
  //       });

  //       // taken from https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
  //       const filteredUpdatedData = updatedBoards.filter(function (element) {
  //         return element !== undefined;
  //       });

  //       setBoardData(filteredUpdatedData);
  //     })
  //     .catch((error) => {
  //       console.log('error', error, error.response);
  //     });
  // }

  const addNewCard = (newCard) => {
    axios.post(`${API_URL}/cards`, newCard)
      .then(
        axios.get(`${API_URL}/${newCard.board_id}/cards`)
      )
      .catch()
    setCardData([...cardData, newCard])
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
  };

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <Board className="board-data"
        boards={boardData}
        // deleteBoard={deleteBoard}
        selectBoardCallback={selectBoardCallback}
      />
      <h2>Create A New Board</h2>
      <NewBoardForm
        createNewBoardCallback={createNewBoard}
        setBoardData={setBoardData}
      />
      <div className="Card-Form">
        <h2>Create a New Card</h2>
        <NewCardForm
          addNewCard={addNewCard}
          selectedBoardId={selectedBoard["boardId"]}
        />
        <div>
          <h2>Selected Board</h2>
          {selectedBoard}
        </div>
        <CardList
          cards={cardData}
          updateLike={updateLike}
          deleteCard={deleteCard}
        />

      </div>
    </div>
  );
}

export default App;