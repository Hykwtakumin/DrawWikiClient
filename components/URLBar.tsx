import React, {Component, useState, useEffect, useContext, useRef} from "react";
import {StyleSheet, Text, TextInput, View, Button, NativeSyntheticEvent} from "react-native";

interface URLBarProps {
    onEnter: (string) => void,
    URL: string
}

export const URLBar = (props: URLBarProps) => {

    const [input, setInput] = useState<string>(props.URL);

    const handleChange = (text: string) => {
        setInput(text);
    };

    const handleSubmit = (event) => {
        if (input !== props.URL) {
            props.onEnter(input);
        }
    };

    return (
        <View style={styles.navButtonContainer}>
            <TextInput
                style={styles.urlBar}
                placeholder={props.URL.toString()}
                defaultValue={props.URL.toString()}
                onChangeText={handleChange}
                onSubmitEditing={handleSubmit}/>
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
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 2
    },
    urlBar: {
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: "rgba(255,255,255,0)",
        color: "rgba(107,83,84,1)",
        fontSize: 25,
        marginLeft: 2,
        marginRight: 2
    }

});