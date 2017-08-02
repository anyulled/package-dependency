import React from "react";
console.log('%c DEPENDENT APP! ', 'background: #222; color: #bada55');
console.info("Production:", PRODUCTION);
console.info("Version:", VERSION);
console.info("HTML5 support:", BROWSER_SUPPORTS_HTML5);
console.info("Two:", TWO);

export default class App extends React.Component {
    render() {
        return (<h2>I'm a sub header</h2>);
    }
}