import toast from 'react-hot-toast';

const errorToast = (msg: string) =>
  toast(msg, {
    duration: 4000,
    style: {
      backgroundColor: '#ffcdd2',
      color: '#ef5350',
      fontWeight: '400',
      fontSize: '0.9rem',
    },
    icon: '🚫',
  });

const warningToast = (msg: string) =>
  toast(msg, {
    duration: 4000,
    style: {
      backgroundColor: '#fff9c4',
      color: '#ffb300',
      fontWeight: '400',
      fontSize: '0.9rem',
    },
    icon: '⚠️',
  });

const successToast = (msg: string) =>
  toast(msg, {
    duration: 4000,
    style: {
      backgroundColor: '#c8e6c9',
      color: '#4caf50',
      fontWeight: '400',
      fontSize: '0.9rem',
    },
    icon: '🥳',
  });

export { errorToast, warningToast, successToast };
