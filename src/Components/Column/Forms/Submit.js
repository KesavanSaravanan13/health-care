import './Submit.css';

const Submit = () => {
    return (
        <div className='m-0 p-0 row justify-content-end' id='submitBtn' onClick={
            () => {
                alert(`Your changes have SAVED!!!`);
                var inputs = document.querySelectorAll("#formEle input");

                inputs.forEach(function (input) {
                    input.disabled = true;
                });
                
                document.getElementById("submitBtn").style.display='none';
               
            }
        }>
            <button type="buttton" value="Save" className="m-0 p-2 saveBtn" >Save</button>
        </div>
    );
}

export default Submit;