import {
    type ButtonHTMLAttributes,
    type DetailedHTMLProps,
    type InputHTMLAttributes,
    type ReactNode,
} from "react";

export default function Form({ children }: { children: ReactNode }) {
    return (
        <form className="px-6 mt-2 lg:m-0 lg:p-0 lg:grid lg:place-items-center">
            <div className="flex flex-col gap-8 lg:w-[400px]">{children}</div>
        </form>
    );
}

interface InputProps {
    label: string;
    labelVisible?: boolean;
    error: string;
    inputProps: DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
}
Form.Input = ({
    label,
    labelVisible = true,
    error,
    inputProps,
}: InputProps) => {
    return (
        <div className="w-full grid gap-2">
            <label className="grid gap-2 cursor-pointer">
                {labelVisible && <Form.Label>{label}</Form.Label>}
                <span
                    className={`${
                        error ? "bg-error" : "bg-grayishViolet-300"
                    } p-[1px] rounded-lg text-lg focus-within:bg-gradient-to-r focus-within:from-violet focus-within:to-purple`}
                >
                    <input
                        {...inputProps}
                        className="w-full py-1.5 px-3 rounded-lg border-none outline-none text-grayishViolet-700 placeholder:text-grayishViolet-300"
                    />
                </span>
            </label>
            {error && <span className="text-error text-sm">{error}</span>}
        </div>
    );
};

Form.Label = ({ children }: { children: ReactNode }) => (
    <span className="uppercase text-grayishViolet-700 text-sm font-semibold tracking-widest">
        {children}
    </span>
);

Form.Button = ({
    children,
    className,
    ...props
}: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) => {
    return (
        <button
            {...props}
            className={`bg-grayishViolet-700 flex items-center justify-center text-white text-xl p-3 rounded-md border-none outline-none hover:bg-violet hover:font-semibold focus-visible:bg-violet focus-visible:font-semibold transition-all ${className}`}
        >
            {children}
        </button>
    );
};
