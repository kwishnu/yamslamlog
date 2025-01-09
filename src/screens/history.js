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
      darkModeEnabled: true,
      showUpgradeModal: false,
      showThankYouModal: false,
    };
  }
  componentDidMount() {
  }
  closeSelf(){
    this.props.requestModalClose(false);
  }
  toggleUpgradeModal(open){
    this.setState({showUpgradeModal: open});
  }
  toggleTYModal(open){
    this.setState({showThankYouModal: open});
  }
   render() {
    const closeImage = require("../images/close.png");
    const { isModalVisible } = this.props;

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
                <img
                  style = {history_styles.close_image}
                  src={closeImage}
                  onClick={() => this.closeSelf()}
                  alt = {"Close Button"}
                />
              </div>
            </div>
            <div style={{...history_styles.modalBody, backgroundColor: colors.off_white2}}>

            </div>
          </div>
        </motion.div>
        }
        </AnimatePresence>
      );
  }
}

export default History;