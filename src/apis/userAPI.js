import fetcher from "./fetcher";

export const getUserInf = async () => {
  try {
    const res = await fetcher.get("user1");
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUserInf = async (id, payload) => {
  try {
    const res = await fetcher.put(`user1/${id}`, payload);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
