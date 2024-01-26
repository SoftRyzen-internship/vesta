export interface ButtonType {
  label: string;
  type: "submit" | "reset" | "button";
  className?: string;
  onClick: () => void;
}
