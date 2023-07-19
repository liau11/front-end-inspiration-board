import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/BoardList';
import CardList from './components/CardList';
import myGif from './myGif.gif';
import { ConstructionOutlined } from '@mui/icons-material';
import BoardList from './components/BoardList';

function App() {

  const [boardData, setBoardData] = useState([])
  const [cardData, setCardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState([null, "", ""])
  const [userSelectedBoard, setUserSelectedBoard] = useState(false)
  console.log("Board Data", boardData)


  // here is where onclick send back boardId info
  // value of selectedboard?
  const selectBoardIdCallback = (selectedBoard) => {
    setSelectedBoard(selectedBoard)
    console.log("selected Board in call back:", selectedBoard)
    setUserSelectedBoard(selectedBoard ? true : false)
    getCardsInBoard(selectedBoard)
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
    console.log("New Board Form Data: ", newBoardData)
    axios
      .post(`${API_URL}/boards`, newBoardData)
      .then(() => {
        populateBoards();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getCardsInBoard = (selectedBoard) => {
    //route boards/<board_id>/cards
    console.log(selectedBoard)
    axios.get(`${API_URL}/boards/${selectedBoard[0]}/cards`)
      .then((response) => {
        console.log(selectedBoard)
        const cardsInBoardData = [];
        response.data.forEach((card) => {
          cardsInBoardData.push(card);
        });
        setCardData(cardsInBoardData)
      })
      .catch((error) => {
        console.log("error: ", error);
      })
  }


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
    axios.delete(`${API_URL}/cards/${cardId}`)
      .then((response) => {
        const filteredUpdatedData = cardData.filter(card => card.id !== cardId);
        setCardData(filteredUpdatedData);
      })
      .catch((error) => {
        console.log('error', error, error.response);
      });
  };

  const updateLike = (cardId, likeCount) => {
    const updatedData = cardData.map(card => {
      if (card.id === cardId) {
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
      <div className='top-grid grid'>
        <div>
          <h2>Boards</h2>
          <BoardList
            className="board-data"
            boards={boardData}
            selectBoardIdCallback={selectBoardIdCallback}
          />
        </div>
        <div>
          <h2>Create A New Board</h2>
          <NewBoardForm
            createNewBoardCallback={createNewBoard}
            setBoardData={setBoardData}
          />
        </div>
      </div>
      <div className='bottom-grid grid'>
        <div>
          <h2>Selected Board</h2>
          {selectedBoardName}
        </div>
        <div>
          <div className="Card-Form">
            {userSelectedBoard ? (
              <div>
                <h2>Create a New Card</h2>
                <NewCardForm
                  addNewCard={addNewCard}
                  selectedBoardId={selectedBoard[0]}
                />
              </div>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
      {userSelectedBoard ? (
        <div>
          <CardList
            cards={cardData}
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
  );
}

export default App;