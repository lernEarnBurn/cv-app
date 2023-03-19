import './App.css';
import React, { useState } from "react";
import { Toggler } from "./components/viewToggler";
import { Section } from "./components/section";
import { ViewSection } from "./components/viewSection";


function App() {
  //for viewMode change
  const [viewMode, modeChange] = useState(false)

  const isViewMode = () => {
    if(viewMode === true){
      modeChange(false)
    }else{
      modeChange(true)
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
                <Section header="General Information" name1="First Name" name2="Last Name" name3="Email" name4="Phone Number"/>
                <Section header="Educational Experience" name1="School Name" name2="Title of Study" type2="date"/> 
                <Section header="Practical Experience" name1="Company Name" name2="Position"  type2="date"/>  
            </div>
        </div> 
        
        :
        <div className="main-container">
            <Toggler changeViewMode={isViewMode}/>
            <div className="page">
                <div className="background-container">
                    <h1 className="title">CV-Maker</h1>
                </div>
                <ViewSection header="General Information" />
                <ViewSection header="Educational Experience" />
                <ViewSection header="Practical Experience"/>
            </div>
        </div>
      }
    </div>
  
  );
}

export default App;
