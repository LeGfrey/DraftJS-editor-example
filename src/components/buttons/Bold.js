import React from 'react';
import {RichUtils} from 'draft-js';

class Bold extends React.Component {
  constructor(props) {
    super(props);
    this.setBold = this.setBold.bind(this);
  }

  render() {
    return <button onClick={this.setBold} className="editor-button"><i className="fa fa-bold"></i></button>;
  }

  setBold() {
    const editorState = this.props.editorState;
    this.props.editor.onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  }
}

export default Bold;