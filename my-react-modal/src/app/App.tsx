import { ModalComponent } from '../lib';

const App = () => (
  <>
    <ModalComponent>
      <h1>Ceci est un long titre. Ceci est un long titre. Ceci est un long titre.</h1>
      <p>coucou test</p>
      <button onClick={() => console.log('test')}>test</button>
    </ModalComponent>
  </>
);

export default App;
