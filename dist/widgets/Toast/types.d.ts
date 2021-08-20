export declare const types: {
    SUCCESS: string;
    DANGER: string;
    WARNING: string;
    INFO: string;
};
export declare type Types = typeof types[keyof typeof types];
export interface Toast {
    id: string;
    type: Types;
    title: string;
    description?: any;
    telegramDescription?: string;
    tweeterDescription?: string;
    hash?: string;
    url?: string;
}
export interface ToastContainerProps {
    toasts: Toast[];
    stackSpacing?: number;
    ttl?: number;
    onRemove: (id: string) => void;
    clearAll?: () => void | undefined;
}
export interface ToastProps {
    toast: Toast;
    onRemove?: ToastContainerProps["onRemove"];
    ttl?: number;
    style: Partial<CSSStyleDeclaration>;
    handleMouseEnter?: any;
    handleMouseLeave?: any;
    handleRemove?: any;
    progress?: number;
    clearAll?: () => void | undefined;
    zIndex?: string;
    removeButtonPosition?: number;
}
