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
                src="https://images.indianexpress.com/2022/06/Albares-Jaishankar.jpg"
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
                Spanish Foreign Minister José Manuel Albares: 'NATO must reach
                out to all countries like India which might be good partners'
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
              src="https://images.indianexpress.com/2022/06/Ranchi-violence-security-bolstered-internet-restored.jpg?resize=450,250"
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
              Ranchi violence: ‘Mob assaulted us after asking our names’
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
              src="https://images.indianexpress.com/2022/06/ajit-doval-12.jpg?resize=450,250"
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
              Doval in virtual NSAs' meet in run-up to BRICS meeting
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopComponents;
