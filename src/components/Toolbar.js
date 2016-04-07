import React from 'react';

import Bold from './buttons/bold';
import Italic from './buttons/italic';
import Underline from './buttons/underline';
import Styles from './buttons/styles';
import Size from './buttons/size';
import Align from './buttons/align';
import Link from './buttons/link';


class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const editorState = this.props.editorState;
    const editor = this.props.editor;

    return (
      <ul className="toolbar">
        <li><Bold editor={editor} editorState={editorState}></Bold></li>
        <li><Italic editor={editor} editorState={editorState}></Italic></li>
        <li><Underline editor={editor} editorState={editorState}></Underline></li>
        <li><Styles editor={editor} editorState={editorState}></Styles></li>
        <li><Size editor={editor} editorState={editorState}></Size></li>
        <li><Align editor={editor} editorState={editorState}></Align></li>
        <li><Link editor={editor} editorState={editorState}></Link></li>
      </ul>
    );
  }
}

export default Toolbar;