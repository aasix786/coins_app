import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView,
} from 'react-native';
import { Fontisto, Entypo, FontAwesome } from '@expo/vector-icons';
import Moment from 'moment';
import Footer from './footer'
import { getUpcomingContests } from '../services/contests';
import AsyncStorage from '@react-native-async-storage/async-storage';

// console.log.disableYellowBox = true

export default class contest_lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:0,
      contests_arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      toggle: [1,2,3,4,5],
      tag_selected: 0,

    }

  }
  async componentDidMount(){
    const val = await AsyncStorage.getItem("user_data");
    let user_data = JSON.parse(val);
    let user_id = user_data.id;
    this.setState({user_id:user_id})
    this.fetchUpcomingContests();
  }
  fetchUpcomingContests = () => {
    const {user_id} = this.state
    let data = {
      "user_id" : user_id,
    }
    try {

      getUpcomingContests(data)
      .then((res) => {
        // console.log("Contests Response ===>")
        // console.log(res.data)

        if(res.data){
          let response = res.data;
          if(response.success){
            this.setState({contests_arr:response.data})
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

  render() {



    return (

      <View style={{ flex: 1, alignItems: "center", alignContent: "center", backgroundColor: "#fff" }}>
     <View style={{ width: "100%", alignContent: "center", alignItems: "center",flexDirection:"row",justifyContent:"center", marginTop: 50, backgroundColor: "#000" , paddingVertical:5}}>
     <TouchableOpacity style={{ width: '15%', justifyContent: 'center' ,alignItems:"center"}}
          onPress={()=>this.props.navigation.goBack()}
          >
        <Fontisto name="angle-left" size={18} color="#FFF" />
          </TouchableOpacity>
      <View style={{width: '85%',paddingRight:40}}>
      <Text style={{ color: '#fff', fontSize: 18,textAlign:"center" }}>FoolioBoost </Text>
      </View>
     </View>

              <View style={{ width: "100%", alignContent: "center", alignItems: "center",justifyContent:"center", borderTopColor:"#1d1d1d",borderTopWidth:1, backgroundColor: "#000" }}>
     <View style={{flexDirection:"row"}}>
     <View style={{paddingVertical:5}}>
      <Text style={{ color: '#fff', fontSize: 16 }}>Contest | SAT 4:00 PM EST | </Text>
      </View>
      <View style={{paddingVertical:5}}>
      <Text style={{ color: '#8E995F', fontSize: 16, fontWeight:"bold", }}>5 Openings </Text>
      </View>
     </View>

              </View>
              <View style={{ width: "100%", alignContent: "center", alignItems: "center", marginTop: 5,  }}>
      <Text style={{ color: '#000', fontSize: 18 }}>Contests</Text>
      </View>
        <View style={{ width: "90%", marginTop: 5 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >

<TouchableOpacity style={styles.toggle1}


>
  <Text style={{ textAlign: "center",fontWeight:"bold",color:"#fff" }}>All</Text>

</TouchableOpacity>
            {this.state.toggle.length > 0 ? (
              this.state.toggle.map((item, index) => {
                return (

                  <TouchableOpacity key={index} style={[styles.toggle, { backgroundColor: this.state.tag_selected == item.uuid ? '#00a2fb' : "#E6E8FA" }]}


                  >
                    <Text style={{ textAlign: "center",fontWeight:"bold" }}>featured</Text>

                  </TouchableOpacity>

                );

              })
            ) : null
            }


          </ScrollView>


        </View>
        <View style={{ width: "97%", height: "90%", marginTop: 5,paddingBottom:165 }} >
        <ScrollView showsVerticalScrollIndicator={false}>
        {this.state.contests_arr.length > 0 ?
      this.state.contests_arr.map((item,index)=>{

        return(
          <View key={index} style={{marginTop:10}}>
          <TouchableOpacity onPress={() => this.props.navigation.push("contest_detail",{contest_id:item.id, coin_data : []})} style={styles.popbox1}>
          <View style={{ paddingHorizontal: 20,flexDirection:"row"}}>
          <Entypo name="star" size={20} color="#5978a1" />
            <Text style={{ fontSize: 15, color: "#808080", fontWeight: "bold",paddingHorizontal:5 }}>{item.name}</Text>
          </View>
  <View style={{flexDirection:"row"}}>
  <View style={{ width: "35%", alignItems: "center" }}>
    <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 5 }}>
    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>{item.slots}</Text>
    <Text style={{ fontSize: 10, color: "#808080", fontWeight: "bold" ,paddingVertical:3}}>ENTRIES(1/{item.slots})</Text>
    <Text style={{ fontSize: 10, color: "#808080", fontWeight: "bold" }}>{Moment(item.start_time).format("ddd h:mm A")} EST </Text>
    {/* Sat 4:00 PM EST */}
    </View>
  </View>
  <View style={{ width: "35%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

    <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
      <Text style={{ fontSize: 18, color: "#8E995F", fontWeight: "bold" }}>{item.entrance_fee}</Text>
    </View>
    <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 12, color: "#808080", fontWeight: "bold" }}>ENTRY FEE</Text>
    </View>

  </View>
  <View style={{ width: "30%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

    <View style={{ paddingHorizontal: 10, paddingTop: 5,flexDirection:"row" }}>
      <Text style={{ fontSize: 18, color: "#5978a1", fontWeight: "bold",paddingHorizontal:5 }}>$100K</Text>
      <View style={{padding:5,borderWidth:1,borderColor:"#5978a1",backgroundColor:"#5978a1",borderRadius:5}}>
      <FontAwesome name="google" size={12} color="#fff" />
      </View>
    </View>
    <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 12, color: "#808080" , fontWeight: "bold"}}>TOTAL PRIZES </Text>
    </View>

  </View>
  </View>

</TouchableOpacity>
</View>

        )
      })
      :null

      }

 </ScrollView>
 </View>








       <Footer title={"home"} back={false} navigation={this.props.navigation} />



      </View>


    );



  }

}
const styles = StyleSheet.create({
  popbox1: {

    width: "100%",

    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 1,

    paddingVertical: 5,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 2.62,
    elevation: 6,
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
    borderColor: "#00a2fb",
    borderWidth: 1
  },
  SignUp_button: {
    padding: 5,
    marginHorizontal: 15,
    marginTop: 15,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#00a2fb",
    backgroundColor: "#00a2fb",
    borderWidth: 1
  },
  search: {

    width: "100%",
    marginTop: 10,
    paddingVertical: 10,

    backgroundColor: "#ededed",
    borderRadius: 10,
  },
  popbox: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 10,
    borderWidth: 1, borderColor: "#E7BF63",
    // position:"absolute"
  },

  document: {
    width: 18, height: 18, borderRadius: 50, backgroundColor: "#E6E8FA",
    marginHorizontal: 10

  },
  toggle: {
    padding: 7, borderRadius: 50,
    // backgroundColor: "#E6E8FA",
    marginHorizontal: 10

  },
  toggle1: {
    padding: 7, borderRadius: 50,
    backgroundColor: "#000",
    marginHorizontal: 10

  },
  popbox2: {
    // width: "100%",
    // // borderBottomWidth:1,
    // borderWidth:0.5,
    //  flexDirection: "row",
    //  paddingBottom:10,
    //   marginTop: 20, borderColor: "#DBDBDB",

    // paddingVertical: 5,
    // shadowColor: "grey",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // // shadowOpacity: 1,
    // shadowRadius: 1,
    // elevation: 2,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 3,
    marginBottom: 1,

    paddingVertical: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.60,
    shadowRadius: 2.62,
    elevation: 6,
  }
});
