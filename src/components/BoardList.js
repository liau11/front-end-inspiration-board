import {useState} from 'react';
import PropTypes from 'prop-types';
import './Board'
import './NewBoardForm.js';


const BoardList = ({ boards }) => {
    return (
            <section>
                <div >
                {/* <h2>Boards</h2> */}
                <div>
                    <ol className="board-list-container">
                        {boards.map((board) => (
                            <li className="board_list-content">{board.title} - {board.owner_name}</li>
                        ))}
                    </ol>
                </div>
                    <h2>Selected Board</h2>
                    <div className="selected-board-section">
                    <p>Title: Owner</p>
                    </div>
                <div className="delete-button">
                    <button>Delete All Boards</button>
                </div>
                </div>
            </section>
    )
};

BoardList.propTypes = {
    deleteAllBoards: PropTypes.func.isRequired,

}

export default BoardList;

