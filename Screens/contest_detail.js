import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, Feather, Entypo, AntDesign} from '@expo/vector-icons';
import Moment from 'moment';
import { getContestDetails, submitContest } from '../services/contests';

export default class contest_detail extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.data = this.props.route.params;
    console.log(this.data);
    this.state = {
      contest_id: this.data.contest_id,
      user_id: 0,
      contest_data: null,
      selected_coins_arr : [],
      // selected_coins_arr : this.data.coin_data,

    }

  }
  async componentDidMount(){
    const val = await AsyncStorage.getItem("user_data");
    let user_data = JSON.parse(val);
    let user_id = user_data.id;
    let s_c_data = [];
    if(this.data.coin_data){
      s_c_data = this.data.coin_data
    }
    this.setState({user_id:user_id, selected_coins_arr: s_c_data})

    this.fetchContestDetails();
  }
  fetchContestDetails = () => {
    try {
      const { contest_id , user_id} = this.state;
      let data = {
        'user_id' : user_id,
        'contest_id' : contest_id
      }
      getContestDetails(data)
      .then((res) => {
         // console.log("Contest Details Response ===>")
        // console.log(res.data)

        if(res.data){
          let response = res.data;
          if(response.success){
            this.setState({contest_data:response.data})
          }else{
            alert(response.message)
          }

        }



      })
      .catch((error) => {
      // console.log("Error: "+error)
      });


    } catch (e) {
      // console.log("Internet error")
    }
  }
  removeSelection = (id) => {
   
      this.setState({selected_coins_arr: this.state.selected_coins_arr.filter(function(coin) { 
          return coin.id !== id 
      })});
  
  }
  submitContest = () => {
    const { user_id, contest_id, selected_coins_arr } = this.state;
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    // console.log(user_id)
    // console.log(contest_id)
    // console.log(selected_coins_arr)
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    if(selected_coins_arr.length == 0){
      Alert.alert(
        "Sorry",
        "Please select coins first",
        [
          { text: "OK" }
        ]
      );
    }else if(!user_id || !contest_id){
      Alert.alert(
        "Sorry",
        "Missing parameters",
        [
          { text: "OK" }
        ]
      );
    }else{
      let data = {
        "user_id" : user_id,
        "contest_id" : contest_id,
        "coins_arr" : selected_coins_arr
      }
      submitContest(data)
      .then((res) => {
        // console.log("Submit Contest Response ===>")
        // console.log(res.data)

        if(res.data){
          let response = res.data;
          if(response.success){
           this.props.navigation.push('home')
          }else{
            alert(response.message)
          }

        }



      })
      .catch((error) => {
      console.log(error.response)
      });
    }



  }
  render() {
    const { contest_data } = this.state

    let slots_arr = [];
    console.log("this.state.selected_coins_arr")
    console.log(this.state.selected_coins_arr)
if(contest_data){
  for(let i = 0; i < contest_data.slots; i++){
    let viewData = null;
    if(!this.state.selected_coins_arr[i]){
      viewData = <View style={styles.popbox1}>
      <View style={{ width: "15%", alignItems: "center" }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center" }}>

          <Image style={styles.box} source={require('../assets/images/f.png')} />
        </View>
      </View>
      <View style={{ width: "60%", alignItems:"center" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 16, color: "#5978a1", fontWeight: "bold" }}>Choose Coin</Text>
        </View>


      </View>
      <TouchableOpacity style={{ width: "15%", alignItems: "center" }}
       onPress={()=>this.props.navigation.navigate("coin_selection",{contest_id : this.state.contest_id, coin_chosen : this.state.selected_coins_arr})}
       >
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
          <AntDesign name="right" size={20} color="#e6e6e6" />
        </View>
      </TouchableOpacity>

    </View>
    }
    else{
      viewData = <View style={styles.popbox1}>
      <View style={{ width: "15%", alignItems: "center" }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center" }}>
        {this.state.selected_coins_arr[i].symbol == "BTC" ? (
              <Image  style={styles.box} source={require("../assets/coins/bitcoin.png")} />
              ): this.state.selected_coins_arr[i].symbol == "ETH" ? (
              <Image  style={styles.box} source={require("../assets/coins/etherium.png")} />
              ):this.state.selected_coins_arr[i].symbol == "USDT" ? (
              <Image  style={styles.box} source={require("../assets/coins/tether.jpg")} />
              ):this.state.selected_coins_arr[i].symbol == "BNB" ? (
              <Image  style={styles.box} source={require("../assets/coins/BNB.png")} />
              ):this.state.selected_coins_arr[i].symbol == "USDC" ? (
              <Image  style={styles.box} source={require("../assets/coins/USD-coin.png")} />
              ):this.state.selected_coins_arr[i].symbol == "XRP" ? (
              <Image  style={styles.box} source={require("../assets/coins/XRP.png")} />
              ):this.state.selected_coins_arr[i].symbol == "ADA" ? (
              <Image  style={styles.box} source={require("../assets/coins/Cordano.jpeg")} />
              ):this.state.selected_coins_arr[i].symbol == "SOL" ? (
              <Image  style={styles.box} source={require("../assets/coins/solana.jpeg")} />
              ):this.state.selected_coins_arr[i].symbol == "AVAX" ? (
              <Image  style={styles.box} source={require("../assets/coins/avalanche.jpeg")} />
              ):this.state.selected_coins_arr[i].symbol == "LUNA" ? (
              <Image  style={styles.box} source={require("../assets/coins/terra-luna.webp")} />
              ):
              (
                <Image style={styles.box} source={require('../assets/12.png')} />
              )}
          
        </View>
      </View>
      <View style={{ width: "47%" }}>

        <View style={{ width:"100%",paddingLeft: 15, paddingTop: 5, borderRightColor:"#e6e6e6", borderRightWidth:1, borderStyle:"dotted" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>{this.state.selected_coins_arr[i].name}</Text>
          <Text style={{ fontSize: 12, color: "#000" }}>vs Benitez</Text>
          <Text style={{ fontSize: 15, color: "#000" }}>Sat 3:00 PM CST</Text>
        </View>


      </View>
      <View style={{ width: "50%", flexDirection:"row" }} >
      <View style={{ width:"42%", paddingTop: 5, paddingLeft:10 }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>${this.state.selected_coins_arr[i].quote ? this.state.selected_coins_arr[i].quote.USD.price : this.state.selected_coins_arr[i].price}</Text>
          <Text style={{ fontSize: 12, color: "#000" }}>FPPF 58..3</Text>
        </View>
        <View style={{  paddingTop: 5, alignContent:"center", alignItems:"center", justifyContent:"center" }}>
        <TouchableOpacity onPress={() => {this.removeSelection(this.state.selected_coins_arr[i].id)}}>
        <Entypo name="circle-with-cross" size={22} color="grey" />

        
        </TouchableOpacity>
</View>


      </View>

    </View>
    }
    slots_arr.push(viewData)
  }
}


    return (
        <View style={{ flex:1, alignItems: "center", backgroundColor: "#fbfbfb", paddingBottom:130 }}>
        <View style={{ width: "100%", alignContent: "center", alignItems: "center", marginTop: 40, backgroundColor: "#000", paddingBottom: 15 }}>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <TouchableOpacity  
             onPress={()=>this.props.navigation.goBack()}
        //     onPress={()=>{
        //        this.props.navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'contest_lobby' }],
        // });
        //     }} 
            style={{ width: "10%", alignItems: "center" }}>
              <AntDesign name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={{ width: "75%", alignContent: "center", alignItems: "center" }}>
              {/* <Image style={{ width: 25, height: 25, resizeMode: "cover" }} source={require('../assets/images/demo_2.png')} /> */}
              <Text style={{fontSize:18, fontWeight:"bold", color:"#fff"}}>Create Lineup</Text>
            </View>
            <TouchableOpacity style={{ width: "15%" }}
            onPress={() => this.submitContest()}
            // onPress={()=> this.props.navigation.navigate('submitted_contests')}
            >
            <Text style={{fontSize:18, fontWeight:"bold", color:"#8E995F", marginHorizontal: -20 }}>Submit</Text>

            </TouchableOpacity>

          </View>
        </View>
{contest_data && <>
  <View style={{ width: "90%", paddingTop: 10, flexDirection:"row" }}>
         <View style={{width:"90%"}}>
         <Text style={{ fontSize: 16, fontWeight: "bold", color: "#808080" }}>{contest_data.name}</Text>

         </View>
         <View style={{width:"10%", alignItems:"flex-end"}}>
         <Entypo name="dots-three-vertical" size={24} color="#808080" />
         </View>
        </View>
        <View style={styles.popbox}>
          <View style={{ width: "25%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>Entry {contest_data.entrance_fee}</Text>

          </View>

          <View style={{ width: "40%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>{Moment(contest_data.start_time).format("ddd h:mm A")} EST</Text>

          </View>
          <View style={{ width: "15%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>287:36:...</Text>

          </View>
          <View style={{ width: "20%", alignItems: "center", height:"100%", alignContent:"center", justifyContent:"center" }}>
          <Text style={{fontSize:12, color:"#808080", fontWeight:"bold"}}>2/{contest_data.slots}</Text>

          </View>

        </View>
<ScrollView>

        {slots_arr}



</ScrollView>


<View style={{width:"100%", alignContent:"center", alignItems:"center", justifyContent:"center", position:"absolute", bottom:0}}>

<View style={{width:"100%", backgroundColor:"#282828", paddingHorizontal:10}}>
<View style={{flexDirection:"row", width:"100%"}}>
<View style={{width:"50%", paddingVertical:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff"}}>Positions Filled: <Text style={{color:"#8E995F"}}>{this.state.selected_coins_arr.length}/</Text>
<Text style={{color:"#8E995F"}} >{contest_data.slots}</Text> </Text>

</View>
<View style={{width:"50%", alignItems:"flex-end", paddingVertical:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff", textAlign:"right"}}>Rem Salary: <Text style={{color:"#8E995F", fontWeight:"bold"}}>$50,000</Text></Text>


</View>

</View>

<View style={{flexDirection:"row", width:"100%"}}>
<View style={{width:"50%", paddingBottom:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff"}}>Under Salary Cap</Text>

</View>
<View style={{width:"50%", alignItems:"flex-end", paddingBottom:12}}>
<Text style={{fontSize:16, fontWeight:"bold", color:"#fff", textAlign:"right"}}>Avg Coin investment <Text style={{color:"#8E995F", fontWeight:"bold"}}>$8,333</Text></Text>


</View>

</View>
</View>


<View style={{width:"100%", backgroundColor:"#000"}}>
<View style={{flexDirection:"row", width:"100%"}}>
<View style={{width:"25%", alignItems:"center", paddingVertical:12}}>
<Text style={{fontSize:18, fontWeight:"bold", color:"#8E995F"}}>Clear</Text>

</View>
<View style={{width:"25%", alignItems:"center", paddingVertical:12}}>
<Text style={{fontSize:18, fontWeight:"bold", color:"#8E995F"}}>Import</Text>

</View>
<View style={{width:"25%", alignItems:"center", paddingVertical:12}}>
<Text style={{fontSize:18, fontWeight:"bold", color:"#8E995F"}}>Reserve</Text>

</View>
<TouchableOpacity style={{width:"25%", alignItems:"center", paddingVertical:12}}
onPress={() => this.submitContest()}
// onPress={()=> this.props.navigation.navigate('submitted_contests')}
>
<Text style={{fontSize:18, fontWeight:"bold", color:"#8E995F"}}>Submit</Text>

</TouchableOpacity>
</View>
</View>

</View>
</>}




      </View>



    );



  }

}
const styles = StyleSheet.create({
  popbox1: {

    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 1,

    paddingVertical: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  popbox: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent:"center",
    marginTop: 15,
    marginBottom: 1,
   paddingVertical:5,
   height:40
  },
  box: {

    width: "100%",
    height: 50,
    resizeMode: "contain",



  },

  pic: {

    height: 200,
    width: 200,
    resizeMode: "cover"


  },
  login_button: {
    width: "80%",
    paddingVertical: 13,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#fad029",
    borderWidth: 1
  },
  SignUp_button: {
    width: "80%",
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#71a330",
    backgroundColor: "#71a330",
    borderWidth: 1
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingLeft: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#044184',
    borderRadius: 4,
    // backgroundColor: '#044184',
    color: '#000',
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingLeft: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#044184',
    borderRadius: 4,
    // backgroundColor: '#044184',
    color: '#000',
  }
});
