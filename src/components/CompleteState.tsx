import { CompletedIcon } from "@assets/index";

import Button from "./Button";

export default function CompleteState() {
    return (
        <div className="grid place-items-center px-6 mt-2 lg:m-0 lg:p-0">
            <div className="w-[min(400px,100%)] flex flex-col justify-center gap-8">
                <CompletedIcon className="self-center" />
                <div className="text-center">
                    <h2 className="mb-4 text-grayishViolet-700 text-3xl font-bold uppercase">
                        Thank You!
                    </h2>
                    <span className="text-base text-grayishViolet-300">
                        We've added your card details
                    </span>
                </div>
                <Button type="button">Continue</Button>
            </div>
        </div>
    );
}
