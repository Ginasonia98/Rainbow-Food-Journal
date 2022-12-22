import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;

const postRegisterUSer = async (data) => {
  const register = await axios.post(`${baseURL}/api/v1/register`, data, {
    headers: {
      apiKey: process.env.REACT_APP_APIKEY,
    },
  });
  return register.data;
};

const postLoginUser = async (data) => {
  const login = await axios.post(`${baseURL}/api/v1/login`, data, {
    headers: {
      apiKey: process.env.REACT_APP_APIKEY,
    },
  });
  return login.data;
};

const postLike = async (data, token) => {
  const response = await axios.post(`${baseURL}/api/v1/like`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: process.env.REACT_APP_APIKEY,
    },
  });
  return response.data;
};

const postUnlike = async (data, token) => {
  const response = await axios.post(`${baseURL}/api/v1/unlike`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: process.env.REACT_APP_APIKEY,
    },
  });
  return response.data;
};

const getAllFoods = async () => {
  const response = await axios.get(`${baseURL}/api/v1/foods`, {
    headers: {
      apiKey: process.env.REACT_APP_APIKEY,
    },
  });
  return response.data;
};

const getUserLikedFoods = async (token) => {
  const likefoods = await axios.get(`${baseURL}/api/v1/like-foods`, {
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: process.env.REACT_APP_APIKEY,
    },
  });
  return likefoods.data;
};

const getRatingFoodByFoodId = async (token) => {
  const ratingfoodbyid = await axios.get(
    `${baseURL}/api/v1/food-rating/{{FOOD_ID}}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        apiKey: process.env.REACT_APP_APIKEY,
      },
    }
  );
  return ratingfoodbyid.data;
};

const postCreateFoodRating = async (token) => {
  const updateuserrole = await axios.post(
    `${baseURL}/api/v1/rate-food/{{FOOD_ID}}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        apiKey: process.env.REACT_APP_APIKEY,
      },
    }
  );
  return updateuserrole.data.results;
};

const getFoodById = async (token, foodId) => {
  const idfoods = await axios.get(`${baseURL}/api/v1/foods/${foodId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: process.env.REACT_APP_APIKEY,
    },
  });
  return idfoods.data;
};


const postCreateNewFoods = async () => {
  const createfoods = await axios.post(`${baseURL}/api/v1/create-food`);
  return createfoods.data.results;
};

const postUpdateFoodById = async () => {
  const updatefoodbyid = await axios.post(
    `${baseURL}/api/v1/update-food/{{FOOD_ID}}`
  );
  return updatefoodbyid.data.results;
};

const deleteFoodById = async () => {
  const updatefoodbyid = await axios.delete(
    `${baseURL}/api/v1/delete-food/{{FOOD_ID}}`
  );
  return updatefoodbyid.data.results;
};

const getUserLogin = async () => {
  const userlogin = await axios.get(`${baseURL}/api/v1/user`);
  return userlogin.data.results;
};

const getAllUser = async () => {
  const alluser = await axios.get(`${baseURL}/api/v1/all-user`);
  return alluser.data.results;
};

const postUpdateProfile = async () => {
  const updateprofile = await axios.post(`${baseURL}/api/v1/update-profile`);
  return updateprofile.data.results;
};

const postUpdateUserRole = async () => {
  const updateuserrole = await axios.post(
    `${baseURL}/api/v1/update-user-role/{{USER_ID}}`
  );
  return updateuserrole.data.results;
};

const postUploadImage = async () => {
  const uploadimage = await axios.post(`${baseURL}/api/v1/upload-image`);
  return uploadimage.data.results;
};

export {
  postRegisterUSer,
  postLoginUser,
  postLike,
  postUnlike,
  getAllFoods,
  getUserLikedFoods,
  getFoodById,
  postCreateNewFoods,
  postUpdateFoodById,
  deleteFoodById,
  getUserLogin,
  getAllUser,
  postUpdateProfile,
  postUpdateUserRole,
  postCreateFoodRating,
  postUploadImage,
  getRatingFoodByFoodId,
};
