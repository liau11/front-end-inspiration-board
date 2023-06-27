

const Board = ({ sampleBoardData }) => {
    return (
        <ol>
            {sampleBoardData.map((board) => (
                <li>{board.title}</li>
            ))}
        </ol>
    )
};



export default Board;