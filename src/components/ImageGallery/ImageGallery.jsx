import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGallerys } from '../ImageGallery/ImageGallery.module';

export const ImageGallery = ({ galleryItems }) => {
  return (
    <ImageGallerys>
      {galleryItems.map(galleryItem => {
        return (
          <ImageGalleryItem key={galleryItem.id} galleryItem={galleryItem} />
        );
      })}
    </ImageGallerys>
  );
};
