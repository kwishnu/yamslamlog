import React, { Component } from 'react';
import { motion, AnimatePresence } from "framer-motion"
// import formatDate from 'date-fns/format';
import history_styles from "../styles/history_styles";
import colors from '../config/colors';
import config from '../config/config';
const scrHeight = config.scrHeight;

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameHistory: {},
    };
  }
  componentDidMount() {
    const storedHistory = JSON.parse(localStorage.getItem('gameHistory')) || {};
    console.log("gameHistory: " + JSON.stringify(storedHistory));
    this.setState({ gameHistory: storedHistory });
  }

  componentDidUpdate(prevProps) {
    // If the component is re-rendered due to parent changes, re-fetch
    if (prevProps.refreshKey !== this.props.refreshKey) {
      this.fetchHistory();
    }
  }

  fetchHistory = () => {
    const storedHistory = JSON.parse(localStorage.getItem('gameHistory')) || {};
    this.setState({ gameHistory: storedHistory });
  };

  closeSelf(){
    this.props.requestModalClose(false);
  }

  render() {
    const closeImage = require("../images/close.png");
    const { isModalVisible } = this.props;
    const { gameHistory } = this.state;

    return(
      <AnimatePresence>
      {isModalVisible && 
        <motion.div
          initial={{ y: scrHeight }}
          animate={{ y: -2 }}
          exit={{ y: scrHeight }}
          style={{...history_styles.containerView}}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          <div style={{...history_styles.modalView, backgroundColor: colors.gray_3}}>
            <div style={history_styles.modalHeader}>
              <div style={history_styles.closeButtonContainer}>
                <div style={history_styles.title_text}>History</div>
                <img
                  style = {history_styles.close_image}
                  src={closeImage}
                  onClick={() => this.closeSelf()}
                  alt = {"Close Button"}
                />
              </div>
            </div>
            <div style={{...history_styles.modalBody, backgroundColor: colors.off_white2}}>
            <table border="1">
              <thead>
                <tr>
                  <th style={history_styles.th}>Date</th>
                  <th style={history_styles.th}>Diane Wins</th>
                  <th style={history_styles.th}>Ken Wins</th>
                  <th style={history_styles.th}>Ties</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(gameHistory).map(([date, totals]) => (
                  <tr key={date}>
                    <td style={{ textAlign: 'center', padding: 3 }}>{date}</td>
                    <td style={{ textAlign: 'center', padding: 3  }}>{totals.Diane}</td>
                    <td style={{ textAlign: 'center', padding: 3  }}>{totals.Ken}</td>
                    <td style={{ textAlign: 'center', padding: 3  }}>{totals.Ties}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </motion.div>
        }
        </AnimatePresence>
      );
  }
}

export default History;