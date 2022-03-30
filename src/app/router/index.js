
import express from 'express';
import { produitRouter } from './produit';


export default (app)  => {
  app.use('/v1/produit', produitRouter);

  app.use((req, res) => {
    res.status(404).send('Une erreur est survenue');
  });
};

