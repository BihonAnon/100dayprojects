import Link from "next/link";
import CreateNote from "./CreateNote";
import './notes.css';

async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    {cache: "no-store"}
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function SimpleNotesPage() {
    const notes = await getNotes();

    return (
    <>
        <h1>Simple Notes</h1>
        <div className="note__container">
            {notes.map((note) => (

                <div className="note" key={note.id}>
                    <Link href={`/P1-SimpleNotes/${note.id}`}>
                        <h2 className="note_title">{note.note_title}</h2>
                    </Link>
                        <div>{note.completed_bool}</div>
                        <div>{note.note}</div>
                        <div className="createdat">Created At: {note.created}</div>
                </div>
            ))}
        </div>
        <CreateNote />
        </>
    )
}