import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import Editor from './Editor';
import Previewer from './Previewer';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './editor.css';
import './previewer.css';

const title = ReactDOM.createRoot(document.getElementById('title'));
const editor = ReactDOM.createRoot(document.getElementById('editor'));
const previewer = ReactDOM.createRoot(document.getElementById('previewer'));

title.render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>
);

editor.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);

previewer.render(
  <React.StrictMode>
    <Previewer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();