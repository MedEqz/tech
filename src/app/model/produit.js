export class Produit {
  id;
  date;
  type;
  model;
  fournisseur;

  constructor(data) {
    this.id = data.id ?? null;
    this.date = data.date;
    this.type = data.type;
    this.model = data.model;
    this.fournisseur = data.fournisseur ?? [];
  }
}
