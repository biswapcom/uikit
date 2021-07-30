import React from "react";
import { ToastAction as Action } from "./types";
interface ToastActionProps {
    actions: Array<Action>;
}
declare const ToastAction: React.FC<ToastActionProps>;
export default ToastAction;
