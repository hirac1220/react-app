import React from 'react';
import Booklist from './components/Booklist';

function App() {
  const languages = ['React', 'Vue', 'Angular'];
  return (
    <div className="App">
      <h1>react app</h1>
      <Booklist
        language={languages[0]}
      />
      <Booklist
        language={languages[1]}
      />
      <Booklist
        language={languages[2]}
      />
    </div>
  );
}

export default App;
