import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import './BoardList.css'


const BoardList = ({ boards, selectBoardIdCallback }) => {
    const allBoards = boards.map((board) => (
        <Board
            key={board.id}
            boardId={board.id}
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
            </div>
        </section>
    );
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BoardList;
