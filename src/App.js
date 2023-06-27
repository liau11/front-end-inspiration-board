import logo from './logo.svg';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';


const sampleBoardData = [{ 'title': 'HIIIII', 'owner_name': 'Lily' }, { 'title': 'Byeee', 'owner_name': 'Niambi' }]
const newSampleCard = [{ 'message': 'The bright red fox jumps over the fence.' }]

const createNewBoard = (newBoard) => {
  sampleBoardData.push(newBoard)
  console.log(sampleBoardData)
}

const createNewCard = (newCard) => {
  newSampleCard.push(newCard)
  console.log(newSampleCard)
}


function App() {
  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <Board sampleBoardData={sampleBoardData} />
      <h2>Create A New Board</h2>
      <NewBoardForm createNewBoard={createNewBoard} />
      <h2>Boards</h2>
      <h2>Create A New Board</h2>
      <div className="Card-Form">
        <h2>Create a New Card</h2>
        <NewCardForm createNewCard={createNewCard} />
      </div>
    </div>
  );
}

export default App;
