export interface IDialogData {
  title: string;
  fields?: IDialogField[];
  onMount: (fields: IDialogFieldsMap) => void;
}

export interface IDialogFieldsMap {
  [key: string]: HTMLInputElement;
}

export interface IDialogField {
  type?: 'input';
  label?: string;
  value?: string;
  placeholder?: string;
}