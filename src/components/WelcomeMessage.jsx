import React from "react";
import styles from "./WelcomeMessage.module.css"; //  Uses CSS Modules for scoped styling
import ShinyText from "./ShinyText"; //  Reusing the animated text component

const WelcomeMessage = () => {
  return (
    <>
      <ShinyText
        text="Enjoy Your Day"
        disabled={false} //  Allows toggling animation dynamically
        speed={3} // Controls animation speed
        className={styles.welcome} // Ensure `.welcome` exists in the CSS module
      />
    </>
  );
};

export default WelcomeMessage;
