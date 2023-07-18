import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/BoardList';
import CardList from './components/CardList';
import myGif from './myGif.gif';
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
  const [selectedBoard, setSelectedBoard] = useState([null, "", ""])
  const [userSelectedBoard, setUserSelectedBoard] = useState(false)

  // here is where onclick send back boardId info
  const selectBoardIdCallback = (selectedBoard) => {
    setSelectedBoard(selectedBoard)
    setUserSelectedBoard(selectedBoard ? true : false)
  }

  const selectedBoardName = userSelectedBoard ? selectedBoard[1] : "Select a Board from the Board List!"

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

  const getCardsInBoard = (boardId) => {
    //route boards/<board_id>/cards
    axios.get(`${API_URL}/boards/${boardId}/cards`)
      .then((response) => {
        const initialCardsInBoardData = [];
        response.data.forEach((card) => {
          initialCardsInBoardData.push(card);
        });
        setCardData(initialCardsInBoardData)
      })
      .catch((error) => {
        console.log("error: ", error);
      })
  }
  useEffect(getCardsInBoard, []);

  const deleteBoard = (boardId) => {
    axios.delete(`${API_URL}/boards/${boardId}`)
      .then((response) => {
        const filteredUpdatedData = boardData.filter(board => board.id !== boardId);
        setBoardData(filteredUpdatedData);
        console.log('Your board has been successfully deleted!')
      })
      .catch((error) => {
        console.log('error', error, error.response);
      });
  };

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
      <img className="image" src={myGif} alt="My-Jojo-Banner" />
      <h1>Inspiration Board</h1>
      <h2>BOARDS</h2>
      <Board
        className="board-data"
        boards={boardData}
        selectBoardIdCallback={selectBoardIdCallback}
      />
      <div>
        <h2>CREATE A NEW BOARD</h2>
        <NewBoardForm
          createNewBoardCallback={createNewBoard}
          setBoardData={setBoardData}
        />
      </div>
      <div>
        <h2>SELECTED BOARD</h2>
        {selectedBoardName}
      </div>
      <div className="Card-Form">
        {userSelectedBoard ? (
          <div>
            <h2>CREATE A NEW CARD</h2>
            <NewCardForm
              addNewCard={addNewCard}
              selectedBoardId={selectedBoard[0]}
            />
            <CardList
              cards={cardData}
              // pass in all cards from selected board 
              updateLike={updateLike}
              deleteCard={deleteCard}
              selectedBoardName={selectedBoardName}
              selectedBoardId={selectedBoard[0]}
            />
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default App;