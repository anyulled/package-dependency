import React from "react";
import {render} from "react-dom";
import DependentApp from "./DependentApp";

const MOUNT_NODE = document.getElementsByTagName("body")[0];
console.info("Production:", PRODUCTION);
console.info("Version:", VERSION);
console.info("HTML5 support:", BROWSER_SUPPORTS_HTML5);
console.info("Two:", TWO);
render(<DependentApp/>, MOUNT_NODE);
