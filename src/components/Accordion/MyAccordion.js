import React from 'react'

const MyAccordion = (props) => {
    return (
        <>
            <div class="accordion-item">
                <h2 id={'regularHeading'+props.id} class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#regularCollapse'+props.id} aria-expanded="true" aria-controls={'regularCollapseFirst'+props.id}>
                        {props.question}
                    </button>
                </h2>
                <div id={'regularCollapse'+props.id} class="accordion-collapse collapse" aria-labelledby={'regularHeading'+props.id} data-bs-parent={'#regularAccordionRobots'+props.id}>
                    <div class="accordion-body">
                        {props.answer}
                    </div>
                </div>
            </div>

            {/* <div class="accordion-item"> 
                <h2 id="regularHeadingSecond" class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseSecond" aria-expanded="false" aria-controls="regularCollapseSecond">
                        The Social Impact of Collective Artificial Intelligence
                    </button>
                </h2>
                <div id="regularCollapseSecond" class="accordion-collapse collapse" aria-labelledby="regularHeadingSecond" data-bs-parent="#regularAccordionRobots">
                    <div class="accordion-body">
                        Throughout history, robots have both embraced and rejected the act of working with other robots in a collective. While science has shown that collective artificial intelligence helps both intellectual and technological development, it has also shown that some robots really want to just be and think by themselves. How do we harness the benefits of both while avoiding the downfall of each?
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default MyAccordion