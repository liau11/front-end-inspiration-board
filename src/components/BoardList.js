import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import NewBoardForm from './NewBoardForm';
import './BoardList.css'


const DeleteBoardButton = ({ message, onClick }) => {
    const handleClick = () => {
        alert(message)
        onClick();
    };
        return (
            <button onClick={handleClick}>Delete Board</button>
        );
};

const BoardList = ({ boards, deleteBoard, selectBoardIdCallback }) => {
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
                <div className="delete-button">
                    <DeleteBoardButton  message="Your board has been deleted!" onClick={deleteBoard}/>
                </div>
            </div>
        </section>
    );
};

BoardList.propTypes = {
boards: PropTypes.arrayOf(PropTypes.object).isRequired,
deleteAllBoards: PropTypes.func.isRequired,
};

export default BoardList;
