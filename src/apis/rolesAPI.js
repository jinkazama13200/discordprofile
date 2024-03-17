import fetcher from "./fetcher";

export const getRoles = async () => {
  try {
    const res = await fetcher.get("roles");
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addRole = async (payload) => {
  try {
    const res = await fetcher.post("roles", payload);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const removeRoleById = async (id) => {
  try {
    const res = await fetcher.delete(`roles/${id}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRoleById = async (id) => {
  try {
    const res = await fetcher.get(`roles/${id}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateRoleById = async (id, payload) => {
  try {
    const res = fetcher.put(`roles/${id}`, payload);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
