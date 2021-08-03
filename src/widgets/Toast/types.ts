export const types = {
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
};

export type Types = typeof types[keyof typeof types];

export interface ToastAction {
  text: string;
  url: string;
}

export interface Toast {
  id: string;
  type: Types;
  title: string;
  description?: string;
  telegramDescription?: string;
  tweeterDescription?: string;
  hash?: string;
}

export interface ToastContainerProps {
  toasts: Toast[];
  stackSpacing?: number;
  ttl?: number;
  onRemove: (id: string) => void;
  clearAll?: () => void | null
}

export interface ToastProps {
  toast: Toast;
  onRemove?: ToastContainerProps["onRemove"];
  ttl?: number;
  style: Partial<CSSStyleDeclaration>;
  handleMouseEnter?: any;
  handleMouseLeave?: any,
  handleRemove?: any;
  progress?: any;
  clearAll?: () => void | null;
  zIndex?: string
  removeButtonPosition?: number
}
