export const formatCurrecyForBrl = (value: string): string => {
  const formatedValue = parseFloat(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatedValue;
};
