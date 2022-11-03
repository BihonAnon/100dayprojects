export default function SimpleNotesPage() {
    //Simple note taker app
    //object for posts
    return (
        <>
            <div id="Simple-Note-Taker">
                <h1>Simple Note Taker</h1>
                <p>
                    This is a simple note taker app that uses pocketbase for the database and Next.JS 13 for the front end. It is a simple note taker that allows you to create, read, update, and delete notes. Each user has their own notes and can only access their own notes. Each users notes is front to end encrypted. The app is hosted on Vercel.
                </p>
                <a href="https://simple-note-taker.vercel.app/">Project Link</a>
            </div>
        </>
    );
}