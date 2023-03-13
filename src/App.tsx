import { SubmitHandler, useForm } from "react-hook-form";
import { object, string, number, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "@components/Header";
import Form from "@components/Form";
import CompleteState from "@components/CompleteState";

import Button from "@components/Button";
import { useState } from "react";

const CardSchema = object({
    name: string()
        .required("Can't be blank")
        .matches(/^[aA-zZ\s]+$/, "Wrong Format, Alphabets only"),
    cardNumber: number()
        .typeError("Wrong format, Digits only")
        .required("Can't be blank")
        .positive("Can't be a Negative Number")
        .integer("Wrong format, Digits only")
        .test(
            "validate-length",
            () => "Should be exactly 16 Digits",
            (value) => value.toString().length === 16,
        ),
    month: number()
        .typeError("Wrong format, Digits only")
        .required("Can't be blank")
        .positive("Can't be a Negative Number")
        .integer("Wrong format, Digits only")
        .test(
            "validate-month",
            () => "Invalid Month",
            (value) => value >= 1 && value <= 12,
        )
        .test(
            "validate-length",
            () => "Should be exactly 2 Digits",
            (value) => value <= 9 || value.toString().length === 2,
        ),
    year: number()
        .typeError("Wrong format, Digits only")
        .required("Can't be blank")
        .positive("Can't be a Negative Number")
        .integer("Wrong format, Digits only")
        .test(
            "validate-length",
            () => "Should be exactly 2 Digits",
            (value) => value.toString().length === 2,
        ),
    cvc: number()
        .typeError("Wrong format, Digits only")
        .required("Can't be blank")
        .positive("Can't be a Negative Number")
        .integer("Wrong format, Digits only")
        .test(
            "validate-length",
            () => "Should be exactly 3 Digits",
            (value) => value.toString().length === 3,
        ),
});

type CardState = InferType<typeof CardSchema>;

export default function App() {
    const [complete, setComplete] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<CardState>({
        resolver: yupResolver(CardSchema),
    });

    const onSubmit: SubmitHandler<CardState> = (data) => {
        console.log({ data });
    };

    const name = watch("name");
    const cardNumber = watch("cardNumber");
    const month = watch("month");
    const year = watch("year");
    const cvc = watch("cvc");

    return (
        <main className="min-h-screen pb-8 font-primary grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[4fr_6fr] lg:pb-0 xl:grid-cols-[500px_1fr]">
            <Header
                cardNumber={cardNumber}
                name={name}
                cvc={cvc}
                month={month}
                year={year}
            />

            {!complete ? (
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Input
                        label="Cardholder Name"
                        error={errors.name?.message || ""}
                        inputProps={{
                            ...register("name"),
                            placeholder: "e.g. Jane Appleseed",
                        }}
                    />

                    <Form.Input
                        label="Card Number"
                        error={errors.cardNumber?.message || ""}
                        inputProps={{
                            ...register("cardNumber", {
                                valueAsNumber: true,
                            }),
                            placeholder: "e.g. 1234 5678 9123 0000",
                        }}
                    />

                    <div className="grid grid-cols-2 gap-2 items-start">
                        <div className="grid gap-2">
                            <Form.Label>Exp. Date (MM/YY)</Form.Label>
                            <div className="flex gap-2">
                                <Form.Input
                                    label="Month"
                                    labelVisible={false}
                                    error=""
                                    inputProps={{
                                        ...register("month", {
                                            valueAsNumber: true,
                                        }),
                                        placeholder: "MM",
                                    }}
                                />
                                <Form.Input
                                    label="Year"
                                    labelVisible={false}
                                    error=""
                                    inputProps={{
                                        ...register("year", {
                                            valueAsNumber: true,
                                        }),
                                        placeholder: "YY",
                                    }}
                                />
                            </div>
                            {(errors.month?.message ||
                                errors.year?.message) && (
                                <Form.Error>
                                    {errors.month?.message ||
                                        errors.year?.message ||
                                        ""}
                                </Form.Error>
                            )}
                        </div>

                        <Form.Input
                            label="CVC"
                            error={errors.cvc?.message || ""}
                            inputProps={{
                                ...register("cvc", {
                                    valueAsNumber: true,
                                }),
                                placeholder: "e.g. 123",
                            }}
                        />
                    </div>

                    <Button type="submit">Submit</Button>
                </Form>
            ) : (
                <CompleteState />
            )}
        </main>
    );
}
