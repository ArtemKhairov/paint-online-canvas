import Canvas from "./components/Canvas";
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import "./styles/app.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes as Switch } from "react-router-dom";
import { Navigate as Redirect } from "react-router-dom";
import React, { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route
            path="/f43"
            render={()=>{

            
              <>
                <Toolbar />
                <SettingBar />
                <Canvas />
              </>
              }
            }
          ></Route>
          {/* <Redirect to={`f${(+new Date()).toString(16)}`} /> */}
        </Switch>
        {/* <Redirect to={"4"}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
