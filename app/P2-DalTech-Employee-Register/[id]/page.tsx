async function getEmployee(EmployeeId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/employees/records/${EmployeeId}`,
    //incremental static recaching (ISR) - https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as any;
}
export default async function DalTechEmployeeRegisterPage( { params }: any ) {
    const employee = await getEmployee(params.id);
    return (
        <div>
            <h1>DalTech Employee : {params.first_name} {params.last_name}</h1>
            <p>Job Title : {params.job_title}</p>
        </div>
    );
}


    
    