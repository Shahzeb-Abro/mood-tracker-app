import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}/auth`;

export const getMe = async () => {
  try {
    const response = await axios.get(`${baseUrl}/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const _register = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateUserDetails = async (data) => {
  const formData = new FormData();
  formData.append("avatar", data.file);
  formData.append("name", data.name);
  try {
    const response = await axios.post(`${baseUrl}/update-me`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
