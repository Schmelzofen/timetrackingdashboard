import data from "../../data.json"
import ContainerWeek from "../weekly/Container"

const Content = () => {
    return (
        <section className="grid">
            {data.map(elt => <ContainerWeek
                title={elt.title}
                current={elt.timeframes.monthly.current}
                previous={`${elt.timeframes.monthly.previous}hrs`}
                timeframe={"Last Month -"}
            />)}
        </section>
    );
}

export default Content;