import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from './PhotoViewerComponent/PhotoViewer';
import { ImageSelector } from './ImageSelectorComponent/ImageSelector';

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
} */
function App() {

  const [selected, setSelected]= useState("https://picsum.photos/id/223/1600/900.jpg");


  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer  src={selected}/>
      <h1>Image Selector</h1>
      <ImageSelector selected={selected} setSelected={setSelected} />
    </div>
      
  );
}

export default App
