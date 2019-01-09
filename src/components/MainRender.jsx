import React from "react";
import Names from "./Names.jsx";
import Folder from "./Folder.jsx";

class MainRender extends React.Component{

    render(){
        return(
            <div className="main-container">
                <Names first="Andrey" last ="Shtukenberg"/>
                <Folder/>
            </div>
        );
    }
}

export default MainRender;