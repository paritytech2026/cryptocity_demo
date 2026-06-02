import { Toast, ToastHeader, ToastBody } from 'reactstrap';

function ErrorToast({ isOpen, message, onClose }) {
  return (
    <div style={{ position: 'fixed', top: '1.25rem', right: '1.25rem', zIndex: 9999 }}>
      <Toast isOpen={isOpen}>
        <ToastHeader icon="danger" toggle={onClose}>
          Error
        </ToastHeader>
        <ToastBody>{message}</ToastBody>
      </Toast>
    </div>
  );
}

export default ErrorToast;
