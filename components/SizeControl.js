import React from "react";
import { connect } from "react-redux";
import { setSize } from "../actions";

const SizeControl = props => {
  const { checkedColor, checkedSize, product, setSize } = props;

  // Get sizes for selected color variant
  const variantIndex = product.variants
    .map(variant => variant.color.name)
    .indexOf(checkedColor);

  const sizes = product.variants[variantIndex].subVariants.map(
    subVar => subVar.size
  );

  return (
    <React.Fragment>
      <span className='block uppercase text-xs font-normal text-gray-700'>
        {`Talle: ${checkedSize || ""}`}
      </span>
      <div className='flex overflow-hidden text-xs mt-2'>
        {sizes.map(size => {
          return (
            <label key={`lbl-${size}`}>
              <input
                className='hidden'
                type='radio'
                name='size'
                onChange={event => setSize(event.target.value)}
                value={size}
                checked={size === checkedSize}
              />
              <div className='inline-block relative w-8 h-8 mr-3 cursor-pointer'>
                <span className='spanSquare inline-flex justify-center items-center border-2 border-gray text-gray-700 hover:border-pink-400 hover:text-pink-400 block absolute w-8 h-8 top-1/2 left-1/2'>
                  {size}
                </span>
              </div>
            </label>
          );
        })}
      </div>
      <style jsx global>
        {`
          .spanSquare {
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            transition: ease 0.3s;
          }

          input[type="radio"]:checked + div .spanSquare {
            color: #f687b3;
            border-color: #f687b3;
          }
        `}
      </style>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setSize
};

const mapStateToProps = state => {
  return {
    checkedSize: state.productSettings.size,
    checkedColor: state.productSettings.color,
    product: state.product
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SizeControl);
