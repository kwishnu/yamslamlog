import config from '../config/config';
import colors from '../config/colors';
import {convertFont} from '../config/config';
const scrWidth = config.scrWidth;
const scrHeight = config.scrHeight;
const themeColorLight = colors.themeColorLight;
// const themeTextLight = colors.themeTextLight;

// const tablet = scrHeight/scrWidth > 1.77?false:true;

const launch_styles = {

containerView: {
  display: 'flex',
  flex: 1,
  position: 'absolute',
  top: 150,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: 'rgba(0, 0, 0, 0)',
  zIndex: 100,
},
modalView: {
  display: 'flex',
  flexDirection: 'column',
  height: scrHeight,
  width: config.isPC?scrHeight * 9/16:scrWidth * 1.1,
  borderRadius: 5,
  paddingLeft: 10,
  paddingRight: 10,
  alignItems: "center",
  zIndex: 100,
},
headerImageContainer: {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  height: scrHeight/11,
  width: config.scrHeight * 9/16,
},
modalBody: {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: "center",
  alignSelf: 'stretch',
  padding: 40,
  // background: `linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
  //   linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
  //   linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
  //   linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
  //   linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
  //   linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)`,
  // backgroundColor: '#131313',
  // backgroundSize: '20px 20px',

//   background:
//   `radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
//   radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
//   linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
//   linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
//   linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
//   linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1`,
// backgroundSize: '40px 60px',


// '--s': '80px', /* control the size */
// '--c': '#542437',

// '--_g': 
//   '#0000 calc(-650%/13) calc(50%/13),var(--c) 0 calc(100%/13), ' +
//   '#0000 0 calc(150%/13),var(--c) 0 calc(200%/13), ' +
//   '#0000 0 calc(250%/13),var(--c) 0 calc(300%/13)',
// '--_g0': 'repeating-linear-gradient(45deg,var(--_g))',
// '--_g1': 'repeating-linear-gradient(-45deg,var(--_g))',
// background:
//   'var(--_g0),var(--_g0) var(--s) var(--s), ' +
//   'var(--_g1),var(--_g1) var(--s) var(--s) #C02942',
// backgroundSize: 'calc(2 * var(--s)) calc(2 * var(--s))',



  '--s': '200px', /* control the size */
  '--c': '#fff', /* first color */
  
  '--_g': '#0000 8%,var(--c) 0 17%,#0000 0 58%',
  background: 
    `linear-gradient(135deg,#0000 20.5%,var(--c) 0 29.5%,#0000 0) 0 calc(var(--s)/4),
    linear-gradient( 45deg,var(--_g)) calc(var(--s)/2) 0,
    linear-gradient(135deg,var(--_g),var(--c) 0 67%,#0000 0),        
    linear-gradient( 45deg,var(--_g),var(--c) 0 67%,#0000 0 83%,var(--c) 0 92%,#0000 0),
    #1095c1`, /* second color */
  backgroundSize: 'var(--s) var(--s)',





  // background:
  // `linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
  // linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px`,
  // backgroundColor: "#708090",
  // backgroundSize: "64px 128px",

  borderRadius: 10,
  boxShadow: "inset 0px 6px 10px #000000"
},
intro_container: {
  display: 'flex',
  height: "auto",
  flexDirection: 'column',
  justifyContent: "flex-start",
  alignItems: "flex-start",
  alignSelf: 'stretch',
  backgroundColor: themeColorLight,
  padding: 20,
  borderRadius: 20,
  marginTop: 10,
  marginBottom: 20,
  boxShadow: "inset 4px 6px 10px #000000"
},
button_container: {
  display: 'flex',
  height: "auto",
  flexDirection: 'row',
  justifyContent: "center",
  alignItems: "center",
  alignSelf: 'stretch',
  padding: 20,
  borderRadius: 20,
  marginBottom: 20,
  boxShadow: "inset 4px 6px 10px #000000"
},
launchButton: {
  display: 'flex',
  width: scrHeight * 0.08,
  height: scrHeight * 0.06,
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  margin: 10,
  marginBottom: 15,
  borderRadius: 15,
  boxShadow: `4px 8px 12px ${colors.gray_4}`,
},
labelContainer: {
  display: 'flex',
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: 'stretch',
  backgroundColor: colors.transparent,
  margin: 10,
},
labelBackground: {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.themeColorDark,
  borderWidth: 2, 
  borderStyle: 'solid',
  borderRadius: 15,
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 6,
  paddingBottom: 6,
},
streak_cell: {
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
},
streak_text_bubble: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.off_black,
  borderColor: colors.themeColorLight,
  borderStyle: 'solid',
  borderWidth: 2,
  borderRadius: 7,
  marginTop: 6,
},
streak_number_text: {
  fontSize: convertFont(20),
  color: colors.bright_green,
  margin: '4px 0px 4px 0px', 
},
streak_text_div: {
  display: "flex", 
  flexDirection: "row", 
  alignContent: 'flex-end',
},
streak_text: {
  margin: '5px 14px 5px 14px', 
  padding: '0px 6px 0px 6px', 
  color: colors.text_white,
  backgroundColor: colors.themeColorDark,
  alignSelf: 'flex-end',
  fontSize: 16,
  fontFamily: "system-ui",
  userSelect: 'none',
},
button_text_white: {
  fontFamily: "system-ui",
  fontWeight: "bold",
  fontSize: convertFont(20),
  color: colors.off_white,
  textAlign: "center",
  userSelect: 'none',
  whiteSpace: 'pre-line'
},
title: {
  fontSize: config.isPC?convertFont(24):convertFont(22),
  fontFamily: "Acme",
  userSelect: 'none',
},
text: {
  fontSize: config.isPC?convertFont(18):convertFont(16),
  fontFamily: "system-ui",
  userSelect: 'none',
  color: colors.themeTextLight
},
}

export default launch_styles;