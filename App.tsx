import React, {useState, useEffect, useContext, useRef} from "react";
import {StyleSheet, Text, View, WebView, Linking} from "react-native";
import {OverHeadSVG} from "./components/OverHeadSVG";
import {NavigationButtons} from "./components/NavigationButtons";
import {URLBar} from "./components/URLBar";
// import { Constants, WebBrowser } from 'expo';
import * as WebBrowser from 'expo-web-browser';

//認証をうまいことする必要がある
export default function App() {

    const [pageURL, setPageURL] = useState<string>("https://scrapbox.io/uipedia/");
    const webView = useRef<WebView>(null);

    const handleBack = () => {
        webView.current.goBack();
    };

    const handleForward = () => {
        webView.current.goForward();
    };

    const handleReload = () => {
        webView.current.reload();
    };

    const handleStop = () => {
        webView.current.stopLoading();
    };

    const handleEnter = (url: string) => {
        setPageURL(url);
        handleReload();
    };

    //DeepLinkとかいうのを使うらしい
    const handleAuth = async () => {
        //const redirect = await Linking.getInitialURL("/");
        const result = await WebBrowser.openAuthSessionAsync("https://scrapbox.io/login/google", "exp://");
        if (result) {
            alert(result)
        } else {
            alert("something went wrong!");
        }
    };

    const handleLoadEnd = () => {
        const loadedURL = webView.current.props.source[0] as string;
        if (loadedURL != void 0) {
            alert(loadedURL.toString());
        }
    };

    const handleChangeNavigate = () => {
        alert("Navigation Changed!");
    };


    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <NavigationButtons onBack={handleBack}
                                   onForward={handleForward}
                                   onReload={handleReload}
                                   onStop={handleStop}
                                   onAuth={handleAuth}
                />
                <URLBar onEnter={handleEnter} URL={pageURL}/>
                <Text style={styles.navCtrls}>{"ここはナビゲーションバーです"}</Text>
            </View>
            <WebView
                ref={webView}
                source={{uri: pageURL}}
                style={styles.browser}

                scrollEnabled={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgba(255,255,255,0)",
        alignItems: "stretch",
        justifyContent: "flex-start"
    },
    browser: {
        flex: 1
    },
    navBar: {
        flex: 0.08,
        flexDirection: "row",
        flexWrap: "nowrap",
        backgroundColor: "rgba(0,206,209,1)",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20
    },
    navCtrls: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        marginLeft: 10,
        marginRight: 10
    }
});
