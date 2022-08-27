import React from "react";
import styles from "./TopComponent.module.css";
import SlideShow from "./SlideShow";

const TopComponents = () => {
  return (
    <>
      <div className={styles.chacha}>
        <div className={styles.leftFlex}>
          <div className={styles.leftToprg}>
            <SlideShow />
          </div>
          <div className={styles.ragc}>
            <div className={styles.a}>
              <img
                src="https://images.yourstory.com/cs/2/a9efa9c02dd911e9adc52d913c55075e/MasaiSchool-1639974036906.jpg?fm=auto&ar=2:1&mode=crop&crop=faces&w=720"
                alt=""
                width="100%"
                height="150"
              />
              <p
                style={{
                  marginTop: "-8px",
                  padding: "10px",
                  boxSizing: "border-box",
                  fontFamily: "Helvetica",
                }}
              >
                Masai School acquires Data Analytics institute Prepleaf for $1M
              </p>
            </div>
            <div className={styles.b}>
              <img
                src="https://images.indianexpress.com/2022/06/EMPLOYMENT-1.jpg"
                alt=""
                width="100%"
                height="150"
              />
              <p
                style={{
                  marginTop: "-5px",
                  padding: "10px",
                  boxSizing: "border-box",
                  fontFamily: "Helvetica",
                }}
              >
                10 lakh jobs: Existing govt vacancies to account for most, 90%
                at lowest levels
              </p>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className={styles.rajat}>
          <div>
            <img
              src="https://images.yourstory.com/cs/2/a9efa9c02dd911e9adc52d913c55075e/MasaiSchoolsfounders-1616577248933.jpg?fm=auto&ar=2:1&mode=crop&crop=faces&w=720"
              alt=""
              width="100%"
              height="150"
            />
            <p
              style={{
                marginTop: "-5px",
                padding: "10px",
                boxSizing: "border-box",
                fontFamily: "Helvetica",
              }}
            >
              Edtech company Masai School raises funds from multiple unicorn
              founders
            </p>
          </div>
          <div>
            <img
              src="https://images.indianexpress.com/2022/06/Bharat-Gaurav-1200-2.jpg"
              alt=""
              width="100%"
              height="150"
            />
            <p
              style={{
                marginTop: "-5px",
                padding: "10px",
                boxSizing: "border-box",
                fontFamily: "Helvetica",
              }}
            >
              Railways flags off first private train under Bharat scheme
            </p>
          </div>
          <div>
            <img
              src="https://assets.telegraphindia.com/telegraph/2022/Mar/1648563237_masai-partners-with-nsdc-1.jpg"
              alt=""
              width="100%"
              height="150"
            />
            <p
              style={{
                marginTop: "-5px",
                padding: "10px",
                boxSizing: "border-box",
                fontFamily: "Helvetica",
              }}
            >
              NSDC and Masai join hands to prepare students for tech jobs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopComponents;
