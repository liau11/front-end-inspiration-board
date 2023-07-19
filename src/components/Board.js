import PropTypes from 'prop-types';
import './Board.css';


const Board = ({ boardId, title, owner, selectBoardIdCallback }) => {

    return (
        <section>
            <div id="currentBoard" onClick={() => selectBoardIdCallback([boardId, title, owner])}>
                {`${title}: ${owner}`}
            </div>
        </section>
    );
};

Board.propTypes = {
    boardId: PropTypes.number,
    title: PropTypes.string,
    owner: PropTypes.string,
    selectBoardIdCallback: PropTypes.func.isRequired,
};

export default Board;
