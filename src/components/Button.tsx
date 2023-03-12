import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";

export default function Button({
    children,
    className,
    ...props
}: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) {
    return (
        <button
            {...props}
            className={`bg-grayishViolet-700 flex items-center justify-center text-white text-xl p-3 rounded-md border-none outline-none hover:bg-violet hover:font-semibold focus-visible:bg-violet focus-visible:font-semibold transition-all ${className}`}
        >
            {children}
        </button>
    );
}
