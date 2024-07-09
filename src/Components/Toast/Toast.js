import { toast } from "react-toastify";

const Props = (props) => {
  const { message } = props;

  const notify = () => {
    toast(message,{autoClose: 3000});
  }
  return (
    <div className='m-0 p-0'>
      notify();
    </div>
  );
}

export default Props; 