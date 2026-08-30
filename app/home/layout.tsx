import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dark min-h-screen flex flex-col bg-[#101010] text-white">
            {/* Dedicated Home Header */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-1">
                {children}
            </main>

            {/* Dedicated Home Footer */}
            <Footer />
        </div>
    );
}