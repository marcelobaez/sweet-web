import React from "react";
import { connect } from "react-redux";
import { setColor } from "../actions";

const ColorsControl = props => {
  const { checkedColor, colors, setColor } = props;

  return (
    <React.Fragment>
      <span className='block uppercase text-xs font-normal text-gray-700 mt-3'>
        {`Color: ${checkedColor || ""}`}
      </span>
      <div className='flex overflow-hidden mt-2'>
        {colors.map((color, index) => {
          return (
            <label key={`lbl-${color.name}`}>
              <input
                className='hidden'
                type='radio'
                name='color'
                defaultChecked={color.name === checkedColor}
                onChange={event => setColor(event.target.value)}
                value={color.name}
              />
              <div className='inline-block relative w-8 h-8 mr-3 cursor-pointer'>
                <span
                  style={{ backgroundColor: color.hex }}
                  className='spanRounded opacity-50 hover:opacity-100 absolute w-8 h-8 top-1/2 left-1/2 rounded-full inline-flex items-center justify-center'
                >
                  <svg
                    className='fill-current w-4 h-4 text-transparent'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                  </svg>
                </span>
              </div>
            </label>
          );
        })}
        <style jsx>
          {`
            .spanRounded {
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              -o-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              transition: ease-in-out 0.3s;
            }

            input[type="radio"]:checked + div .spanRounded {
              opacity: 1;
            }

            input[type="radio"]:checked + div svg {
              color: white;
            }
          `}
        </style>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setColor
};

const mapStateToProps = state => {
  return {
    colors: state.product.variants.map(variant => {
      return variant.color;
    }),
    checkedColor: state.productSettings.color
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorsControl);
