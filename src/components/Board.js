import PropTypes from 'prop-types';
import './Board.css';
import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Board = ({ boardId, title, owner, selectBoardIdCallback , deleteBoard}) => {
    const handleDelete = () => {
        deleteBoard(boardId);
    };

    const DeleteBoardButton = ({ message, onClick }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = () => {
        if (!isDeleting) {
        const confirmDelete = window.confirm(message);
        if (confirmDelete) {
            setIsDeleting(true);
            onClick();
        }
        }
    };

    return (
        <button onClick={handleClick}>
        {isDeleting ? 'Deleting...' : ''}
        <DeleteOutlineOutlinedIcon />
        </button>
    );
    };

    return (
    <section>
        <div id="currentBoard" onClick={() => selectBoardIdCallback([boardId, title, owner])}>
        {`${title}: ${owner}`}
        </div>
        <div className="delete-button">
        <DeleteBoardButton message="You are deleting a board, are you sure?" onClick={handleDelete} />
        </div>
    </section>
    );
};

Board.propTypes = {
    boardId: PropTypes.number,
    title: PropTypes.string,
    owner: PropTypes.string,
    selectBoardIdCallback: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
};

export default Board;
// return (
//     <section>
//         <div id='currentBoard' onClick={() => selectBoardIdCallback([boardId, title, owner])} >
//             {`${title}: ${owner}`}
//         </div>
//         <button onClick={handleClick}>
//             {isDeleting ? 'Deleting': 'Delete Board'}
//         </button>
//         <div className="delete-button">
//             <DeleteBoardButton message="Your board has been deleted!" onClick={handleDelete} />
//         </div>
//     </section >
// );

// }