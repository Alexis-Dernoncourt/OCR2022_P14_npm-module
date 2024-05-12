import React from 'react';
import './modal.css';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

function Modal({ setShowModal }: any) {
  const ref = React.useRef(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
    const el = ref.current as HTMLDivElement | null;
    const target = e.target as HTMLDivElement | null;
    if (!el?.contains(target)) {
      setShowModal();
    }
  };

  return (
    <FocusTrap active>
      <div className='modal-wrapper' onClick={(e) => closeModal(e as React.MouseEvent<HTMLDivElement, MouseEvent>)}>
        <div className='modal-container' ref={ref}>
          <h1>Modal</h1>
          <button className='modal-btn' onClick={() => setShowModal()}>
            Close
          </button>
        </div>
      </div>
    </FocusTrap>
  );
}
export default function ModalComponent() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Click to toggle modal</button>
      {showModal && createPortal(<Modal setShowModal={() => setShowModal(false)} />, document.body)}
    </>
  );
}
