import config from '../config/config';
import colors from '../config/colors';
const scrWidth = config.scrWidth;
const scrHeight = config.scrHeight;
const tablet = config.isTablet;

const history_styles = {

containerView: {
  display: 'flex',
  flex: 1,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: 'rgba(0, 0, 0, 0)',
  zIndex: 1000
},
modalView: {
  display: 'flex',
  flexDirection: 'column',
  height: "90%",
  width: config.isPC?scrHeight * 0.4:scrWidth * 0.85,
  borderRadius: 5,
  padding: 10,
  alignItems: "center",
  boxShadow: `10px 20px 30px ${colors.black}`,
  zIndex: 100
},
modalHeader: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "flex-start",
  alignItems: "center",
  height: 74,
  alignSelf: "stretch",
  paddingLeft: tablet?scrWidth * 0.01:0,
},
titleContainer: {
  display: 'flex',
  flex: 4,
  justifyContent: "flex-start",
  alignItems: "flex-start",
},
closeButtonContainer: {
  display: 'flex',
  flex: 2,
  justifyContent: "space-between",
  alignItems: "flex-end",
  zIndex: 1000
},
modalBody: {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: "flex-start",
  alignItems: "center",
  alignSelf: 'stretch',
  padding: 12,
  overflowY: "auto",
  //width: config.isPC?scrHeight * 9/16 - 30:scrWidth * 0.9,
  borderRadius: 10,

},
title_text: {
  color: colors.text_white,
  fontSize: 36,
  userSelect: 'none'
},
th: {
  padding: '3px 10px 3px 10px',
  backgroundColor: colors.gray_1
}
}

export default history_styles;