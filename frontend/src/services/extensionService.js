import api from "../api/axios";

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

  const fileName =
    `${extension.title || "PromptForge-Extension"}.zip`;

  link.setAttribute("download", fileName);

  document.body.appendChild(link);

  link.click();

  link.remove();

  window.URL.revokeObjectURL(url);
};