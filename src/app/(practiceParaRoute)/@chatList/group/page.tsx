import Link from "next/link";

export default function Group() {
    return (
        <div className="h-full bg-red-600">
            <h1>This is group page</h1>
            <button><Link href='/chat'>group</Link></button>
        </div>
    );
}