import './Dashboard.css'
const Dashboard = ({ bottleCount }) => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-bucket">
                <p>Account Number<br/>20023894</p>
            </div>
            <div className="dashboard-bucket" id="count">
            <p>Bottle Count<br/><span>{bottleCount}</span></p>
            </div>
            <div className="dashboard-bucket" id="value">
            <p>Total Market Value<br/><span>$12,633.00</span></p>
            </div>
            <div className="dashboard-bucket" id="gain">
            <p>Unrealized gain<br/><span>$2,395.00 (23.40%)</span></p>
            </div>
        </div>
    )
}

export default Dashboard