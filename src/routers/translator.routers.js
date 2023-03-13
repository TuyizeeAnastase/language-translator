import express from "express";
import translating from "../controllers/translate.controller";
import { inpuValidation } from "../validations/input.validations";

const routes = express();

routes.post("/", inpuValidation, translating.translaterController);

export default routes;
