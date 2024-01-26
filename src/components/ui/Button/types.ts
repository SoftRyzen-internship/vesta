export interface ButtonType {
  label: string;
  onClick: () => void;
  type: "submit" | "reset" | "button";
  className?: string;
}
