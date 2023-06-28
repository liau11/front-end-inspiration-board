

const Board = ({ boardData }) => {

    return (
        <section>
            <div className="board">
                <ol>
                    {boardData.map((board) => (
                        <li>{board.title}</li>
                    ))}
                </ol>
            </div>
            <div>
                <h2>Selected Board</h2>
            </div>
        </section>

    )
};



export default Board;