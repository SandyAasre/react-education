import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Course")
                }>
                {/* <Text>Course</Text> */}
                    <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/course/course.png") }
                    />
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("About")
                }>
                {/* <Text>About</Text> */}
                <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/course/about.png") }
                    />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Contact")
                }>
                {/* <Text>Contact</Text> */}
                <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/course/call.png") }
                    />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Student")
                }>
                {/* <Text>Studentse</Text> */}
                <Image 
                    style={styles.iconStyle}
                    source={require("../../assets/course/student.png") }
                    />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    textStyle: {
        textTransform: "uppercase",
        marginBottom: 40,
    },

    iconStyle: {
        width: "100%",
        height: 40,
        aspectRatio: 1
    }
})

export default Menu;