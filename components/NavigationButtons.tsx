import React, {Component, useState, useEffect, useContext} from "react";
import {StyleSheet, Text, View, Button} from "react-native";

//アイコンはベクター形式で

interface NavigationButtonsProps {
    onBack: () => void,
    onForward: () => void,
    onReload: () => void,
    onStop: () => void,
    onAuth: () => void
}

export const NavigationButtons = (props: NavigationButtonsProps) => {

    return (
        <View style={styles.navButtonContainer}>
            <Button title={"戻る"} onPress={props.onBack} color="rgba(107,83,84,1)"
                    accessibilityLabel="Learn more about this purple button"/>
            <Button title={"進む"} onPress={props.onForward} color="rgba(107,83,84,1)"
                    accessibilityLabel="Learn more about this purple button"/>
            <Button title={"リロード"} onPress={props.onReload} color="rgba(107,83,84,1)"
                    accessibilityLabel="Learn more about this purple button"/>
            <Button title={"停止"} onPress={props.onStop} color="rgba(107,83,84,1)"
                    accessibilityLabel="Learn more about this purple button"/>
            <Button title={"ログイン"} onPress={props.onAuth} color="rgba(107,83,84,1)"
                    accessibilityLabel="Learn more about this purple button"/>
        </View>
    );
};

const styles = StyleSheet.create({
    navButtonContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        marginLeft: 10,
        marginRight: 10
    },
    backButton: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "red",
        marginLeft: 10,
        marginRight: 10
    },
    forwardButton: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "red",
        marginLeft: 10,
        marginRight: 10
    },
    reloadButton: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "red",
        marginLeft: 10,
        marginRight: 10
    }
});
