import React from "react";
import { connect } from "react-redux";
import { setQuantity, setSize } from "../actions";

const QtyControl = props => {
  const {
    checkedColor,
    checkedSize,
    selectedQty,
    product,
    setQuantity
  } = props;

  // Get sizes for selected color variant
  const variantIndex = product.variants
    .map(variant => variant.color.name)
    .indexOf(checkedColor);

  let subVarIndex = product.variants[variantIndex].subVariants
    .map(subVar => subVar.size)
    .indexOf(checkedSize);

  const stock =
    product.variants[variantIndex].subVariants[subVarIndex].quantity;

  const handleAddQty = event => {
    selectedQty < stock && setQuantity(selectedQty + 1);
  };

  const handleReduceQty = event => {
    selectedQty > 0 && setQuantity(selectedQty - 1);
  };

  return (
    <div className='block my-3'>
      <button
        type='button'
        className='bg-white text-sm hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:font-bold text-gray-800 font-bold py-1 px-3 border-2 border-gray-600'
        onClick={handleReduceQty}
      >
        <span>-</span>
      </button>
      <button className='inline-flex cursor-default text-sm items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border-t-2 border-b-2 border-gray-600'>
        <span className='w-4'>{selectedQty}</span>
      </button>
      <button
        type='button'
        onClick={handleAddQty}
        className='bg-white text-sm hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:font-bold text-gray-800 font-bold py-1 px-3 border-2 border-gray-600'
      >
        <span>+</span>
      </button>
      <span className='ml-2 text-sm'>{` ${stock} disponibles`}</span>
      <style jsx>
        {`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
          }
        `}
      </style>
      <style jsx global>
        {`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
          }
        `}
      </style>
    </div>
  );
};

const mapDispatchToProps = {
  setQuantity,
  setSize
};

const mapStateToProps = state => {
  return {
    checkedSize: state.productSettings.size,
    checkedColor: state.productSettings.color,
    selectedQty: state.productSettings.quantity,
    product: state.product
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QtyControl);
