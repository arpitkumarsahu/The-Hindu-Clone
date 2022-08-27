import React from "react";
import Ticker, { NewsTicker } from "nice-react-ticker";
import styles from "./singlePage.module.css";
function Ticcker(props) {
  return (
    <div>
      <div className={styles.newsticker}>
        <Ticker show={true} isNewsTicker={true} backgroundColour="white">
          <NewsTicker
            id="1"
            title="Court orders release of Telangana MLA Raja Singh; says procedure not followed in arrest "
          />
          <NewsTicker
            id="2"
            title="India-China dispute casts gloom over space project"
          />
          <NewsTicker
            id="3"
            title="Congress launches Bharat Jodo Yatra tagline, logo"
          />
          <NewsTicker
            id="4"
            title="DRDO, Indian Navy test fire indigenous Vertical Launch Short Range surface-to-air missile"
          />
          <NewsTicker
            id="5"
            title="Supreme Court strikes down provision of 1988 Benami law"
          />
          <NewsTicker
            id="6"
            title="Bilkis Bano case | Supreme Court to consider hearing plea against remission of 11 convicts"
          />
        </Ticker>
      </div>
    </div>
  );
}

export default Ticcker;
