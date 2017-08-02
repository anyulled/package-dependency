import React from "react";
import {render} from "react-dom";
import App from "./App";
import {DependentApp} from "dependentapp";

const MOUNT_NODE = document.getElementsByTagName("body")[0];
console.log('%c MAIN APP! ', 'background: #222; color: #bada55');
console.info("Production:", PRODUCTION);
console.info("Version:", VERSION);
console.info("HTML5 support:", BROWSER_SUPPORTS_HTML5);
console.info("Two:", TWO);
render(<div>
    <h1>Main App:</h1>
    <App/>
    <h2>Dependent App</h2>
    <DependentApp/>
</div>, MOUNT_NODE);