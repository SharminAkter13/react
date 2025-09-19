import React from 'react';

const TableData = () => {
    return (
        <div>
            <table class="table table-success table-striped-columns">
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
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>@social</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default TableData;