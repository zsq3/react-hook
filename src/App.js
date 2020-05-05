import React from 'react';
import Ueffect from './Components/Ueffect'
import Ustate from './Components/Ustate'
import Uref from './Components/Uref'
import Umemo from './Components/Umemo'
import { Tabs } from 'element-react'

import 'element-theme-default';
import './App.css';


function App() {
  return (
    <div className="App">
        <Tabs activeName="1">
            <Tabs.Pane label="测试useState" name="1">
                <Ustate></Ustate>
            </Tabs.Pane>
            <Tabs.Pane label="测试useEffect" name="2">
                <Ueffect></Ueffect>
            </Tabs.Pane>
            <Tabs.Pane label="测试useRef" name="3">
                <Uref></Uref>
            </Tabs.Pane>
            <Tabs.Pane label="测试useMemo" name="4">
                <Umemo></Umemo>
            </Tabs.Pane>
            <Tabs.Pane label="测试useContext" name="5">
                这个目前感觉意义不大，先不看了。。
            </Tabs.Pane>
        </Tabs>
    </div>
  );
}

export default App;
