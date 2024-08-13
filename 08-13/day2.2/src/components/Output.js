import React from "react";

const Output = ({ todoListArr, deleteItem }) => {
    return (
        <div>
            <table id="todoListTbl" className="table table-hover">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>Confirm</th>
                        <th>Title</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoListArr.map((item) => (
                        <tr key={item.no}>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>{item.title}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => deleteItem(item.no)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Output;
