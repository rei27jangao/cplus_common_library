export type DialogType = {
  innerRef: React.RefObject<HTMLInputElement>;
  type: 'success'| 'warning'| 'error'| 'confirm';
  headerText: string;
  bodyText: string;
  okText: string;
  cancelText: string;
  isOpen: boolean;
  callback: () => void;
  toggleDialog: () => void;
}
