export type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
  className?: string;
};
