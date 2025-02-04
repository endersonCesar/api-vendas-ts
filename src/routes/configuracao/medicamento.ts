import express from 'express';

import {MedicamentoController } from '../../controller/configuracao/medicamento';

const router = express.Router();


const medicamentoController = new MedicamentoController();
router.post('/inserir', (req, res) => medicamentoController.cadastrarMedicamento(req, res));

export default  router;
