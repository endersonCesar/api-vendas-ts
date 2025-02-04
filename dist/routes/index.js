import medicamentoRouter from "./configuracao/medicamento";
const router = (app) => {
    app.use("/pets", medicamentoRouter);
};
export default router;
