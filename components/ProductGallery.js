import React from "react";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = () => {
  const checkedColor = useSelector(state => state.productSettings.color);
  const product = useSelector(state => state.product);

  // Get sizes for selected color variant
  const variantIndex = product.variants
    .map(variant => variant.color.name)
    .indexOf(checkedColor);

  const images = useSelector(
    state => state.product.variants[variantIndex].images
  );
  const galleryItems = [];

  images.forEach(element => {
    galleryItems.push({
      original: element,
      thumbnail: element
    });
  });

  return (
    <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 text-center ml-auto lg:text-right xl:text-right'>
      <ImageGallery items={galleryItems} showPlayButton={false} />
      <style jsx global>
        {`
          @media all and (display-mode: fullscreen) {
            .image-gallery-image img {
              max-height: 100vh;
            }

            .image-gallery-slide img {
              width: auto;
            }

            .image-gallery-image {
              justify-content: center;
              display: flex;
            }
          }

          .image-gallery-thumbnail img {
            object-fit: cover;
            width: auto;
            height: auto;
          }
        `}
      </style>
    </div>
  );
};

export default ProductGallery;
