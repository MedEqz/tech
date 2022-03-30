

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function getProduit(
  req,
  res,
  next
) {
  try {
    const produits = [];

    return res
      .status(200)
      .json(produits);
    
  } catch (error) {
    next(error);
  }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function getProduitById(
  req,
  res,
  next
) {
  try {
    const produits = [];

    return res
      .status(200)
      .json(produits);
    
  } catch (error) {
    next(error);
  }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function createProduits(
  req,
  res,
  next
) {
  try {
    const produits = [];

    return res
      .status(200)
      .json(produits);
    
  } catch (error) {
    next(error);
  }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function updateProduits(
  req,
  res,
  next
) {
  try {
    const produits = [];

    return res
      .status(200)
      .json(produits);
    
  } catch (error) {
    next(error);
  }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export async function deleteProduits(
  req,
  res,
  next
) {
  try {
    const produits = [];

    return res
      .status(200)
      .json(produits);
    
  } catch (error) {
    next(error);
  }

