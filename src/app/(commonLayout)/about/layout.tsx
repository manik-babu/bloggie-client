import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bloggie - About us",
    description: "About us of bloggie app"
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>This is about page</h1>
            {children}
        </div>
    );
}