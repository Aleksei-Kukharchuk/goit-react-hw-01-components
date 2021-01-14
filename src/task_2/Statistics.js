import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            {title !== undefined && (<h2 className="title">{title}</h2>)}
            <ul className="stat-list">
                {stats.map(element => (
                    <li className="item"
                        key={element.id}
                        style={{backgroundColor: ` rgba( ${random()} , ${random()} , ${random()} )`}}>
                        <StatisticsItem
                            label={element.label}
                            percentage={element.percentage}
                            />
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    key: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

function random() {
    return Math.floor(Math.random() * 256);
}