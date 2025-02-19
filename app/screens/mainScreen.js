 import { useState } from "react";
 import {View, Text, ScrollView, SafeAreaView} from "react-native"
 import {Stack , useRouter} from "expo-router"

 import {COLORS, icons, images, SIZES} from "../../constants"

 import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../../components"

 import ToggleSwitch from 'toggle-switch-react-native'

 const Home =() =>{
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")
    return(
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/> 
                ),
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/> 
                ),
                headerTitle: ""
            }}/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex:1,
                    padding: SIZES.medium,

                }}>
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() =>{
                            if(searchTerm){
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <View style={{marginTop: 20}}>
                    <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="rgb(255, 119, 84)"
                    label="Recruiters"
                    labelStyle={{ color: "black", fontWeight: "500" }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                    
                    />
                    </View>
                    <Popularjobs />
                    <Nearbyjobs />

                </View>
            </ScrollView>

            
        </SafeAreaView>
    )
 }

 export default Home;