import React from 'react'
import logo from './logo.svg';
import './App.css';
// import TescoInput from 'tcomponents/src/molecules/input'
import ModalView from './modalRenderer';

const Header = () => {
  return (
    <p>i am header</p>
  )
}

const Body = () => {
  return (
    <p>i am body</p>
  )
}

function App() {
  return (
    <div className="App">
      {/* <TescoInput /> */}
      <ModalView
      Header={Header}
      Body={Body}
      headerContainerStyle={{backgroundColor: 'red'}}
      bodyContainerStyle={{backgroundColor: 'blue'}}
      />
    </div>
  );
}

export default App;
