import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from './PhotoViewerComponent/PhotoViewer';
import { ImageSelector } from './ImageSelectorComponent/ImageSelector';

function App() {

  const [selected, setSelected]= useState("https://picsum.photos/id/223/1600/900.jpg");


  return (
    <div>
      <p className="h1-text">Hello World</p>
      <PhotoViewer  src={selected}/>
      <p className="h1-text">Image Selector</p>
      <ImageSelector selected={selected} setSelected={setSelected} />
    </div>
      
  );
}

export default App
