export const mfConfig = {
  name: "360conseil_app",
  exposes: {},
  shared: {
    react: {
      singleton: true,
      requiredVersion: "^19.0.0",
      eager: true, // ← indispensable pour éviter le crash
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "^19.0.0",
      eager: true,
    },
  },
};
