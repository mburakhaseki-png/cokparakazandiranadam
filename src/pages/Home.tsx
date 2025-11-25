import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Needs } from '../components/Needs';
import { Solutions } from '../components/Solutions';
import { Networking } from '../components/Networking';
import { Consultancy } from '../components/Consultancy';
import { WhoWeAre } from '../components/WhoWeAre';
import { Contact } from '../components/Contact';

export function Home() {
    return (
        <>
            <Hero />
            <About />
            <Needs />
            <Solutions />
            <Networking />
            <Consultancy />
            <WhoWeAre />
            <Contact />
        </>
    );
}
