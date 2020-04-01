const getSizeForVariant = (checkedColor, checkedSize, product) => {
  const variantIndex = product.variants
    .map(variant => variant.color.name)
    .indexOf(checkedColor);

  const subVarIndex = product.variants[variantIndex].subVariants
    .map(subVar => subVar.size)
    .indexOf(checkedSize);

  if (subVarIndex < 0) {
    return product.variants[variantIndex].subVariants[0].size;
  } else {
    return checkedSize;
  }
};

const getStockForSize = (checkedColor, checkedSize, qty, product) => {
  const variantIndex = product.variants
    .map(variant => variant.color.name)
    .indexOf(checkedColor);

  const subVarIndex = product.variants[variantIndex].subVariants
    .map(subVar => subVar.size)
    .indexOf(checkedSize);

  if (
    subVarIndex < 0 ||
    product.variants[variantIndex].subVariants[subVarIndex].quantity < qty
  ) {
    return 0;
  } else {
    return qty;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        ...state,
        product: action.payload,
        productSettings: {
          id: action.payload._id,
          name: action.payload.name,
          description: action.payload.description,
          cover: action.payload.cover,
          size: action.payload.variants[0].subVariants[0].size,
          quantity: 0,
          color: action.payload.variants[0].color.name,
          price: 0
        }
      };
    case "SET_SIZE":
      const qty = getStockForSize(
        state.productSettings.color,
        action.payload,
        state.productSettings.quantity,
        state.product
      );

      return {
        ...state,
        productSettings: {
          ...state.productSettings,
          size: action.payload,
          quantity: qty,
          price: qty > 0 ? state.productSettings.price : 0
        }
      };
    case "SET_QUANTITY":
      return {
        ...state,
        productSettings: {
          ...state.productSettings,
          quantity: action.payload,
          price: action.payload * state.product.price
        }
      };
    case "SET_COLOR":
      const stock = getStockForSize(
        state.productSettings.color,
        action.payload,
        state.productSettings.quantity,
        state.product
      );
      return {
        ...state,
        productSettings: {
          ...state.productSettings,
          color: action.payload,
          quantity: stock,
          size: getSizeForVariant(
            action.payload,
            state.productSettings.size,
            state.product
          ),
          price: stock > 0 ? state.productSettings.price : 0
        }
      };
    case "SET_CART_ITEM":
      return {
        ...state,
        mylist: [...state.mylist, action.payload]
      };
    case "DELETE_CART_ITEM":
      return {
        ...state,
        mylist: state.mylist.filter(items => items.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
