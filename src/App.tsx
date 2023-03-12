import Header from "@components/Header";
import Form from "@components/Form";

export default function App() {
    return (
        <main className="min-h-screen pb-8 font-primary grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[4fr_6fr] lg:pb-0 xl:grid-cols-[500px_1fr]">
            <Header
                cardNumber="1234567890123456"
                name="Shivangam Soni"
                cvv="646"
                month="10"
                year="32"
            />

            <Form>
                <Form.Input
                    label="Cardholder Name"
                    error=""
                    inputProps={{
                        type: "text",
                        placeholder: "e.g. Jane Appleseed",
                    }}
                />

                <Form.Input
                    label="Card Number"
                    error=""
                    inputProps={{
                        type: "text",
                        placeholder: "e.g. 1234 5678 9123 0000",
                    }}
                />

                <div className="grid grid-cols-2 gap-2">
                    <div className="grid gap-2">
                        <Form.Label>Exp. Date (MM/YY)</Form.Label>
                        <div className="flex gap-2">
                            <Form.Input
                                label="Month"
                                labelVisible={false}
                                error=""
                                inputProps={{
                                    type: "text",
                                    placeholder: "MM",
                                }}
                            />
                            <Form.Input
                                label="Year"
                                labelVisible={false}
                                error=""
                                inputProps={{
                                    type: "text",
                                    placeholder: "YY",
                                }}
                            />
                        </div>
                    </div>

                    <Form.Input
                        label="CVC"
                        error=""
                        inputProps={{
                            type: "text",
                            placeholder: "e.g. 123",
                        }}
                    />
                </div>

                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        </main>
    );
}
