import React, { Component } from 'react';
import PageVisibility from 'react-page-visibility';
import { motion } from "framer-motion"
import formatDate from 'date-fns/format';
import { differenceInMinutes } from 'date-fns';
import colors from './config/colors';
import config from './config/config';
import History from "./screens/history";
import LogoImage from './images/logo.png';
import styles from './styles/appStyles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      showTieDialog: false,
      showHistoryModal: false,
      winner: "",
      dianeWins: 0,
      kenWins: 0,
      gamesPlayed: 0,
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
      kenWins = 0;
    } else {
      kenWins = parseInt(kenWins, 10);
    }
  
    let dianeWins = localStorage.getItem("Diane Wins");
    if (dianeWins === null) {
      localStorage.setItem("Diane Wins", 0);
      dianeWins = 0;
    } else {
      dianeWins = parseInt(dianeWins, 10);
    }

    let gamesPlayed = localStorage.getItem("Games Played");
    if (gamesPlayed === null) {
      localStorage.setItem("Games Played", 0);
      gamesPlayed = 0;
    } else {
      gamesPlayed = parseInt(gamesPlayed, 10);
    }

    let lastWinner = localStorage.getItem("Last Winner");
    if (lastWinner === null) {
      localStorage.setItem("Last Winner", "None");
      lastWinner = "None";
    }
    const totalWins = dianeWins + kenWins;
    let kenPercentage = totalWins > 0 ? Math.floor((kenWins / totalWins) * 100) : 0;
    const diPercentage = totalWins > 0 ? Math.floor((dianeWins / totalWins) * 100) : 0;
    kenPercentage = (kenPercentage + diPercentage < 100 && kenPercentage + diPercentage !== 0)? kenPercentage + 1:kenPercentage;

    this.setState({ kenWins, dianeWins, diPercentage, kenPercentage, date: prettyDate, gamesPlayed, lastWinner });
  }

  handleOpenDialog(which) {
    if(which === "Tie"){
      this.setState({ showTieDialog: true, winner: "Tie" });
    }else{
      this.setState({showDialog: true, winner: which});
    }
  }

  handleCloseDialog(which){
    if(which === "Win"){
      this.setState({ showDialog: false });
    }else{
      this.setState({showTieDialog: false});
    }
  }

  handleAdd(winOrTie){
    const { winner, dianeWins, kenWins, gamesPlayed } = this.state;
    let newGamesPlayed = gamesPlayed;
    newGamesPlayed += 1;
    this.setState({gamesPlayed: newGamesPlayed});
    localStorage.setItem("Games Played", newGamesPlayed);

    if(winOrTie === "Tie"){
      this.handleCloseDialog("Tie");
      return;
    }

    let newVictoryCountDi = dianeWins;
    let newVictoryCountKen = kenWins;
    let winnerString = "";
    let lastWinner = "";

    if (winner === "Diane") {
      newVictoryCountDi += 1;
      this.setState({ dianeWins: newVictoryCountDi });
      winnerString = "Diane Wins";
      lastWinner = "Diane";
      localStorage.setItem(winnerString, newVictoryCountDi);
    } else if (winner === "Ken") {
      newVictoryCountKen += 1;
      winnerString = "Ken Wins";
      lastWinner = "Ken";
      localStorage.setItem(winnerString, newVictoryCountKen);
      this.setState({ kenWins: newVictoryCountKen });
    }

    const totalVictories = newVictoryCountDi + newVictoryCountKen;
    const diPercentage = totalVictories > 0 ? Math.floor((newVictoryCountDi / totalVictories) * 100) : 0;
    let kenPercentage = totalVictories > 0 ? Math.floor((newVictoryCountKen / totalVictories) * 100) : 0;
    kenPercentage = (kenPercentage + diPercentage < 100 && kenPercentage + diPercentage !== 0)? kenPercentage + 1:kenPercentage;

    this.setState({
      diPercentage,
      kenPercentage,
      gamesPlayed: newGamesPlayed,
      lastWinner
    });      
    this.handleCloseDialog("Win");
  };

  toggleHistoryModal(open){
    if(open){
      this.setState({showHistoryModal: true});
    }else{
      this.setState({showHistoryModal: false});
    }
  }

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
    const { showDialog, 
            showTieDialog, 
            winner, 
            kenWins, 
            dianeWins, 
            gamesPlayed, 
            kenPercentage, 
            diPercentage, 
            date, 
            lastWinner 
          } = this.state;

    return (
      <PageVisibility onChange={isVisible => this.handleVisibilityChange(isVisible)}>
        <div style={styles.appContainer}>
          {showDialog && (
            <div style={styles.dialogBox}>
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
            <div style={styles.dialogBox}>
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
              <div style={styles.gamesFieldDiv}>
                <div style={styles.field}>
                  <div style={styles.field_text}>{gamesPlayed}</div>
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
              style={{...styles.add_button, backgroundColor: lastWinner === "Diane"?colors.dark_green:lastWinner === "Ken"?colors.red:'magenta', borderColor: colors.gray_4, }}
              whileTap={{ scale: 0.95 }} 
              onClick={() => this.handleOpenDialog("Diane")}
            >
              <div style={styles.button_text}>DIANE</div>
            </motion.button>

            <motion.button 
              style={{...styles.add_button, backgroundColor: lastWinner === "Ken"?colors.dark_green:lastWinner === "Diane"?colors.red:'blue', borderColor: colors.gray_4, }}
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
              onClick={() => this.toggleHistoryModal(true)}
            >
              <div style={styles.resultsButtonText}>Show Tabulated Results</div>
            </motion.button>
          </div>
        </div>

        <div 
          id="appRightBox"
          style={{ ...styles.adBox, backgroundColor:colors.gray_3, borderRightColor: colors.off_black, right: 0 }}
        />
        <History
          isModalVisible={this.state.showHistoryModal}
          requestModalClose={(open) => { this.toggleHistoryModal(open) }}
        />
        </div>
      </PageVisibility>
    );
  }
}

export default App;