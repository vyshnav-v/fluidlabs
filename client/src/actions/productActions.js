import { addProductFail, addProductReq, addProductSuccess } from "../features/addProductSlice";
import axiosConfig from "../config/axios";
export const addProduct = (formData) => async (dispatch, getState) => {
  try {
    // Get the adminInfo from the state
    const {
      userLogin: { userInfo },
    } = getState();

    // Set the headers for the request
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.userData.webToken}`,
      },
    };

    console.log("Form Data:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // Dispatch the addProductReq action
    dispatch(addProductReq());

    // Make a POST request to add a product
    const { data } = await axiosConfig.post(`/add-products`, formData, config);

    if (data) {
      // Dispatch the addProductSuccess action if data is returned
      dispatch(addProductSuccess(data));
    }
  } catch (error) {
    // Handle errors and dispatch the addProductFail action
    const errorIs =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addProductFail(errorIs));
  }
};
