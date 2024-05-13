import React from 'react';
import './modal.css';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

type ModalProps = {
  showModal: boolean;
  setShowModal: () => void;
  modalContainerClass?: string;
  children: React.ReactNode;
};
function Modal({ showModal, setShowModal, modalContainerClass, children }: ModalProps) {
  const ref = React.useRef(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
    const el = ref.current as HTMLDivElement | null;
    const target = e.target as HTMLDivElement | null;
    if (!el?.contains(target)) {
      setShowModal();
    }
  };

  return (
    <FocusTrap active={showModal} focusTrapOptions={{ initialFocus: '.modal-close-btn' }}>
      <div className='modal-wrapper' onClick={(e) => closeModal(e as React.MouseEvent<HTMLDivElement, MouseEvent>)}>
        <div className={modalContainerClass} ref={ref}>
          {children}
          <button className='modal-close-btn' onClick={() => setShowModal()}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
              {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
            </svg>
            <span className='sr-only'>Close the modal</span>
          </button>
        </div>
      </div>
    </FocusTrap>
  );
}
export default function ModalComponent({
  toggleButtonText = 'Open modal',
  toggleButtonClass = 'toggle-modal-btn',
  modalContainerClass = 'modal-container',
  children,
}: {
  toggleButtonText?: string;
  toggleButtonClass?: string;
  modalContainerClass?: string;
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button className={toggleButtonClass} onClick={() => setShowModal(true)}>
        {toggleButtonText}
      </button>
      {showModal &&
        createPortal(
          <Modal showModal={showModal} setShowModal={() => setShowModal(false)} modalContainerClass={modalContainerClass} children={children} />,
          document.body
        )}
    </>
  );
}
