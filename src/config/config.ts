import devConfig from "./dev";
import prodConfig from "./prod";

export interface IConfig {
  port: number;
  env: string;
}

const env = process.env.NODE_ENV || "development";
const getConfig = (env: string): IConfig => {
  switch (env) {
    case "development":
      return devConfig;

    case "production":
      return prodConfig;

    default:
      return devConfig;
  }
};

const config = getConfig(env);
export default config;
