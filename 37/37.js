import React from "react";

/* Child Component */
function TableRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.course}</td>
        </tr>
    );
}

/* Parent Component */
function App() {
    const students = [
        { id: 1, name: "Rahul", age: 20, course: "Computer Science" },
        { id: 2, name: "Anita", age: 21, course: "IT" },
        { id: 3, name: "Amit", age: 19, course: "Electronics" }
    ];

    return (
        <div>
            <h3>Student Details</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <TableRow
                            key={student.id}
                            id={student.id}
                            name={student.name}
                            age={student.age}
                            course={student.course}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
