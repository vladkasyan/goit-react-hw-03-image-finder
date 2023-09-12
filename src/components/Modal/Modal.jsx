import { Component } from 'react';

import { Overlay, Modals } from './Modal.module';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressKey);
  }

  pressKey = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <Modals>
          <img src={largeImageURL} alt={alt} />
        </Modals>
      </Overlay>
    );
  }
}
