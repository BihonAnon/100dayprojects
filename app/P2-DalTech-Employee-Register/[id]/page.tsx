import PocketBase from '../../../pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');


async function getEmployee(EmployeeId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/employees/records/:${EmployeeId}`,
    //incremental static recaching (ISR) - https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as any;
}
async function getEmployeeTitle(EmployeeId: string) {
    
    const res = await fetch(`http://127.0.0.1:8090/api/collections/job_titles/records/:${EmployeeId}`,
    //incremental static recaching (ISR) - https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as any;
}
async function getEmployeeManager(EmployeeId: string) {    
    const record = await client.records.getOne('job_titles', 'RECORD_ID', {
        expand: 'some_relation'
    });
export default async function DalTechEmployeeRegisterPage( { params }: any ) {
    const employee = await getEmployee(params.id);
    return (
        <div className={employee.id}>
            <h1>DalTech Employee : {employee.first_name} {employee.last_name}</h1>
            <h2>Job Title : {employeeTitle.title}</h2>
            <h2>Manager : {employeeManager.first_name} {employeeManager.last_name}</h2>

        </div>
    );
}


    
    