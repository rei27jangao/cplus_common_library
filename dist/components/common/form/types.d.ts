/// <reference types="react" />
export declare type FormType = {
    propValues: any;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    onSubmit: (values: any, formikHelpers: any) => void | Promise<any>;
    children?: any | React.ReactNode;
};
