import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import GLOBAL from '../Globals';

module.exports = StyleSheet.create({
    navigationbar: {
        flexDirection: "row",
        backgroundColor: GLOBAL.COLOR.BG,
        height: 44,
        marginTop: Platform.OS == "ios" ? 20 : 0 // only for IOS to give StatusBar Space
    }, navbar_back_button: {
        width: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 10
    }, navbar_title: {
        flex: 1, alignSelf: 'center',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 70,
        fontSize: 18,
        color: GLOBAL.COLOR.TEXT,
    },
    container_full: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBAL.COLOR.BG,
    },
    scrollView_full: {
        flex: 1,
        alignSelf: 'stretch',
    },
    logo: {
        width: 75,
        height: 75
    },
    loadingComponent: {
        backgroundColor: 'white'
    },
    text_white: {
        alignSelf: 'center',
        color: 'white',
    },
    text: {
        alignSelf: 'center',
        color: GLOBAL.COLOR.TEXT,
    },
    single_label_text: {
        alignSelf: 'stretch',
        color: GLOBAL.COLOR.TEXT,
        fontSize: 16,
    },
    single_input_text: {
        alignSelf: 'stretch',
        height: 44,
        borderRadius: 22,
        backgroundColor: GLOBAL.COLOR.BG_TEXT,
        color: GLOBAL.COLOR.TEXT,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
    },
    contain_button: {
      width: 180,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: GLOBAL.COLOR.PRIMARY,
    },
    button: {
        overflow: 'hidden',
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: '400',
        color: 'white',
        fontSize: 16,
    },
    image_left_draw: {
        width: 50,
        height: 50,
    }
    , login_facebook: {
        width: 180,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: "center",
        backgroundColor: '#5855d6',
        fontWeight: '400',
        color: 'white',
        fontSize: 16,
    }, login_google: {
        width: 180,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: "center",
        backgroundColor: 'red',
        fontWeight: '400',
        color: 'white',
        fontSize: 16,
    },
    tabbar_icon: {
        flex:1,
        width: 29,
        height: 29,
        resizeMode:'contain'
      },
});
