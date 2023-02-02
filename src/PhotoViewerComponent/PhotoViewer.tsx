import React from "react";  // import React (to provide access to TSX)
import "./PhotoViewer.css";
function PhotoViewer(props: string) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div>               
            
          <img src={props.src} className="displayPhoto" /> 

        </div>
    );
}

export {PhotoViewer};