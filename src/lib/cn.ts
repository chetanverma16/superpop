type ClassValue = string | number | false | null | undefined | ClassDictionary | ClassArray;

type ClassDictionary = { [id: string]: ClassValue };
type ClassArray = ClassValue[];

const toValue = (value: ClassValue): string => {
  if (!value) {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toValue).filter(Boolean).join(" ");
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .filter(([, v]) => Boolean(v))
      .map(([k]) => k)
      .join(" ");
  }

  return "";
};

export function cn(...inputs: ClassValue[]) {
  return inputs.map(toValue).filter(Boolean).join(" ");
}

