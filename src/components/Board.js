import PropTypes from 'prop-types';
import './Board.css';


const Board = ({ boardId, title, owner, selectBoardIdCallback }) => {

    return (
        <section>
            <div className='currentBoard' onClick={() => selectBoardIdCallback({ "boardId": { boardId }, "title": { title }, "owner": { owner } })}>
                {`${title}: ${owner}`}
            </div>
            {/* <h2>Selected Board</h2> */}
            {/* <div className="selected-board-section">
                <p>Title: Owner</p>
            </div>  */}
        </section>
    );

}

Board.propTypes = {
    boardId: PropTypes.number,
    title: PropTypes.string,
    owner: PropTypes.string
};

export default Board;