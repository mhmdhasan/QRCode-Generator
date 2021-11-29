import Form from './components/Form';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Preview from './components/Preview';

function App() {
    return (
        <>
            <Hero />
            <section className='pt-4 pb-5'>
                <div className='container'>
                    <div className='row g-5'>
                        <Preview />
                        <div className='col-lg-9 order-1 order-lg-2'>
                            <Nav />
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
