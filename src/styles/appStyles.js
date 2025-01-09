import colors from '../config/colors';
import config from '../config/config';
const pc = config.isPC;
// const tablet = config.isTablet;
// const phone = config.isPhone;
const scrHeight = window.innerHeight;
const scrWidth = window.innerWidth;
const widthLeftOrRight = (scrWidth - scrHeight * 9/16)/2 + 20;

const appStyles = {
  appContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: scrHeight,
    width: scrWidth,
    maxWidth: scrWidth,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: "hidden",
    zIndex: -1,
    backgroundColor: '#95ac01'
  },
  adBox: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: pc ? widthLeftOrRight - 40 : 0,
    borderStyle: "solid",
    borderWidth: 2,
    zIndex: 1000,
  },
  dialogBox: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
    zIndex: 1000,
  },
  gamesCountContainer: {
    position: "fixed",
    top: "20%",
    left: "50%",
    // height: 30,
    // width: "80%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
    borderColor: 'red', borderWidth: 2,
    zIndex: 1000,
},
  gamesCountDiv: {
    display: "flex",
    flexDirection: "row",
    width: scrHeight/2,
    height: 40,
    borderColor: 'yellow', borderWidth: 2,
},
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: scrHeight,
    width: config.scrHeight * 9/16 - 50,
    padding: 20,
    },
  headerImageContainer: {
    // display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: scrHeight/7,
    // width: config.scrHeight * 9/16,
    // padding: 20,
    },
  addButtonsContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    height: scrHeight/6,
    width: config.scrHeight * 9/16 - 50,
    padding: 20,
    },
  add_button: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '50%',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 15,
    borderWidth: 2, 
    borderStyle: 'solid',
    boxShadow: `10px 10px 36px ${colors.off_black}`,
  },
  resultsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    height: scrHeight/4,
    width: config.scrHeight * 9/16 - 50,
    justifyContent: 'center',
    // padding: 20,
    borderColor: colors.gray_4, 
    borderWidth: 2, 
    borderStyle: 'solid',
    backgroundColor: colors.gray_2
    },
  resultsButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 100,
    width: config.scrHeight * 9/16 - 50,
    },
  results_button: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: "80%",
    borderRadius: 5,
    borderWidth: 2, 
    borderStyle: 'solid',
    boxShadow: `10px 10px 36px ${colors.off_black}`,
    padding: 40
  },
  tie_button: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: "80%",
    borderRadius: 5,
    borderWidth: 2, 
    borderStyle: 'solid',
    boxShadow: `10px 10px 36px ${colors.off_black}`,
    padding: 30
  },
  resultsButtonText: {
    fontSize: 18,
    color: colors.off_white,
  },
  results: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "100%",
    width: "50%",
  },
  labelDiv: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "15%",
    width: "100%",
    marginTop: 8
  },
  labelText: {
    fontSize: 26,
    color: colors.off_white,
    marginLeft: 10,
    userSelect: "none"
  },
  gamesLabelText: {
    fontSize: 20,
    color: colors.off_white,
    marginLeft: 10,
    userSelect: "none"
  },
  fieldDiv: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  gamesFieldDiv: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: "35%",
    marginRight: 10
  },
  gamesFieldDivOuter: {
    height: "100%", 
    width: "50%", 
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button_text: {
    fontSize: 32,
    color: colors.off_white,
    userSelect: "none"
  },
  field: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.off_black,
    borderColor: colors.gray_2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16
  },
  field_text: {
    fontFamily: "system-ui",
    color: colors.bright_green,
    fontSize: 30,
    userSelect: 'none'
  },
  date_text: {
    color: colors.text_white,
    fontSize: 28,
    userSelect: 'none'
  },
  confirm_button: {
    padding: "20px 60px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: 5,
    marginLeft: 5
},
  confirm_button_text: {
    fontSize: 20,
    color: colors.off_white,
    userSelect: 'none'
  },
  footerText: {
    fontSize: 14,
    color: colors.off_white,
    textAlign: "center",
    userSelect: 'none'
  },

}

export default appStyles;