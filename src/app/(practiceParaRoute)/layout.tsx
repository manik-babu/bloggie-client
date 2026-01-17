import { Route } from "@/types";
import Link from "next/link";

export default function practiceParaRoute({ children, chatAndSettings, chatList }: { children: React.ReactNode; chatAndSettings: React.ReactNode; chatList: React.ReactNode; }) {
    const user = {
        role: "USER"
    }
    let routes: Route[] = [];

    if (user.role === 'ADMIN') {
        routes = [
            {
                title: "Admin Dashboard",
                items: {
                    title: 'Dashboard',
                    url: '/dashboard'
                }
            },
            {
                title: "Manage user",
                items: {
                    title: 'Manage',
                    url: '/manage'
                }
            }
        ]
    }
    else {
        routes = [
            {
                title: "User post",
                items: {
                    title: 'Post',
                    url: '/post'
                }
            },
            {
                title: "users friend",
                items: {
                    title: 'Friend',
                    url: '/friend'
                }
            }
        ]
    }





    return (
        <div className="flex w-screen h-screen gap-2 bg-gray-200">
            <div className="flex flex-col gap-2">
                {
                    routes.map((route, index) => (
                        <button key={index}><Link href={route.items.url}>{route.items.title}</Link></button>
                    ))
                }
            </div>
            {chatList}
            {chatAndSettings}
        </div>
    );
}