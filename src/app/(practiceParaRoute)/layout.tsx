import Link from "next/link";

export default function practiceParaRoute({ children, chatAndSettings, chatList }: { children: React.ReactNode; chatAndSettings: React.ReactNode; chatList: React.ReactNode; }) {
    return (
        <div className="flex w-[100vw] h-[100vh] gap-2 bg-gray-200">
            <div className="flex flex-col gap-2">
                <button><Link href='/people'>People</Link></button>
                <button><Link href='/group'>Group</Link></button>
                <button><Link href='/settings'>settings</Link></button>
            </div>
            {chatList}
            {chatAndSettings}
        </div>
    );
}