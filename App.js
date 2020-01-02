import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "./Loading";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("Ejecutando useEfect");
        console.log("Is loading: ", isLoading);
    }, [isLoading]);

    return (
        <View style={styles.container}>
            <Text>Mi primera aplicacion React 127</Text>
            {isLoading === true && <Loading />}
            <Button
                title="Actualizar estado"
                onPress={() => setIsLoading(isLoading ? false : true)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
