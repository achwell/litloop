import type {Metadata} from "next";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import StoreProvider from "@/provider"

export const metadata: Metadata = {
    title: "LitLoop - Buy or Rent Books", description: "An Online Bookstore to Sell and Rent Used Books",
};

export default function BookstoreLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
                <Sidebar/>
                <div className="flex flex-wrap p-2 justify-center w-full">
                    {children}
                </div>
            </div>
        </StoreProvider>
    );
}
