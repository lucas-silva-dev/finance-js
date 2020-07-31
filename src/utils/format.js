export const volumeFormatted = volume => volume / 1000000;

export const { format: currencyFormat } = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
});
