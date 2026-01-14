export default function adminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Admin Navber</h1>
            {children}
        </div>
    );
}