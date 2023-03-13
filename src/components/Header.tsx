import { BG, CardLogo } from "@assets/index";

function getStr(val: number) {
    return isNaN(val) ? "" : val.toString();
}

export default function Header({
    cardNumber,
    name,
    month,
    year,
    cvc,
}: {
    cardNumber: number;
    name: string;
    month: number;
    year: number;
    cvc: number;
}) {
    const cardNumberSegments = getStr(cardNumber)
        .slice(0, 16)
        .padEnd(16, "0")
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
        <header className="relative isolate mb-20 xs:mb-28 lg:mb-0 lg:mr-28">
            <div className="absolute inset-0 z-[-1]">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={BG.main.Desktop}
                    />
                    <img
                        className="w-full h-full object-cover"
                        src={BG.main.Mobile}
                        alt=""
                    />
                </picture>
            </div>

            <div className="pl-[4.5rem] xs:pl-24 pr-4 pt-8 pb-12 grid grid-cols-[1fr_auto] grid-rows-2 tracking-widest lg:p-0 lg:m-0 lg:grid-cols-1 lg:grid-rows-[1fr_1fr] lg:gap-20 lg:h-full">
                <div className="relative z-[1] row-start-1 row-span-2 col-start-2 translate-y-[58%] -translate-x-[20%] lg:row-start-auto lg:row-span-1 lg:col-start-auto lg:translate-y-0 lg:translate-x-1/4 lg:self-end">
                    <img src={BG.Card.Front} alt="" />
                    <div className="absolute inset-0 w-full h-full flex flex-col justify-end gap-1 p-6 text-white pointer-events-none sm:px-12">
                        <div className="absolute top-0 left-0 w-full h-full m-4">
                            <CardLogo className="h-[45%] sm:h-[55%]" />
                        </div>
                        <div className="flex items-center justify-between text-sm font-semibold sm:text-base">
                            {cardNumberSegments.map((seg, idx) => (
                                <span key={`${idx}-${seg}`}>{seg}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between text-[.65rem] md:text-xs">
                            <span className="uppercase">
                                {name || "Jane Appleseed"}
                            </span>
                            <span>
                                <span>{getStr(month).padStart(2, "0")}</span> /{" "}
                                <span>{getStr(year).padStart(2, "0")}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative row-start-1 row-span-2 col-start-2 lg:row-start-auto lg:row-span-1 lg:col-start-auto lg:self-start lg:translate-x-1/2">
                    <img src={BG.Card.Back} alt="" />
                    <div className="absolute top-[41%] xs:top-[43%] lg:top-[43%] right-[12%]">
                        <span className="text-white text-sm md:text-base">
                            {getStr(cvc).padStart(3, "0")}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
