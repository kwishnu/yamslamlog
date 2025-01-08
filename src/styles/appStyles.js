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
    height: scrHeight/5,
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
    padding: 20,
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
    borderRadius: 5,
    borderWidth: 2, 
    borderStyle: 'solid',
    boxShadow: `10px 10px 36px ${colors.off_black}`,
    padding: 10
  },
  resultsButtonText: {
    fontSize: 18,
    color: colors.off_white,
  },
  results: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "50%",
    },
  labelDiv: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "15%",
    width: "100%",
    },
  labelText: {
    fontSize: 26,
    color: colors.off_white,
    marginLeft: 10
  },
  fieldDiv: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    height: "35%",
    width: "100%",
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
    fontSize: 48
  },
  date_text: {
    color: colors.text_white,
    fontSize: 28
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

  },
  footerText: {
    fontSize: 14,
    color: colors.off_white,
    textAlign: "center",
    userSelect: 'none'
  },

}

export default appStyles;