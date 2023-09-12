import { Modal } from '../Modal/Modal';
import { Component } from 'react';

import { ImageGaleryItem, ImgGallery } from './ImageGalleryItem.module';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const {
      galleryItem: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <>
        <ImageGaleryItem onClick={this.toggleModal}>
          <ImgGallery src={webformatURL} alt={tags} />
        </ImageGaleryItem>
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            closeModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}
