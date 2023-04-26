export const formatCurrency = (value: string): string => {
  if (!value) return "";
  let v = value;
  const integer = v.split(",")[0];
  v = v.replace(/\D/, "");
  v = v.replace(/^[0]+/, "");

  if (v.length <= 3 || !integer) {
    if (v.length === 1) v = `0${v}`;
    if (v.length === 2) v = `0${v}`;
    if (v.length === 3) v = `0${v}`;
  } else {
    v = v.replace(/^(\d{1,})(\d{2})$/, "$1,$2");
  }

  return v;
};
