export type PortalProps = {
  children: React.ReactNode;
  onModalClose: () => void;
  showModal?: boolean;
  className?: string;
};
