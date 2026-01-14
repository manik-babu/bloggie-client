import Navber from "@/components/layouts/Navber";

export default function commonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navber />
            {children}
        </div>
    );
}