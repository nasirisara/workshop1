import React, { useState } from "react";


export default function DataTable() {
    const initialData = [
        { id: 1, firstName: "Sara", lastName: "Nasiri", age: 36, birthDate: "1985-01-01", country: "Iran", city: "Qaemshahr" },
        { id: 2, firstName: "Åsa", lastName: "Jonsson", age: 50, birthDate: "1971-04-15", country: "Sweden", city: "Växjö" },
        { id: 3, firstName: "Fatemeh", lastName: "Sojudi", age: 35, birthDate: "1986-03-29", country: "Iran", city: "Babol" },
        { id: 4, firstName: "Milad", lastName: "Nasiri", age: 45, birthDate: "1987-10-07", country: "Iran", city: "Qaemshahr" },
        { id: 5, firstName: "Parsa", lastName: "Mehdizadeh", age: 56, birthDate: "2009-04-17", country: "Iran", city: "Babolsar" }
    ];

    const [studentList] = useState(initialData);
    const [showDetails, setShowDetails] = useState(false);
    const studentDefaultData = { id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: "" }
    const [student, setStudent] = useState(studentDefaultData);

    const TableHeader = () => {
        return (
            <thead className="table-light">
                <td>Id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Age</td>
                <td>Action</td>
            </thead>
        );
    };

   

    
    const TableAction = ({ student }) => {
        const displayData = () => {
            setShowDetails(true);
            setStudent(student);
        };
        return <button type="button" className="btn btn-primary" onClick={displayData} >Details</button>
    }

    
     const TableRow = (props) => {
        return (
            <tbody>
                {
                    props.studentList.map((student) => {
                        const { id, firstName, lastName, age } = student;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{age}</td>
                                <td><TableAction student={student} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }

};