export interface ButtonType {
  label: string;
  onClick: () => void;
  className?: string;
  type: "submit" | "reset" | "button";
}
