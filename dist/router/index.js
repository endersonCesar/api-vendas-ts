import medicamentoRouter from "../router/configuracao/medicamento";
const router = (app) => {
    app.use("/pets", medicamentoRouter);
};
export default router;
