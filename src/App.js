import { useRef, useState, useEffect } from 'react';
import './App.css';
import CommandOutput from './CommandOutput';

const App = () => {
  const [ inputText, setInputText ] = useState('')
  const [ command, setCommand ] = useState('')
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  console.log(inputText)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setCommand(inputText)
      setInputText('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }

  return (
    <div className='App' onClick={() => inputRef.current?.focus()}>
      <span className='header-text'>Sheetal Shankar Portfolio. [Version: 1.0.0]</span>
      <span className='body-text'>(c) All rights reserved.</span>
      <span className='body-text'>Type 'start' to proceed</span>
      <div className='header-text'>
        <span>C:\Users\Administrator\sheetal-shankar-portfolio&gt;</span> 
        <span className='input-text'>{inputText}</span>
        <span className='terminal-cursor'>_</span>
        <input
          ref={inputRef}
          id='input-field'
          className='hidden-input' 
          type='text'
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
            setCommand('')
          }}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
      {command &&
        <CommandOutput
          command={command}
        />
      }
    </div>
  );
}

export default App;