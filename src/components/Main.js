require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TextEditor from './texteditor';


class AppComponent extends React.Component {
  render() {
    return (
      <div id="react-app">
        <TextEditor></TextEditor>
      </div>
    );
  }
}

export default AppComponent;
