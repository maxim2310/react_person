import React from 'react';
import { Person } from './Person';

const App = () => (
  <div className="App">
    <Person
      name="Misha"
      age={37}
      sex="m"
      isMarried
      partnerName="Natasha"
    />

    <Person
      name="Olya"
      sex="f"
      isMarried
      partnerName="Maksym"
    />

    <Person
      name="Alex"
      age={25}
      sex="m"
      isMarried={false}
    />
  </div>
);

export default App;
