// Prefer same-origin (Vite proxy in dev, nginx proxy in Docker/prod).
// Override with VITE_API_BASE only if calling backend on another host.
export const API_BASE =
  import.meta.env.VITE_API_BASE?.replace(/\/$/, "") || "";

export const apiUrl = (path) => {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${p}`;
};
