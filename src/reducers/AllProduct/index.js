const name = 'allproduct';

export const types = {
  GET_ALLPRODUCT: `${name}/GET_ALLPRODUCT`,
  GET_ALLPRODUCT_RESPONSE: `${name}/GET_ALLPRODUCT_RESPONSE`,
  SET_LOADING: `${name}/SET_LOADING`,
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
  setLoading: data => ({
    type: types.SET_LOADING,
    payload: data,
  }),
};

export const selectors = {
  selectallproductresponse: state => state[name].productData1,
  selectLoading: state => state[name].loading,
};

const initState = {
  productData1: [],
  loading: true,
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.GET_ALLPRODUCT:
      return {
        ...state,
      };
    case types.GET_ALLPRODUCT_RESPONSE:
      const {payload} = action;
      return {
        ...state,
        productData1: payload,
      };
    default:
      return state;
  }
};
