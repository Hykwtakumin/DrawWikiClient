import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Constants} from 'expo';
//import * as Svg from 'react-native-svg'
//import {Circle} from 'react-native-svg'
//import SvgUri from "expo-svg-uri";

export interface OverHeadSVGProps {
    width: number,
    height: number
}

//SVGを透過レイヤー上に表示するコンポーネント
export const OverHeadSVG = () => {
    return (
        <View style={styles.container}>
            <Text>This is OverLay Text</Text>
        </View>
    );
};

//"http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
//"https://s3.us-west-1.amazonaws.com/hyper-illust-creator/hyperillust_2019-06-06-08-33-35_.svg"

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0)',
    },
});
