import React from "react";
import Link from "next/link";
import facultyData from "../public/Data/faculty.json";
import Slider from "../Components/Slider";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";


const home = () => {
  

  
  return (
    <>
      <main className="main-body">
        <div id="home" className="card1">
          <div className="message-box">
            <h1 className=" mt-10">
              <span className=" text-white text-9xl ml-14 font-serif ">
                Ele
              </span>
              <span className=" text-orange-700 text-9xl font-serif ">
                .Dep
              </span>
              <br />
              <span className="text-white text-4xl ml-36">From Us To You</span>
            </h1>
            <h2 className="ml-8 font-semibold text-xl text-white">
              "This is a departmental website that offers numerous helpful
              resources for both faculty and students and is under development "
              <Link href="/login">
                <h5 className="mx-16">
                  To explore more ,{" "}
                  <span className="text-orange-700">login</span> into dashboard
                </h5>
              </Link>
            </h2>
          </div>
          <div className="login-box">
            {/* <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              {....getFieldProps("email")}
            />
            <input
              className="mx-7 -mt-5"
              type="password"
              placeholder="Enter Password Here"
            />
            <button className="w-60 h-12  mx-7 text-3xl rounded-xl text-white cursor-pointer hover:bg-orange-600 bg-orange-700">
              <a href="A">Login</a>
            </button> */}

          <form className="flex flex-col gap-5" >
          <div
            className={
              
                "border-rose-600 "
                
            }
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className=""
            />
          </div>

          <div
            className=
                "border-rose-600"
               
          >
            <input
              type="text"
              name="password"
              placeholder="Password"
              className=""
            />
          </div>
          <div className="">
            <button type="submit" className="bg-orange-600 h-10 w-32 rounded-md text-white text-xl">Login</button>
          </div>
          <p className="text-white mx-16">
              Don't Have an account
            </p>
            <Link href="/register">
              <p className="text-orange-600 mx-24 -mt-5">Sign up here</p>
            </Link>
        </form>

            {/* <p className="text-white mx-10 my-1">Don't Have an account</p> */}
            {/* <a href="asdfghj" className="text-white mx-16 -mt-8">
              Don't Have an account
            </a>
            <Link href="/register">
              <p className="text-orange-600 mx-24 -mt-14">Sign up here</p>
            </Link> */}
          </div>
        </div>
        <div id="about" className="div mx-16 my-10 ">
          <h1 className="text-center font-serif font-medium mt-4 text-orange-700 text-6xl">
            About Department  
          </h1>
          <p className="text-white ml-4 mb-5 text-2xl">
                      Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lour'd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;
            Our stern alarums changed to merry meetings,
            Our dreadful marches to delightful measures.
            Grim-visaged war hath smooth'd his wrinkled front;
            And now, instead of mounting barded steeds
            To fright the souls of fearful adversaries,
            He capers nimbly in a lady's chamber
            To the lascivious pleasing of a lute.
            But I, that am not shaped for sportive tricks,
            Nor made to court an amorous looking-glass;
            I, that am rudely stamp'd, and want love's majesty
            To strut before a wanton ambling nymph;
            I, that am curtail'd of this fair proportion,
            
          </p>
        </div>
        <div
          id="faculty"
          className="div mx-16 my-10 items-center flex flex-wrap overflow-y-hidden space-y-16 space-x-20"
        >
          <h1 className="mx-[485px] font-serif font-medium mt-4 text-orange-700 text-7xl">
            Faculty
          </h1>
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
                    <a
                      className="text-orange-600 ml-16 font-bold"
                      href={item.profileLink}
                      target="next"
                    >
                      Profile Link
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="gallery" className="div mx-16 my-10">
          <h1 className="mx-[350px] mb-1O font-serif font-medium mt-4 text-orange-700 text-7xl text-center">
            Photo Gallery
          </h1><br></br>
          <Slider />
        </div>

        <div id="team" className="div mx-16 my-10">
          <h1 className="mx-[485px] font-serif font-medium mt-4 text-orange-700 text-7xl">
            Team
          </h1>
          <p className="text-white ml-4 mb-5 text-2xl">
                      Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lour'd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;
            Our stern alarums changed to merry meetings,
            Our dreadful marches to delightful measures.
            Grim-visaged war hath smooth'd his wrinkled front;
            And now, instead of mounting barded steeds
            To fright the souls of fearful adversaries,
            He capers nimbly in a lady's chamber
            To the lascivious pleasing of a lute.
            But I, that am not shaped for sportive tricks,
            Nor made to court an amorous looking-glass;
            I, that am rudely stamp'd, and want love's majesty
            To strut before a wanton ambling nymph;
            I, that am curtail'd of this fair proportion,
            
          </p>
        </div>

        <br />
      </main>
    </>
  );
};

export default home;
