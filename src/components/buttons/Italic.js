import React from 'react';
import {RichUtils} from 'draft-js';

class Italic extends React.Component {
  constructor(props) {
    super(props);
    this.setItalic = this.setItalic.bind(this);
  }

  render() {
    return <button onClick={this.setItalic} className="editor-button"><i className="fa fa-italic"></i></button>;
  }

  setItalic() {
    const editorState = this.props.editorState;
    this.props.editor.onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  }
}

export default Italic;