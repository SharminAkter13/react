import React from 'react';

const TableData = () => {
    return (
        <div >
            <table className="table table-info-subtle table-striped-columns m-5 p-5">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email </th>
                    <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>@mdogdg</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>@fatjhbhus</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>John</td>
                    <td>@socialff</td>
                    </tr>
            </tbody>
            </table>

        </div>
    );
};

export default TableData;