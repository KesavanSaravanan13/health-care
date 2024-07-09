import './Submit.css';

let n;
let m;
const Submit = (props) => {
    return (
        <div className='m-0 p-0 row justify-content-end' id='submitBtn' onClick={
            () => {
                alert(`Your changes have SAVED!!!`);
                var inputs = document.querySelectorAll("#formEle input");

                inputs.forEach(function (input) {
                    input.disabled = true;
                });
                n=props.name;
                m=props.email

                document.getElementById("submitBtn").style.display='none';
               
            }
        }>
            <button type="buttton" value="Save" className="m-0 p-2 saveBtn" >Save</button>
        </div>
    );
}

function submit(){

    return {n,m};
}

export default Submit;