import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");



export const COLORS = {
    primary: "#FF6C44", //orange
    transparentPrimray: 'rgba(227, 120, 75, 0.4)',
    orange: "#FFA133",
    purple: "#3F478E",
    pink: "#CD6983",
    darkpink1: "#DB5578",
    darkpink: "#902641",
    darkpink2: "#BB3759",
    lightpurple: "#868DC9",
    lightpink: "#E2A5B5",
    lightOrange: "#FFA133",
    lightOrange2: "#FDDED4",
    lightOrange3: '#FFD9AD',
    green: "#27AE60",
    darkGreen: "#199baa",
    darkGreen1: "#4fb6b2",
    red: "#FF1717",
    blue: '#0064C0',
    primaryBlur: "#58cced",
    lightblue1: "#86a4c0" ,
    lightblue2: "#2676c0",
    lightblue3: "#87c3fa",
    lightblue4: "#B2D7F9",
    darkBlue: "#111A2C",
    darkGray: "#525C67",
    darkGray1: "#c4c6c8",
    darkGray2: "#757D85",
    darkGray3: "#A2A6Ae",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    lightGray: "#b4b4b4",
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    white2: "#FBFBFB",
    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "PoppinsBlack", },
    h1: { fontFamily: "PoppinsBold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "PoppinsBold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "PoppinsSemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "PoppinsSemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "PoppinsSemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "PoppinsRegular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "PoppinsRegular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "PoppinsRegular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "PoppinsRegular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "PoppinsRegular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const colour = {
    gray: '#D1D3D2',
    gray2: '#666666',
    darkGray: '#676767',
    orange: '#F35D38',
    black: '#0C0D0E',
    blue: '#1C215D',
    blue2: '#013360',
    blueFaded: '#8D8FAD',
    white: '#FBFCFE',
    pink: "#CD6983",
};

const appTheme = { COLORS, SIZES, FONTS, colour };

export default appTheme;