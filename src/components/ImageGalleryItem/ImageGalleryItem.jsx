import { Modal } from '../Modal/Modal';
import { Component } from 'react';

import { ImageGaleryItem, ImgGallery } from './ImageGalleryItem.module';

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    }

    toggleModal = () => {
        this.setState(({ isModalOpen }) => ({isModalOpen: !isModalOpen}))
    }

    render() {
        const {
            galleryItem: { webURL, largeImageURL, alt },
        } = this.props;

        return(
        <>
            <ImageGaleryItem onClick={this.toggleModal}>
                <ImgGallery src={webURL} alt={alt} />
            </ImageGaleryItem>
                {this.state.isModalOpen && (
                    <Modal
                    largeImageURL={largeImageURL}
                    alt={alt}
                    closeModal={this.toggleModal}
                    />
            )}
        </>
        )
    }
}