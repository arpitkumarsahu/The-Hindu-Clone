import React from "react";
import { Fragment } from "react";
import styles from "./singlePage.module.css";

import Ticcker from "./Ticker";
import { useSelector } from "react-redux";
import { FaFacebookF, FaReddit, FaTwitter } from "react-icons/fa";

function Singlepage() {
  const news = useSelector((state) => state.news);
  console.log(news);
  return (
    <Fragment>
      <div className={styles.container}>
        <br />
        <div className={styles.headnews}>
          <div className={styles.breakingti}>Must Read</div>

          <div className={styles.breakingbox}><Ticcker /></div>
        </div>
        <div style={{ marginBottom: "-25px" }}>
          <h1 className={styles.heading}>{news.heading}</h1>
        </div>
        <div style={{ marginBottom: "-10px" }}>
          <h2 className={styles.sub_heading}>{news.subHeading}</h2>
        </div>
        <hr />
        <div className={styles.editor}>
          <div>
            <span>
              By:
              <a
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline black",
                }}
              >
                {news.author}
              </a>{" "}
              |
            </span>
            <p>{news.date}</p>
          </div>
          <div className={styles.social}>
            <div class={styles.socialdivf}>
              <a href="" className="facebook social">
                <FaFacebookF size="3x" color="white" />
              </a>
            </div>
            <div className={styles.socialdivt}>
              <a href="" className="facebook social">
                <FaTwitter size="2x" color="white" />
              </a>
            </div>
            <div className={styles.socialdivr}>
              <a href="" className="reddit social">
                <FaReddit size="2x" color="white" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={news.image} alt="" className={styles.mainimg} />
        </div>
        <span className={styles.subhe}>{news.subheading}</span>
        <hr />

        <p className={styles.maincontent}>{news.news1}</p>

        <br />
        <br />
        <p className={styles.maincontent}>{news.news2}</p>

        <br></br>
        <div className={styles.newssection}>
          <div className={styles.newsform}>
            <img
              src="https://www.thehindu.com/static/content/edm/20211011130645/EW.png"
              alt="mail logo"
              height="50"
              width="50"
            ></img>
            <p className={styles.formtitle}>
              Subscribe to receive the day's headlines from The Hindu
              straight in your inbox
            </p>

            <input
              type={"text"}
              value=""
              className={styles.input}
              placeholder="enter your email"
            />
            <input
              type={"submit"}
              value={"Subscribe"}
              style={{ background: "#00419b" , border: "none" }}
              className={styles.inputsubmit}
            ></input>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Singlepage;
