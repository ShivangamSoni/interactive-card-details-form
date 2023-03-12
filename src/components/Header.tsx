import { BG, CardLogo } from "@assets/index";

export default function Header({
    cardNumber,
    name,
    month,
    year,
    cvv,
}: {
    cardNumber: string;
    name: string;
    month: string;
    year: string;
    cvv: string;
}) {
    cardNumber = cardNumber || "0000000000000000";
    const cardNumberSegments = cardNumber
        .split("")
        .reduce<string[]>((res, char, idx) => {
            const segIdx = Math.floor(idx / 4);
            if (!res[segIdx]) {
                res[segIdx] = "";
            }
            res[segIdx] += char;
            return res;
        }, []);

    return (
        <header className="relative isolate mb-20">
            <div className="absolute inset-0 z-[-1]">
                <img
                    className="w-full h-full object-cover"
                    src={BG.main.Mobile}
                    alt=""
                />
            </div>

            <div className="pl-[4.5rem] pr-4 pt-8 pb-12 grid grid-cols-[1fr_auto] grid-rows-2 tracking-widest">
                <div className="relative row-start-1 row-span-2 col-start-2">
                    <img src={BG.Card.Back} alt="" />
                    <div className="absolute top-[41%] right-[12%]">
                        <span className="text-white text-sm">
                            {cvv || "000"}
                        </span>
                    </div>
                </div>

                <div className="relative row-start-1 row-span-2 col-start-2 translate-y-[58%] -translate-x-[20%]">
                    <img src={BG.Card.Front} alt="" />
                    <div className="absolute inset-0 w-full h-full flex flex-col justify-end gap-1 p-6 text-white pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full m-4">
                            <CardLogo className="h-[40%]" />
                        </div>
                        <div className="flex items-center justify-between text-sm font-semibold">
                            {cardNumberSegments.map((seg, idx) => (
                                <span key={`${idx}-${seg}`}>{seg}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between text-[.65rem]">
                            <span className="uppercase">
                                {name || "Jane Appleseed"}
                            </span>
                            <span>
                                <span>{month || "00"}</span> /{" "}
                                <span>{year || "00"}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
