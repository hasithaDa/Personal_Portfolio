import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="qualification section" id="about">
        <h2 className="section__title">About</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          <AnimatePresence mode="wait">
            {toggleState === 1 && (
              <motion.div
                key="education"
                className="qualification__content qualification__content-active"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                    Bachelor of Information Communication Technology[BICT]
                    </h3>
                    <span className="qualification__subtitle">
                    Rajarata University of Sri Lanka
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2021 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">
                      ICT Diploma 
                    </h3>
                    <span className="qualification__subtitle">
                      Rajarata University of Sri  Lanka
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2022 - 2023
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">English Diploma</h3>
                    <span className="qualification__subtitle">
                    Lunnar Academy
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2019 - 2021
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">High School</h3>
                    <span className="qualification__subtitle">
                      Telijawila Central College
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2006 - 2019
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {toggleState === 2 && (
              <motion.div
                key="experience"
                className="qualification__content qualification__content-active"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      Logistics Team Lead
                    </h3>
                    <span className="qualification__subtitle">
                      Robotic Society Of Technology
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2024 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Member</h3>
                    <span className="qualification__subtitle">
                    Free & Open Source Software Community (FOSS) - RUSL
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2023 - Present
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Member</h3>
                    <span className="qualification__subtitle">
                    ATIT Rajarata - Association of Technology IT
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> 2022 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Photography</h3>
                    <span className="qualification__subtitle">
                      FOT Media
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i> Since 2021
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
