export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

// Calcular el total a pagar dependiendo de la marca
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case 'europeo':
      increment = 1.3;
      break;
    case 'americano':
      increment = 1.15;
      break;
    case 'asiatico':
      increment = 1.05;
      break;

    default:
      break;
  }
  return increment;
}

// Calcula el tipo de seguro
export function getPlan(plan) {
  return plan === 'basico' ? 1.2 : 1.5;
}

// Mostrar primer letra en mayuscula
export function capitalLetter(text) {
  return text.charAt().toUpperCase() + text.slice(1);
}
