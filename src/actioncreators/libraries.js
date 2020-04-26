import axios from "axios";

const url = "https://libraryz-project.herokuapp.com/library";

// Get
export const getData = (query) => {
  let pertanyaan;
  if (query) {
    pertanyaan = { params: { title: query } };
  }
  return async (dispatch) => {
    const response = await axios.get(`${url}`, pertanyaan);
    dispatch({
      type: "LIBRARIES_GET_DATA",
      payload: response.data.data,
    });
  };
};

// Post
export const add = (data) => {
  return async (dispatch) => {
    const response = await axios.post(`${url}`, data);
    dispatch({
      type: "LIBRARIES_ADD",
      payload: response.data.data,
    });

    dispatch({
      type: "LIBRARIES_HIDE_ADD",
    });
  };
};

// Delete
export const deleteData = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(`${url}/${id}`);
    dispatch({
      type: "LIBRARIES_DELETE_DATA",
      payload: response.data.data,
    });

    dispatch({
      type: "LIBRARIES_HIDE_DELETE",
    });
  };
};

// Edit
export const edit = (data) => {
  return async (dispatch) => {
    await axios.put(`${url}/${data._id}`, data);
    dispatch({
      type: "LIBRARIES_EDIT_DATA",
      payload: data,
    });

    dispatch({
      type: "LIBRARIES_HIDE_EDIT",
    });
  };
};

export const hideAdd = () => {
  return {
    type: "LIBRARIES_HIDE_ADD",
  };
};

export const hideDelete = () => {
  return {
    type: "LIBRARIES_HIDE_DELETE",
  };
};

export const hideEdit = () => {
  return {
    type: "LIBRARIES_HIDE_EDIT",
  };
};

export const showAdd = () => {
  return {
    type: "LIBRARIES_SHOW_ADD",
  };
};

export const showDelete = (data) => {
  return {
    type: "LIBRARIES_SHOW_DELETE",
    payload: data,
  };
};

export const showEdit = (data) => {
  return {
    type: "LIBRARIES_SHOW_EDIT",
    payload: data,
  };
};
