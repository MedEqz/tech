import { Router } from 'express';
import {
  getProduit,
  getProduitById,
  createProduits,
  updateProduits,
  deleteProduits
} from '../controllers/produitController';

const produitRouter = Router();

produitRouter.get('/produit', getProduit);
produitRouter.get('/produit/:produitId', getProduitById);
produitRouter.post('/produit', createProduits);
produitRouter.put('/produit/:produitId', updateProduits);
produitRouter.delete('/produit/:produitId', deleteProduits);

export { produitRouter };
