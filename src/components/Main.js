import { Link } from 'react-router-dom';
import jeremy from "../img/image-jeremy.png"

const Main = () => {
    return (
        <section className="mainContainer">
            <article className="flex">
                <div>
                    <img src={jeremy} alt="human-male" />
                </div>
                <div>
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </article>
            <div className="linkContainer">
                <Link className="link" to="/">Daily</Link>
                <Link className="link" to="/weekly">Weekly</Link>
                <Link className="link" to="/monthly">Monthly</Link>
            </div>
        </section>
    );
}

export default Main;