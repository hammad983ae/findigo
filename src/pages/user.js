
import React from 'react';
import Layout from '../components/Layout';
import './user.css';

const User = () => {
    return (
        <Layout>
            <div className="user-page">
                <div className="header">
                    <h2>User</h2>
                    <input type="text" placeholder="Search" className="search-bar" />
                </div>
                <div className="breadcrumb">
                    <span>Home / Admin / User</span>
                </div>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CNIC</th>
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Placeholder data - Replace with actual data from DB */}
                        <tr>
                            <td>101</td>
                            <td>John Doe</td>
                            <td>john.doe@example.com</td>
                            <td>12345-6789012-3</td>
                            <td>555-555-5555</td>
                            <td>Admin</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Jane Smith</td>
                            <td>jane.smith@example.com</td>
                            <td>12345-6789012-4</td>
                            <td>555-555-5556</td>
                            <td>Vendor</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default User;
