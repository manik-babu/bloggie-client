import Link from "next/link";

export default function Layout() {
    return (
        <div className="flex gap-4">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </div>
    );
}