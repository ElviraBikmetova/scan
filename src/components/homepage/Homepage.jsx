import Hero from "../hero/hero";
import Benefits from "../benefits/Benefits";
import Tariffs from "../tariffs/Tariffs";
import css from './Homepage.module.scss'

function Homepage() {
    return (
        <div>
            <Hero />
            <Benefits />
            <Tariffs />
        </div>
     );
}

export default Homepage;