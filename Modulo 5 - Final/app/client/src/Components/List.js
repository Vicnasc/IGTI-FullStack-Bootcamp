import React from 'react';

const List = (props) => {
    return (
        <>
            <li
                key={props._id}>
                <table>
                    <thead>
                        <tr rowSpan="2"><td>Quantidade</td></tr>
                        <tr><td>{props.category}</td></tr>
                        <tr><td>{props.description}</td></tr>
                        <tr rowSpan="2"><td>{props.value}</td></tr>
                        <tr><td>Edit</td></tr>
                        <tr><td>Delete</td></tr>
                    </thead>
                </table>
                <hr />
            </li>
        </>
    )
}

export default List;