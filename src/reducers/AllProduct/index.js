const name = 'allproduct';

export const types = {
  GET_ALLPRODUCT: `${name}/GET_ALLPRODUCT`,
  GET_ALLPRODUCT_RESPONSE: `${name}/GET_ALLPRODUCT_RESPONSE`,
};

export const actions = {
  getAllProduct: data => ({
    type: types.GET_ALLPRODUCT,
    payload: data,
  }),
  getAllProductResponse: data => ({
    type: types.GET_ALLPRODUCT_RESPONSE,
    payload: data,
  }),
};

export const selectors = {
  selectallproductresponse: state => state[name].productData,
};

const initState = {
  productData: [],
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case types.GET_ALLPRODUCT:
      return {
        ...state,
      };
    case types.GET_ALLPRODUCT_RESPONSE:
      const {payload} = action;
      return {
        ...state,
        productData: payload,
      };
    default:
      return state;
  }
};
