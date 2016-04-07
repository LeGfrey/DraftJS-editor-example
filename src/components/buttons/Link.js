import React from 'react';
import Modal from 'react-modal';
import {RichUtils, Entity} from 'draft-js';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false};
    this.openModal = this.openModal.bind(this);
    this.addLink = this.addLink.bind(this);
    this.props.editor.addToDecorators(this.findLinkEntities, this.createLinkEntity());
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  addLink(event) {
    event.preventDefault();

    const hrefValue = this.refs.hrefValue.value;
    const editorState = this.props.editorState;
    const link = Entity.create('LINK', 'MUTABLE', {url: hrefValue});
    this.props.editor.onChange(RichUtils.toggleLink(editorState, editorState.getSelection(), link));
    this.setState({modalOpen: false});
  }

  createLinkEntity() {
    const editor = this.props.editor;
    const Link = (props) => {
      const {url} = Entity.get(props.entityKey).getData();
      return (
        <a href={url} styles={editor.loadStyles().link}>
          {props.children}
        </a>
      );
    }
    return Link;
  }

  findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          Entity.get(entityKey).getType() === 'LINK'
        );
      },
      callback
    );
  }

  render() {
    return(
      <div>
        <button onClick={this.openModal} className="editor-button"><i className="fa fa-link"></i></button>
        <Modal isOpen={this.state.modalOpen}>
          <form onSubmit={this.addLink} className="link-form">
            <label htmlFor="hrefValue">Href: </label>
            <input id="hrefValue" ref="hrefValue" type="text"></input>
            <input type="submit"></input>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Link;