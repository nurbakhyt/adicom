export function formatMoney(amount: number | undefined): string {
  if (amount === undefined) {
    return "--";
  }

  return new Intl.NumberFormat("kz-KZ", {
    style: "currency",
    currency: "KZT",
  }).format(amount);
}
