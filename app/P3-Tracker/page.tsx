export default async function P3TrackerPage( { params }: any ) {
    return (
        <div className={params.id}>
            <div>
                Calender/
            </div>
            <div>
                Tasks/
            </div>
            <div>
                Notes/
            </div>
            <div>
                Resources/
            </div>
        </div>
    );
}