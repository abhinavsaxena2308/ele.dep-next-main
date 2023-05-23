import React from 'react'
import StudentData from "../public/Data/first_years.json"


const newcard = () => {
    return (
        <>
            <div className="div mx-[4.5%] my-10 items-center flex flex-wrap overflow-y-hidden space-y-[4%] space-x-[5.3%]">
                <h1 className="mx-[34%] font-serif font-medium mt-4 text-orange-700 text-7xl">Batch 2022</h1>
                {StudentData["student"].map((item, iter) => {
                    return (
                        <div className="" key={iter}>
                            <div className="stu-card -ml-9">
                                <div className="stu-img-box">
                                    <img src={item.photo} alt="img/png" className="stu-img mt-2" />
                                </div>
                                <div className="stu-content -mt-28 ml-40 text-white">
                                    <h2 className="text-2xl w-52 ">{item.name}</h2>
                                    <h2 className="text-lg ml-12">{item.roll}</h2>
                                </div>
                                <div className="stu-details  -mt-[90px] items-center">
                                    <h4 className="flex flex-wrap ml-24 mt-10">{item.number}</h4>
                                    <h4 className="flex flex-wrap ml-10">{item.email}</h4>
                                </div>
                                {/* <div className="details w-[300px] -mb-4 -ml-10">
                                    <h4 className="flex flex-wrap">{item.details3}</h4>
                                </div>
                                <div className="details w-[300px] -mb-4 -ml-10">
                                    <a className="text-orange-600 ml-16 font-bold" href={item.profileLink}>Profile Link</a>
                                </div> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default newcard
