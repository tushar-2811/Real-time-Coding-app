import {config as cfg} from "dotenv";
import path from "path";
import { envConfigSchema } from "../schemas/envConfigSchema";

cfg({ path : path.join(__dirname, "../../env" )});

export const env = envConfigSchema.parse(process.env);
