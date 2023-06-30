import { FieldError } from "react-hook-form";
import { InputHTMLAttributes } from "react";

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | any;
  label: string;
  type?: string;
  width?: string;
  iconRight?: () => void;
}
