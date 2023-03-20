import './App.css';
import React, { useState } from "react";
import { Toggler } from "./components/viewToggler";
import { Section } from "./components/section";
import { ViewSection } from "./components/viewSection";


function App() {
  const [viewMode, modeChange] = useState(false)
  const [text, updateText] = useState([["", "", "", ""], ["", "", "", ""], ["", "", "", ""]])


  const isViewMode = (bool) => {
    if(bool === true){
      modeChange(true)
    }else{
      modeChange(false)
    }
  }
    


  return (
    <div className="App">
      {(!viewMode) ? 
        <div className="main-container">
            <Toggler changeViewMode={isViewMode}/>
            <div className="page">
                <div className="background-container">
                    <h1 className="title">CV-Maker</h1>
                </div>
                <Section header="General Information" name1="First Name" name2="Last Name" name3="Email" name4="Phone Number" textState={text} textUpdater={updateText}/>
                <Section header="Educational Experience" name1="School Name" name2="Title of Study" type2="date" textState={text} textUpdater={updateText}/> 
                <Section header="Practical Experience" name1="Company Name" name2="Position"  type2="date" textState={text} textUpdater={updateText}/>  
            </div>
        </div> 
        
        : 

        <div className="main-container">
            <Toggler changeViewMode={isViewMode}/>
            <div className="page">
                <div className="background-container">
                    <h1 className="title">CV-Maker</h1>
                </div>
                <ViewSection header="General Information" textState={text}/>
                <ViewSection header="Educational Experience" textState={text}/>
                <ViewSection header="Practical Experience" textState={text}/>
            </div>
        </div>
      }
    </div>
  
  );
}

export default App;
