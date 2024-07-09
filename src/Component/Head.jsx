import React from "react";
// bg-gradient-to-r from-blue-500
import nn from "../assets/nn.jpg";
import { Link } from "react-router-dom";
const Head = () => {
  return (
    <>
      <section class="text-gray-600 body-font ">
        <div class="container mx-auto w-11/12 flex px-2 pt-28 pb-3 md:pt-32 md:pb-16 lg:pt-56 lg:w-4/5 md:flex-row text-center flex-col items-center">
          <div class="pr-0 w-11/12 m-auto text-center flex flex-col md:w-1/2 md:pr-8 lg-pr-8 md:items-start lg:flex-grow lg:pl-4">
            <h1 class="title-font sm:text-4xl md:text-left text-3xl mb-3 font-medium text-gray-900">
              Best Eye Specialist Doctor
            </h1>
            <span className="font-bold mb-2 text-red-700">Retired Chief Medical Superintendent
              Indian Railways </span>
            <p class="mb-2 leading-relaxed md:text-left">
              To deliver diagnostic, surgical, and medical services to all inpatients
              and outpatients, manage hospital administration, and establish protocols for
              comprehensive patient care.
            </p>
            <span className="font-bold text-blue-800 my-3">25 years of hospital administration experience, 17 years
              in government and 8 years in private hospital</span>
            <Link to='bookappointment' className="rounded-lg inline-flex items-center bg-blue-700 border-0 py-2 px-4 text-white">
              <button>
                book Appointment
              </button>
            </Link>
          </div>

          <div class="lg:max-w-lg lg:w-full md:px-14 mb-10 md:mb-0">
            <img
              class="border-2 border-blue-950 border-gradient-to-r from-blue-500 object-cover object-center rounded-2xl md:rounded-full"
              alt="hero"
              src={nn}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
