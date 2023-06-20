import './App.scss';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Solutions} from './components/Solutions/Solutions';
import {Community} from './components/Community/Community';
import {Pricing} from './components/Pricing/Pricing';
import {Footer} from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Main/>
                <Solutions/>
                <Community/>
                <Pricing/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
