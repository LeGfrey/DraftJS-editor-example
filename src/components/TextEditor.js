import React from 'react';
import {Editor, EditorState, RichUtils, CompositeDecorator} from 'draft-js';

import Toolbar from './toolbar';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);

    this.styleMap = {};
    this.decorators = [];

    const decorator = new CompositeDecorator(this.decorators);
    this.state = {editorState: EditorState.createEmpty(decorator)};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  render() {
    const {editorState} = this.state;
    return (
      <div className="editor-instance">
        <Toolbar styleMap={this.styleMap} editor={this} editorState={editorState}></Toolbar>
        <div className="editor-edition">
          <Editor customStyleMap={this.styleMap} editorState={editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} spellCheck={true} />
        </div>
      </div>
    );
  }

  loadStyles() {
    return {
      link: {
        color: '#3b5998',
        textDecoration: 'underline'
      }
    }
  }

  addToStyleMap(key, value) {
    this.styleMap[key] = value;
  }

  addToDecorators(strategy, component) {
    this.decorators.push({
        strategy: strategy,
        component: component
    });

    const decorator = new CompositeDecorator(this.decorators);
    this.onChange(EditorState.set(this.state.editorState, {decorator: decorator}));
  }
}

export default TextEditor;