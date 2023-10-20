import { verifyJWT } from "./http/middlewares/verifyJWT";

export const swaggerOptions = {
  swagger: {
    info: {
      title: "My Title",
      description: "My Description.",
      version: "1.0.0",
      contact: {
        email: "salesrayane11@gmail.com",
      },
    },
    host: "localhost:3333",
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

export const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
