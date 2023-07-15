export const formatCurrecyForBrl = (value: string): string => {
  const formatedValue = parseFloat(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatedValue;
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
};
