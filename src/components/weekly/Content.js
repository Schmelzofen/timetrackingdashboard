import ContainerWeek from './Container';
import data from "../../data.json"

const Content = () => {
    return (
        <section className="grid">
            {data.map(elt => <ContainerWeek
                title={elt.title}
                current={elt.timeframes.weekly.current}
                previous={`${elt.timeframes.weekly.previous}hrs`}
                timeframe={"Last Week -"}
            />)}
        </section>
    );
}


export default Content;