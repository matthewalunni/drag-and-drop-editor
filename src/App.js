import React from 'react';
import './App.css';
import Editor from './editor/Editor'




class Backend {
  all() {
    return [
      {

        id: 0,
        type: "heading",
        text: "heading 1",
        style: [
          {
            color: "black",
            fontSize: "10vh",
            textAlign: "left",
          }
        ],

      },
      {
        id: 1,
        type: "heading",
        text: "heading 2",
        style: [
          {
            color: "black",
            fontSize: "20vh",
            textAlign: "center",
          }
        ],
      },
      {
        id: 2,
        type: "heading",
        text: "heading 3",
        style: [
          {
            color: "black",
            fontSize: "30vh",
            textAlign: "right",
          }
        ],
      }

    ];
  }
}

var b = new Backend();

function App() {
  return (
    <Editor page={b.all()} />
  );
}

export default App;
