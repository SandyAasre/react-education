import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screen/About';
import Course from './src/screen/Course';
import Contact from './src/screen/Contact';
import UserData from './src/screen/UserData';
import CourseDetails from './src/screen/CourseDetails';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name='Home'
          options={{headerShown: false,
          }}>
            {(props) => <Home { ...props } channelName={"Bansal Tech"} />  }
          </Stack.Screen>

          {/* Course Screen  */}
          <Stack.Screen name='Course' component={Course} 
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitle: "Course",
              headerTitleAlign: "center"
            }}
          />

           {/* About Screen  */}
           <Stack.Screen name='About' component={About}
               options={{
                headerTitleStyle: {
                  fontSize: 25,
                },
                headerTitle: "About",
                headerTitleAlign: "center"
              }}
           />

            {/* Contact Screen  */}
            <Stack.Screen name='Contact' component={Contact}
                options={{
                  headerTitleStyle: {
                    fontSize: 25,
                  },
                  headerTitle: "Contact",
                  headerTitleAlign: "center"
                }}
            />

            {/* UserData Screen  */}
            <Stack.Screen name='Student' component={UserData}
                options={{
                  headerTitleStyle: {
                    fontSize: 25,
                  },
                  headerTitle: "Student",
                  headerTitleAlign: "center"
                }}
            />

                   {/* CourseDetails Screen  */}
            <Stack.Screen
              name="CourseDetails"
              component={CourseDetails}
              options={{
                headerTitleStyle: {
                  fontSize: 25,
                  fontFamily: "Nunito_700Bold",
                },
                headerTitleAlign: "center",
              }}
            />
        </Stack.Navigator>
        {/* Hello React Native */}
      </NavigationContainer>
  )
}