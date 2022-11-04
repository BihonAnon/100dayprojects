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
            {notes.map((note) => (
                    <Link href={`/P1-SimpleNotes/${note.id}`}>
                        <div>
                            <h2>{note.note_title}</h2>
                            <p>{note.completed_bool}</p>
                            <p>{note.note}</p>
                            <p>{note.created}</p>
                        </div>
                    </Link>
            ))}
        </div>
    )
}

function Note ({ notedata }: any) {
    const { id, note, completed_bool, note_title, created } = notedata || {};

    return (
        <Link href={`/P1-SimpleNotes/${id}`}>
            <div>
                <h2>{note_title}</h2>
                <p>{completed_bool}</p>
                <p>{note}</p>
                <p>{created}</p>
            </div>
        </Link>
    )
}