import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    Container:{
        flex: 1,
    backgroundColor: 'coral',},

    Header_Container:{
        borderRadius:10,
        borderWidth:2,
        borderStyle:"dotted",
        borderColor:"white",
        alignItems:"center",
        padding:10,
        fontSize:20,
        margin:10,
    },
    Header_Text:{
        fontSize:20,
        color:"white"
    },header:{
        alignItems:"center",
        height:40,
        justifyContent:"space-between",
        backgroundColor:"#f5f5f5",
        flexDirection:"row",
        paddingHorizontal:5,
    
      },
      header_text:{
        fontSize:25,
      },
      messageContainer: {
        margin: 10,
        width: Dimensions.get('window').width - 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 10,
      },
      writer: {
        color: '#4C5A61',
        fontSize: 14,
        fontWeight: '400',
      },
    
      topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      message: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#37474F',
        fontSize: 18,
      },
      date: {
        fontStyle: 'italic',
        color: '#4C5A61',
      },
})

