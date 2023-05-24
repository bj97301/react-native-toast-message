import React from 'react';
import { ToastConfig, ToastData, ToastHideParams, ToastOptions, ToastShowParams } from './types';
export type ToastUIProps = {
    isVisible: boolean;
    options: Required<ToastOptions>;
    data: ToastData;
    show: (params: ToastShowParams) => void;
    hide: (params: ToastHideParams) => void;
    config?: ToastConfig;
};
export declare function ToastUI(props: ToastUIProps): React.JSX.Element;
