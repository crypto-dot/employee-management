import React, { useState, useEffect } from 'react';
import EmployeeServices from '../services/EmployeeServices';
import "../styles/ListEmployee.scss"
const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeServices.getEmployees().then((res) => {
            setEmployees(res.data);
        }).catch((err) => {
            console.log(err)
        });
    }, []);
    return (
        <section className='section section--employeeList'>
            <h1 className='h1 h1--employeeList'>Employee's List</h1>
            <div className='block block--row'>
                <table className='table table--employee'>
                    <thead className='thead thead--employee'>
                        <tr className='tr tr--employeeHeadings' >
                            <th className='th th--employee'>Employee First Name</th>
                            <th className='th th--employee'>Employee Last Name</th>
                            <th className='th th--employee'>Employee Email ID</th>
                            <th className='th th--employee'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='tbody tbody--employees'>
                        {
                            employees.map(
                                employee => {
                                    return (
                                        <tr className='tr tr--employee' key={employee.id}>
                                            <td className='td td--employeeInfo'>{employee.firstname}</td>
                                            <td className='td td--employeeInfo'>{employee.lastname}</td>
                                            <td className='td td--employeeInfo'>
                                                {employee.emailID}
                                            </td>
                                            <td className='td td--employeeInfo td--actions'>
                                                <button className='button button--employees edit'>Edit</button>
                                                <button className='button button--employees remove'>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ListEmployee