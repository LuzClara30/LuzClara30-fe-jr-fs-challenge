import toast  from 'react-hot-toast';//library to display "toast" type notifications

export const notifyError = (msg) => toast.error(msg);//feature to show error notifications
// msg is the message that will be displayed in the notification