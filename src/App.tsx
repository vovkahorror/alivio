import './App.scss';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Solutions} from './components/Solutions/Solutions';
import {Community} from './components/Community/Community';
import {Pricing} from './components/Pricing/Pricing';
import {Footer} from './components/Footer/Footer';
import {Registration} from './common/components/Registration/Registration';
import {useState} from 'react';

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="App">
            <Header setIsPopupOpen={setIsPopupOpen}/>
            <main>
                <Main/>
                <Solutions/>
                <Community/>
                <Pricing/>
            </main>
            <Footer/>
            <Registration isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
        </div>
    );
}

export default App;
