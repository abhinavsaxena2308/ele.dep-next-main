import React from 'react'
import facultyData from "../public/Data/faculty.json"

const card = () => {
    return (
        <>
            <div className="div mx-16 my-10 items-center flex flex-wrap overflow-y-hidden space-y-16 space-x-20">
                <h1 className="mx-[485px] font-serif font-medium mt-4 text-orange-700 text-7xl">Faculty</h1>
                {facultyData["faculty"].map((item, iter) => {
                    return (
                        <div className="" key={iter}>
                            <div className="card">
                                <div className="img-box">
                                    <img src={item.img} alt="img/png" className="img" />
                                </div>
                                <div className="content">
                                    <h2 className="text-2xl w-52 -ml-6">{item.name}</h2>
                                    <h2 className="text-lg">{item.position}</h2>
                                </div>
                                <div className="details w-[300px] -mb-4 -ml-10">
                                    <h4 className="flex flex-wrap">{item.details1}</h4>
                                </div>
                                <div className="details w-[300px] -mb-4 -ml-10">
                                    <h4 className="flex flex-wrap">{item.details2}</h4>
                                </div>
                                <div className="details w-[300px] -mb-4 -ml-10">
                                    <h4 className="flex flex-wrap">{item.details3}</h4>
                                </div>
                                <div className="details w-[300px] -mb-4 -ml-10">
                                    <a className="text-orange-600 ml-16 font-bold -mt-7 text-center" href={item.profileLink}>Profile Link</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default card
