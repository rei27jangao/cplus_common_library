/// <reference types="react" />
export declare type ErrorMessageType = {
    name: string;
    className?: string;
    component?: string | React.ComponentType;
    children?: (errorMessage: string) => React.ReactNode;
    render?: (errorMessage: string) => React.ReactNode;
};
