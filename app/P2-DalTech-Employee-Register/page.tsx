import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import Link from "next/link";

export default async function DalTechEmployeeRegisterPage() {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/employees/records`);
    const data = await res.json();
    const employees = data?.items as any[];

    return (
        <div>
            <h1>DalTech Employee Register</h1>
                
            <ul>
                {employees?.map((employee) => (
                    <li key={employee.id}>
                        <Link href={`/P2-DalTech-Employee-Register/${employee.id}`}>
                            <a>{employee.first_name} {employee.last_name} : {employee.job_title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}