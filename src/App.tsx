import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from './PhotoViewerComponent/PhotoViewer';
import { ImageSelector } from './ImageSelectorComponent/ImageSelector';

function App() {

  const [selected, setSelected]= useState("https://picsum.photos/id/223/1600/900.jpg");


  return (
    <div id="whole-page">
      <div id="main-photo">
      <p id="photo-viewer-title">Hello world</p>
      <PhotoViewer  src={selected}/>
      </div>
      <div id="photo-grid">
      <p id="image-selector-title">Image Selector {selected}</p>
      <ImageSelector selected={selected} setSelected={setSelected} />
      </div>
    </div>
      
  );
}

export default App
