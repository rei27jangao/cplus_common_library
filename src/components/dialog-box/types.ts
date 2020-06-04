export type DialogType = {
  type: 'success'| 'warning'| 'error'| 'confirm' | 'info';
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  closeButtonClassName?: string;
  okButtonClassName?: string;
  headerText: string;
  bodyText: string;
  okText: string;
  closeText: string;
  isOpen: boolean;
   // trigger when clicking the ok button. E.g. ok to proceed
  callback: () => void;
  toggleDialog: () => void;
  onOpened: () => void;
  onClosed: () => void;
  // default false
  hideCloseButton?: boolean;
  innerRef: any | undefined;
}
