import ellipsis from "../../img/icon-ellipsis.svg"

const ContainerWeek = ({ title, current, previous, timeframe }) => {
    return (
        <div className="gridContainer">
            <article>
                <div className="flex-sb">
                    <span className="title">{title}</span>
                    <img className="ellipsis" src={ellipsis} alt="ellipsis" />
                </div>
                <div className="flex-sb2">
                    <span className="hours">{current}<span className="hours">hrs</span></span>
                    <span className="timeframe">{timeframe}<span className="timeframe">{previous}</span></span>
                </div>
            </article>
        </div>
    );
}

export default ContainerWeek;