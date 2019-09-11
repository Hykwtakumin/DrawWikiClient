import React, {useState, useEffect, useContext, useRef} from "react";
import {StyleSheet, Text, View, WebView, Linking} from "react-native";
import {OverHeadSVG} from "./components/OverHeadSVG";
import {NavigationButtons} from "./components/NavigationButtons";
import {URLBar} from "./components/URLBar";
// import { Constants, WebBrowser } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import {Constants} from "expo/build/globals.web";
import * as Google from 'expo-google-app-auth';

//認証をうまいことする必要がある
export default function App() {

    const [pageURL, setPageURL] = useState<string>("https://scrapbox.io/uipedia/");
    const [redirectData, setRiderctData] = useState<any>(null);
    const [accessToken, setAccessToken] = useState<string>("");
    const [idToken, setIdToken] = useState<string>("");
    const [refreshToken, setRefreshToken] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [userImage, setUserImage] = useState<string>("");
    const webView = useRef<WebView>(null);

    const customHeader = {
        Authorization: `Bearer `
    };

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

    const handleAuth = async () => {

        try {
            const result = await Google.logInAsync({
                androidClientId: "",
                iosClientId: "",
                scopes: ['profile', 'email'],
                androidStandaloneAppClientId: "",
                behavior: 'web',
                clientId: "",
                iosStandaloneAppClientId: "",
                redirectUrl: "",
                webClientId: ""
            });

            if (result.type === 'success') {
                //return result.accessToken;
                console.log("success!");
                console.dir(result);
                setAccessToken(result.accessToken);
                setIdToken(result.idToken);
                setRefreshToken(result.refreshToken);
                setUserName(result.user.name);
                setUserImage(result.user.photoUrl);
                alert(`Welcome! ${result.user.name}`);
            } else {
                //return { cancelled: true };
                console.log(result);
            }
        } catch (e) {
            //return { error: true };
            console.log(e);
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
                source={{
                    uri: pageURL, headers: {
                        "Authorization": `Bearer ${accessToken}`
                    }
                }}
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
        flex: 1,
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
