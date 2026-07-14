import api from "../api/axios";

/*
|--------------------------------------------------------------------------
| Save Extension
|--------------------------------------------------------------------------
*/

export const saveExtension = async (extension) => {
  const response = await api.post("/extensions", extension);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Get My Extensions
|--------------------------------------------------------------------------
*/

export const getMyExtensions = async () => {
  const response = await api.get("/extensions");

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Get Single Extension
|--------------------------------------------------------------------------
*/

export const getExtension = async (id) => {
  const response = await api.get(`/extensions/${id}`);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Delete Extension
|--------------------------------------------------------------------------
*/

export const deleteExtension = async (id) => {
  const response = await api.delete(`/extensions/${id}`);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| Download ZIP
|--------------------------------------------------------------------------
*/

export const downloadExtension = async (extension) => {
  const response = await api.post(
    "/extensions/download",
    extension,
    {
      responseType: "blob",
    }
  );

  const blob = new Blob([response.data], {
    type: "application/zip",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  const fileName = `${
    extension.title || "PromptForge-Extension"
  }.zip`;

  link.setAttribute("download", fileName);

  document.body.appendChild(link);

  link.click();

  link.remove();

  window.URL.revokeObjectURL(url);
};