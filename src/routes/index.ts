import express from "express";
import medicamentoRouter from "./configuracao/medicamento";

const router = (app: express.Router) => {
  app.use("/pets", medicamentoRouter);
};
export default router;
