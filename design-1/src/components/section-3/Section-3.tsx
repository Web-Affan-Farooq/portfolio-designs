import React from 'react';

const Section_3 = () => {
    return (
        <div>
            <section className="section-3 w-auto text-white p-[30px]" id="section-3">
                <h1 className=' text-center text-[3rem] font-bold'>Ratings</h1>
                <div className="ratings border-l-[1px] border-fire w-[80%] m-auto h-auto p-[20px]">
                    <div className="numbers">500+ completed projects</div>
                </div>
                <br />
                <div className="ratings border-l-[1px] border-fire w-[80%] m-auto h-auto p-[20px]">
                    <div className="numbers">100% client satisfaction</div>
                </div>
                <br />
                <div className="ratings border-l-[1px] border-fire w-[80%] m-auto h-auto p-[20px]">
                    <div className="numbers">Experienced working in teams</div>
                </div>
            </section>
        </div>
    )
}

export default Section_3;