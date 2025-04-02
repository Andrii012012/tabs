import './styles.css';
import { Tabs } from "../../components/Tabs/Tabs";

export default function Home() {
    return (
        <>
            <Tabs />
            <div className='home__wrapper'>
                <div className='home__content'></div>
            </div>
        </>
    )
}