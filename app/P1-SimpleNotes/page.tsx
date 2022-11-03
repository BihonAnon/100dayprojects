import Link from "next/link";

async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30");
    const data = await res.json();
    return data?.items as any[];
}

export default async function SimpleNotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Simple Notes</h1>

        </div>
    )
}

function Note ({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/P1-SimpleNotes/${id}`}>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{created}</p>
            </div>
        </Link>
    )
}