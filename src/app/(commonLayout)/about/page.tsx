export const dynamic = "force-dynamic";

export default async function About() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            const x = Math.floor(Math.random() * 100);
            if (x > 10) {
                resolve(x);
            }
            else {
                reject(x);
            }
        }, 1000)
    }).catch(error => {
        throw new Error(error)
    });

    return (
        <div>
            data = 10
        </div>
    );
}