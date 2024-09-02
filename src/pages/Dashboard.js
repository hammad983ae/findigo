import React from 'react';
import Layout from '../components/Layout';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Layout>
            <div className="dashboard">
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Today's Users</h3>
                        <p>11</p>
                        <span>+3% than last week</span>
                    </div>
                    <div className="stat-card">
                        <h3>Total Categories</h3>
                        <p>6</p>
                        <span>No change from last month</span>
                    </div>
                    <div className="stat-card">
                        <h3>Total Services</h3>
                        <p>20</p>
                        <span>+5% than last week</span>
                    </div>
                    <div className="stat-card">
                        <h3>Verified Business</h3>
                        <p>4</p>
                        <span>+2% than last week</span>
                    </div>
                    <div className="stat-card">
                        <h3>Unverified Business</h3>
                        <p>2</p>
                        <span>-1% than last week</span>
                    </div>
                    <div className="stat-card">
                        <h3>Customer Feedback</h3>
                        <p>5</p>
                        <span>+8% than last week</span>
                    </div>
                    <div className="stat-card">
                        <h3>Business Feedback</h3>
                        <p>4</p>
                        <span>+5% than last month</span>
                    </div>
                    <div className="stat-card">
                        <h3>Resolved Complaints</h3>
                        <p>2</p>
                        <span>+5% than last month</span>
                    </div>
                    <div className="stat-card">
                        <h3>Unresolved Complaints</h3>
                        <p>3</p>
                        <span>-2% than last month</span>
                    </div>
                </div>
                <div className="charts">
                    {/* Placeholder for charts */}
                    {/* <ChartComponent /> */}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
