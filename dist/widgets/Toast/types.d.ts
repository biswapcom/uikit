export declare const types: {
    SUCCESS: string;
    DANGER: string;
    WARNING: string;
    INFO: string;
};
export declare type Types = typeof types[keyof typeof types];
export interface ToastAction {
    text: string;
    url: string;
}
export interface Toast {
    id: string;
    type: Types;
    title: string;
    description?: string;
    actions?: Array<ToastAction>;
    showDetails?: boolean;
}
export interface ToastContainerProps {
    toasts: Toast[];
    stackSpacing?: number;
    ttl?: number;
    onRemove: (id: string) => void;
    clearAll?: () => void;
}
export interface ToastProps {
    toast: Toast;
    onRemove?: ToastContainerProps["onRemove"];
    ttl?: number;
    style: Partial<CSSStyleDeclaration>;
    handleMouseEnter?: any;
    handleMouseLeave?: any;
    handleRemove?: any;
    progress?: any;
    clearAll?: () => void;
    zIndex?: string;
    removeButtonPosition?: number;
}
