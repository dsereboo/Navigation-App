import React from "react"
import { Image, StyleSheet, Text,TouchableOpacity,View } from "react-native"
import Inidactor from "../components/Indicator"

export default function OnlineShoppingScreen({navigation}){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.header}>ONLINE SHOPPING</Text>
        </View>
        <View style={styles.subtextContainer}>
          <Text style={styles.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/online.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("AddToCart")}}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.indicator}>
          <View style={styles.indicatorContainer}>
            <View style={styles.section1}></View>
            <View style={styles.section3}></View>
            <View style={styles.section2}></View>
          </View>
          <View style={styles.skip} >
            <Text style={styles.iconText}  onPress={()=>{navigation.navigate("AddToCart")}} >Skip</Text>
          </View>
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        justifyContent:"flex-start",
        marginHorizontal: 20,
       
    },
    titleContainer:{
        flex:0.8,
        justifyContent:"flex-end",
        alignItems:"flex-start"
    },
    subtextContainer:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center"
    },
    imageContainer:{
        flex:3,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    buttonContainer:{
        flex:0.9,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        flex:0.65,
        width:180,
        backgroundColor:"#5D3FD3",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    indicator:{
        flex:1.5,
        alignItems:"center",
        flexDirection:"row",
    },
    iconText:{
        color:"#C8C8C8",
        fontSize:16,
      
    },
    header:{
       fontSize:26,
       fontWeight:"bold" 
    },
    subtext:{
        color:"#888888",
        fontSize:18,
        textAlign:"justify"
    },
    image:{
        width:280,
        height:250,
        
    },
    buttonText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff"
    },
    iconText:{
        color:"#C8C8C8",
        fontSize:16,  
    },
    skip:{
        flex:0.5,
        justifyContent:"flex-end",
        alignItems:"flex-end"
    },
    icon:{
        flex:0.2
    },
    indicatorContainer:{
        flex:0.5,
        flexDirection:"row",
        justifyContent:"flex-end",  
        alignItems:"flex-end"  
    },
    section1:{
        backgroundColor:"#A8A8A8",
        borderRadius:50,
        padding:5,
        marginRight:2,
    },
    section2:{
        backgroundColor:"#A8A8A8",
        borderRadius:20,
        padding:5,
        marginLeft:2,
    },
    section3:{
        backgroundColor:"#5D3FD3",
        borderRadius:20,
        padding:5,
  
    }
    
})