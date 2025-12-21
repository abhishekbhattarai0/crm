import { cn } from "@/utils/cn"

interface SwitchTypes {
    checked: boolean,
    onChange: () => void,
    id?: string
}

const Switch = ({ checked, onChange, ...props }: SwitchTypes) => {
    return (
        <button
            // id={id}
            onClick={onChange}
            //     className={`w-12 h-6 rounded-full p-1 transition
            // ${checked ? "bg-sky-500" : "bg-gray-300"}`}
            className={cn(
                "h-3.5,5 w-7 rounded-full p-0.5 transition ",
                checked ? "bg-sky-500" : "bg-sky-100"
            )}
            {...props}

        >
            <div
                className={cn(
                    "size-2 bg-white rounded-full transition",
                    checked ? "translate-x-4" : "translate-x-0"
                )}
            />
        </button>
    );
}


export default Switch;
