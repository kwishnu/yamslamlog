import React, { Component } from 'react';
import PageVisibility from 'react-page-visibility';
import { motion } from "framer-motion"
import formatDate from 'date-fns/format';
import { differenceInMinutes } from 'date-fns';
import colors from './config/colors';
import config from './config/config';
import LogoImage from './images/logo.png';
import styles from './styles/appStyles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      showTieDialog: false,
      winner: "",
      dianeWins: 0,
      kenWins: 0,
      diPercentage: 0,
      kenPercentage: 0,
      date: "",
      visible: true
    }
  }

  componentDidMount() {
    const prettyDate = formatDate(new Date(), "EEEE, MMMM d");
    console.log("prettyDate: " + prettyDate);
    let kenWins = localStorage.getItem("Ken Wins");
    if (kenWins === null) {
      localStorage.setItem("Ken Wins", 0);
      kenWins = 0; // Default value
    } else {
      kenWins = parseInt(kenWins, 10);
    }
  
    let dianeWins = localStorage.getItem("Diane Wins");
    if (dianeWins === null) {
      localStorage.setItem("Diane Wins", 0);
      dianeWins = 0; // Default value
    } else {
      dianeWins = parseInt(dianeWins, 10);
    }

    const totalVictories = kenWins + dianeWins;
    let kenPercentage = totalVictories > 0 ? Math.floor((kenWins / totalVictories) * 100) : 0;
    const diPercentage = totalVictories > 0 ? Math.floor((dianeWins / totalVictories) * 100) : 0;
    kenPercentage = (kenPercentage + diPercentage < 100 && kenPercentage + diPercentage !== 0)? kenPercentage + 1:kenPercentage;

      this.setState({ kenWins, dianeWins, diPercentage, kenPercentage, date: prettyDate });
  }

  handleOpenDialog(name) {
    if(name === "Tie"){
      this.setState({ showTieDialog: true, winner: name });
    }else{
      this.setState({showDialog: true, winner: name});
    }
  }

  handleCloseDialog(which){
    if(which === "Win"){
      this.setState({ showDialog: false });
    }else{
      this.setState({showTieDialog: false});
    }
  }

  handleAdd = () => {
    const { winner, dianeWins, kenWins } = this.state;

    let newVictoryCountDi = dianeWins;
    let newVictoryCountKen = kenWins;
    let winnerString = "";

    if (winner === "Diane") {
      newVictoryCountDi += 1;
      this.setState({ dianeWins: newVictoryCountDi });
      winnerString = winner + " Wins";
      localStorage.setItem(winnerString, newVictoryCountDi);
    } else if (winner === "Ken") {
      newVictoryCountKen += 1;
      winnerString = winner + " Wins";
      this.setState({ kenWins: newVictoryCountKen });
    }

    const totalVictories = newVictoryCountDi + newVictoryCountKen;
    const diPercentage = totalVictories > 0 ? Math.floor((newVictoryCountDi / totalVictories) * 100) : 0;
    let kenPercentage = totalVictories > 0 ? Math.floor((newVictoryCountKen / totalVictories) * 100) : 0;
    kenPercentage = (kenPercentage + diPercentage < 100 && kenPercentage + diPercentage !== 0)? kenPercentage + 1:kenPercentage;

    this.setState({
      diPercentage,
      kenPercentage,
    });      
    this.handleCloseDialog();
  };

  handleVisibilityChange(visible) {
    if (visible) {
      const currentTime = new Date();
      const minutesSinceVisible = differenceInMinutes(currentTime, new Date(this.state.lastVisibleTime));

      if (!this.state.visible && minutesSinceVisible >= 15) {
        window.location.reload(); // Reload the page
      }
    }else{
      this.setState({ visible: false });
    }
  }

  render() {
    const { showDialog, showTieDialog, winner, kenWins, dianeWins, kenPercentage, diPercentage, date } = this.state;

    return (
      <PageVisibility onChange={isVisible => this.handleVisibilityChange(isVisible)}>
        <div style={styles.appContainer}>
          {showDialog && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                borderRadius: "8px",
                zIndex: 1000,
              }}
            >
              <p>Add a victory for {winner}?</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>

                <button
                  onClick={() => this.handleCloseDialog("Win")}
                  style={{...styles.confirm_button, backgroundColor: "red"}}
                >
                  <div style={styles.confirm_button_text}>
                    Cancel
                  </div>
                </button>
                <button
                  onClick={() => this.handleAdd("Win")}
                  style={{...styles.confirm_button, backgroundColor: "green"}}
                >
                  <div style={styles.confirm_button_text}>
                    Add
                  </div>
                </button>
              </div>
            </div>
          )}
          {showTieDialog && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                borderRadius: "8px",
                zIndex: 1000,
              }}
            >
              <p>Enter a Tie Game?</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={() => this.handleCloseDialog("Tie")}
                  style={{...styles.confirm_button, backgroundColor: "red"}}
                >
                  <div style={styles.confirm_button_text}>
                    Cancel
                  </div>
                </button>
                <button
                  onClick={() => this.handleAdd("Tie")}
                  style={{...styles.confirm_button, backgroundColor: "green"}}
                >
                  <div style={styles.confirm_button_text}>
                    Add
                  </div>
                </button>
              </div>
            </div>
          )}

        <div 
          id="appLeftBox"
          style={{ ...styles.adBox, backgroundColor: colors.gray_3, borderRightColor: colors.off_black, left: 0 }}
        />
        <div style={styles.gamesCountContainer}>
          <div style={styles.gamesCountDiv}>
            <div style={{height: "100%", width: "50%"}}>
              <div style={styles.gamesLabelText}>
                Total Games:
              </div>
            </div>
            <div style={styles.gamesFieldDivOuter}>
              <div style={styles.fieldDiv}>
                <div style={styles.field}>
                  <div style={styles.field_text}>{kenPercentage}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div
          style={styles.centerContainer}
        >
          <div style={styles.date_text}>{date}</div>
          <div 
            style={styles.headerImageContainer}
          >
            <img src={LogoImage} alt={"Logo"} style={{width: config.scrHeight/5, height: config.scrHeight/5, marginTop: 20}}/>
          </div>

          <div 
            style={styles.addButtonsContainer}
          >
            <motion.button 
              style={{...styles.add_button, backgroundColor: 'magenta', borderColor: colors.accent_purple, }}
              whileTap={{ scale: 0.95 }} 
              onClick={() => this.handleOpenDialog("Diane")}
            >
              <div style={styles.button_text}>DIANE</div>
            </motion.button>

            <motion.button 
              style={{...styles.add_button, backgroundColor: 'blue', borderColor: colors.gray_4, }}
              whileTap={{ scale: 0.9 }} 
              onClick={() => this.handleOpenDialog("Ken")}
            >
              <div style={styles.button_text}>KEN</div>
            </motion.button>
        </div>
        <div style={styles.resultsContainer}>
            <div style={styles.results}>
              <div style={styles.labelDiv}><p style={styles.labelText}>Wins:</p></div>
              <div style={styles.fieldDiv}>
                <div style={styles.field}>
                  <div style={styles.field_text}>{dianeWins}</div>
                </div>
              </div>
              <div style={styles.labelDiv}><p style={styles.labelText}>Percentage:</p></div>
              <div style={styles.fieldDiv}>
                <div style={styles.field}>
                  <div style={styles.field_text}>{diPercentage}</div>
                </div>
              </div>
            </div>

            <div style={styles.results}>
              <div style={styles.labelDiv}></div>
              <div style={styles.fieldDiv}>
                <div style={styles.field}>
                  <div style={styles.field_text}>{kenWins}</div>
                </div>
              </div>
              <div style={styles.labelDiv}></div>
              <div style={styles.fieldDiv}>
                <div style={styles.field}>
                  <div style={styles.field_text}>{kenPercentage}</div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.resultsButtonContainer}>
            <motion.button 
              style={{...styles.tie_button, backgroundColor: colors.button_blue, borderColor: colors.bright_green, marginRight: 15 }}
              whileTap={{ scale: 0.95 }} 
              onClick={() => this.handleOpenDialog("Tie")}
            >
              <div style={styles.resultsButtonText}>Tie</div>
            </motion.button>
            <motion.button 
              style={{...styles.results_button, backgroundColor: colors.dark_green, borderColor: colors.bright_green, }}
              whileTap={{ scale: 0.95 }} 
              onClick={() => this.handleOpenDialog("Diane")}
            >
              <div style={styles.resultsButtonText}>Show Tabulated Results</div>
            </motion.button>
          </div>
        </div>

        <div 
          id="appRightBox"
          style={{ ...styles.adBox, backgroundColor:colors.gray_3, borderRightColor: colors.off_black, right: 0 }}
        />
        </div>
      </PageVisibility>
    );
  }
}

export default App;