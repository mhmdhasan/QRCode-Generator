import Form from './components/Form';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Preview from './components/Preview';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Settings from './components/Settings';

function App() {
    return (
        <>
            <Hero />
            <section className='pt-4 pb-5'>
                <div className='container'>
                    <div className='row g-5'>
                        <div className='col-lg-9 order-1 order-lg-2'>
                            <Nav />
                            <Form />
                            <Settings />
                        </div>

                        <Preview />
                    </div>
                </div>
            </section>
            <HowItWorks />
            <Footer />
        </>
    );
}

export default App;
