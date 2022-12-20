import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Course'

const Course = (navigation) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.courseContainer}
            source={item.image}
            resizeMode="contain"
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.mainHeader}>{item.description}</Text>
       {/*      <View style={styles.buttonContainer}>
              <TouchableOpacity  
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("CourseDetails")}
              >
                <Text  style={styles.buttonText}>Course Details</Text>
              </TouchableOpacity>
            </View> */}
        </View>
      </View>
    )
  }
  return (
    <FlatList 
      KeyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  )
}
const styles = StyleSheet.create({
  courseContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    height: 10,
  },

  mainContainer: {
    paddingHorizontal: 20,
    textAlign: "center",
  },

  courseContainer: {
    padding: 30,
    backgroundColor: "rgpa(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowRadius: 5,
    shadowColor: "grey",
    shadowOffset: {width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 15,
    fontWeight: 500,
  },
  description: {
    textAlign: "left",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 15,
    color: "7d7d7d",
  },
   buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
   },
})

export default Course

