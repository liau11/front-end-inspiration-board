import PropTypes from 'prop-types';
import './Board.css';


const Board = ({board_id , title, owner_name}) => {
    console.log(title, owner_name) 

    return (
        <section>
            <div>
                    <ul>
                        <li>
                            <a href="#">
                            <h2>Title</h2>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <h2>Owner</h2>
                        </a>
                        </li>
                    </ul>
                / >
            </div>
        </section>
    );

}

Board.propTypes = {
    title: PropTypes.string,
    owner_name: PropTypes.string
};

export default Board;