import React from "react";
import classes from './home.module.css'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <>
        <div className={classes.container}>
          <div className={classes.home_top_container}>
            <div className={classes.ask_container}>
              <div className={classes.ask_question_container}>
                <Link to="/ask">
                  <button className=".btn-primary">Ask Question</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
