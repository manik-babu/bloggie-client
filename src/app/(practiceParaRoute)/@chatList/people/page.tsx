import Link from "next/link";

export default function People() {
    return (
        <div className="h-full bg-green-600">
            <h1>This is people page</h1>
            <h1><button><Link href='/chat'>People</Link></button></h1>
        </div>
    );
}