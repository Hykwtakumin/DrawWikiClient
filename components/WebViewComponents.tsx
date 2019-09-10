import React, {Component} from "react";
import {WebView} from "react-native";

interface WebViewProps {
    url: string;
}

export const WebViewComponents = (props: WebViewProps) => {
    const url = props.url;
    return <WebView source={{uri: url}} style={{marginTop: 20}}/>;
};
