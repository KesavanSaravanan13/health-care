import Forms from '../Forms/Forms';
import TopRow from '../TopRow/TopRow';
import './MainColumn.css';

const MainColumn = () => {
    return(
        <div className="row m-0 p-2 p-md-4">
            <div className="row p-0 m-0 ">
                <Forms></Forms>
            </div>
        </div>
    );
};

export default MainColumn;