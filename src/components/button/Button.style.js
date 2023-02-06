import { StyleSheet } from "react-native";


const base_style=StyleSheet.create({
    container:{
        borderRadius:30,
        margin:5,padding:8,alignItems:"center",
    },
    title:{
        fontWeight:"bold",fontSize:18,
}})

export default {
    
    primary:StyleSheet.create({
        ...base_style,
    container:{
        ...base_style.container,
        backgroundColor:"firebrick",

    },
    title:{
        ...base_style.title,
        color:"white",
}}),

    secondary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"white",
            borderColor:"firebrick",
            borderWidth:1,   
        },
        title:{
            ...base_style.title,
            color:"firebrick",
        }}),
    }