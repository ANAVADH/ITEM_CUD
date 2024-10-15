
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = () => {
  return <ToastContainer position="top-right" autoClose={3000} hideProgressBar />;
};


export const showToast = (message, success = true) => {
  success ? toast.success(message) : toast.error(message);
};

export default ToastMessage;
