function DashboardCard({ title, value, color }) {
return (
<div className="col-md-3">
<div className={`card border-${color} shadow`}>
<div className="card-body">
<h6 className="text-muted">
{title}
</h6>
<h2>{value}
</h2>
</div>
</div>
</div>
);
}
export default DashboardCard;
