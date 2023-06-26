import logo from './logo.svg';
import './App.css';
import NewBoardForm from './components/NewBoardForm';


const sampleData = [{ 'title': 'HIIIII', 'owner_name': 'Lily' }, { 'title': 'Byeee', 'owner_name': 'Niambi' }]

const createNewBoard = (newBoard) => {
  sampleData.push(newBoard)
  console.log(sampleData)
}



function App() {
  return (
    <div className="App">
      <NewBoardForm createNewBoard={createNewBoard} />
    </div>
  );
}

export default App;
