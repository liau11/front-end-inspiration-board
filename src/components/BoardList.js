import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import NewBoardForm from './NewBoardForm';

const BoardList = ({ boards, deleteAllBoards, selectBoardIdCallback }) => {
    const allBoards = boards.map((board) => (
        <Board
            key={board.board_id}
            boardId={board.board_id}
            owner={board.owner}
            title={board.title}
            selectBoardIdCallback={selectBoardIdCallback}
        />
    ));

    return (
        <section>
            <div>
                <div>
                    <ol className="board-list-container">
                        {allBoards}
                    </ol>
                </div>
                {/* <div className="delete-button">
                    <button onClick={deleteAllBoards}>Delete All Boards</button>
                </div> */}
            </div>
        </section>
    );
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteAllBoards: PropTypes.func.isRequired,
};

export default BoardList;
