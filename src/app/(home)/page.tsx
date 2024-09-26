import Body from "@/components/custom/Body";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/header";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    );
}
