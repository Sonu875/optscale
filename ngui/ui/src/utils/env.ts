export const getEnvironmentVariable = (key: string, fallback: string = "") =>
  window.opticloud?.[key] || import.meta.env[key] || fallback;
