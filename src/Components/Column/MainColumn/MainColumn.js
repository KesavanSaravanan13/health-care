import ActiveBar from '../ActiveBar/ActiveBar';
import Forms from '../Forms/Forms';
import TopRow from '../TopRow/TopRow';
import './MainColumn.css';

const MainColumn = () => {
    return(
        <div className="row m-0 p-2 p-md-4">
            <div className="row p-0 m-0 justify-content-end FirstRow">
                <TopRow/>
            </div>
            <div className="row p-0 py-2 pt-4 m-0 profile">Profile</div>
            <div className="row p-0 py-2 m-0 thirdrow">
                <ActiveBar></ActiveBar>
            </div>
            <div className="row p-0 my-3 m-0 fourthrow">
                <Forms></Forms>
            </div>
        </div>
    );
};

export default MainColumn;