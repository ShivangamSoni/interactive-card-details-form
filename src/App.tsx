import Header from "@components/Header";

export default function App() {
    return (
        <main className="min-h-screen font-primary grid grid-rows-[auto_1fr]">
            <Header
                cardNumber="1234567890123456"
                name="Shivangam Soni"
                cvv="646"
                month="10"
                year="32"
            />
        </main>
    );
}
