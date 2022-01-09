import data from "../../data.json"
import ContainerWeek from "../weekly/Container"

const Content = () => {
    return (
        <section className="grid">
            {data.map(elt => <ContainerWeek
                title={elt.title}
                current={elt.timeframes.daily.current}
                previous={`${elt.timeframes.daily.previous}hrs`}
                timeframe={"Yesterday -"}
            />)}
        </section>
    );
}

export default Content;