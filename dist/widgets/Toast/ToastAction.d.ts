import React from "react";
import { ToastAction as Action } from "./types";
interface ToastActionProps {
    actions: Array<Action>;
    title?: string;
    url?: string;
}
declare const ToastAction: React.FC<ToastActionProps>;
export default ToastAction;
