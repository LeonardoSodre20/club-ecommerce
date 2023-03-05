export const formatCurrecyForBrl = (value: number) => {
  const formatedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatedValue;
};
