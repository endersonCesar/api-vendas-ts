
import { Request, Response } from "express";
import { Medicamento } from "../../interface/medicamento";
export class MedicamentoController {
    async cadastrarMedicamento (req: Request, res: Response) {
      const {medicamento,dosagem,tipo} = <Medicamento> req.body
      console.log(medicamento,dosagem,tipo)
      console.log('aaaaaaaaaa')
      res.status(200).json('medicamentos');
    }
}
  