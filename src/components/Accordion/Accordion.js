import React, { useState } from 'react'
import { questions } from './AccordionApi'
import './Accordion.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import MyAccordion from './MyAccordion'

const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <div className="container">
                <h1 className='text-center text-danger my-4'>Accordions</h1>
                <h4 className="text-center text-secondary">Regular Accordion</h4>
                <div className="accordion" id="regularAccordionRobots">
                    {
                        data.map((currentEle, index) => {
                            return <MyAccordion
                                id={currentEle.id}
                                question={currentEle.question}
                                answer={currentEle.answer}
                            />
                        })
                    }
                </div>
                <hr />
                <h1 className='text-center text-danger my-4'>Welcome</h1>
                <div className="row my-4">
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height={'250px'}  />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height={'250px'} />
                            <div class="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://picsum.photos/202/300" className="card-img-top" alt="..." height={'250px'} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion