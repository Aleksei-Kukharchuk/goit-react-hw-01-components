export default function StatisticsItem({ label, percentage }) {
    return (
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </>
    )
}

