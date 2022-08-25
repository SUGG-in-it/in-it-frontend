import toast from 'react-hot-toast';

const errorToast = (msg: string) =>
  toast(msg, {
    duration: 4000,
    style: {
      backgroundColor: '#ffcdd2',
      color: '#ef5350',
      fontWeight: 'bold',
    },
    icon: '🚫',
  });

const warningToast = (msg: string) =>
  toast(msg, {
    duration: 4000,
    style: {
      backgroundColor: '#fff9c4',
      color: '#ffb300',
      fontWeight: 'bold',
    },
    icon: '⚠️',
  });

const successToast = (msg: string) =>
  toast(msg, {
    duration: 4000,
    style: {
      backgroundColor: '#c8e6c9',
      color: '#4caf50',
      fontWeight: 'bold',
    },
    icon: '🥳',
  });

export { errorToast, warningToast, successToast };
