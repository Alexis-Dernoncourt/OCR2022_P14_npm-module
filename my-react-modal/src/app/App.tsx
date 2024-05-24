import React, { useEffect } from 'react';
import { ModalComponent } from '../lib';

const App = () => {
  const [showModal, setShowModal] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} displayToggleButton={false}>
        <h1>Ceci est un titre</h1>
        <p>Employee created !</p>
      </ModalComponent>
    </>
  );
};

export default App;
