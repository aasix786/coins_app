import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, ScrollView
} from 'react-native';
import { Feather, Entypo, FontAwesome} from '@expo/vector-icons';
import Footer from './footer'
import { getCoinsData } from '../services/contests';

export default class coin_selection extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.route.params;
    this.state = {
      coins_arr:[],
      contest_id: this.data.contest_id,
      coin_chosen: this.data.coin_chosen ? this.data.coin_chosen : []

    }

  }
  async componentDidMount(){
    this.fetchCoinsData();
  }
  selectCoin = (item) => {
      this.state.coin_chosen.push(item);
      console.log("this.state.coin_chosen")
      console.log(this.state.coin_chosen)
    this.props.navigation.replace("contest_detail",{contest_id:this.state.contest_id, coin_data : this.state.coin_chosen})
  }
  fetchCoinsData = () => {
    try {

      getCoinsData()
      .then((res) => {
        // console.log("Coins Response ===>")
        // console.log(res.data)

        if(res.data){
          let response = res.data;
          if(response.status.error_code == 0){
            this.setState({coins_arr:response.data})
          }else{
            alert(response.status.error_message)
          }

        }



      })
      .catch((error) => {
      console.log("Error: "+error)
      });


    } catch (e) {
      console.log("Internet error")
    }
  }

  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", alignContent: "center", backgroundColor: "#fff" }}>
        <View style={{ width: "100%", alignContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 50, backgroundColor: "#222222", paddingVertical: 5 }}>
          <TouchableOpacity style={{ width: '15%', justifyContent: 'center', alignItems: "center" }}
            onPress={()=>this.props.navigation.goBack()}
          >
            <Entypo name="cross" size={22} color="#FFF" />
          </TouchableOpacity>
          <View style={{ width: '85%', paddingRight: 40 }}>
            <Text style={{ color: '#8E995F', fontSize: 18, textAlign: "center", fontWeight: "bold" }}>02:52 </Text>

            <Text style={{ color: '#cccccc', fontSize: 14, fontWeight: "bold", textAlign: "center" }}>Pick 4 of 5</Text>
          </View>
        </View>

        <View style={{ width: "100%", alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#424242", paddingVertical: 5 }}>

          <View style={{ width: '90%' }}>
            <Text style={{ color: '#cccccc', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>Autodraft would be ADA</Text>
          </View>

          <View style={{ width: "97%", marginTop: 5 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >

              <View style={styles.popbox}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text style={{ color: '#fff', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Up Next:</Text>
                    <Text style={{ color: '#fff', fontSize: 15, textAlign: "center", fontWeight: "bold", paddingTop: 5 }}>BTC</Text>
                  </View>
                  <View style={{ paddingLeft: 10 }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                  </View>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>9</Text>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={{ borderTopWidth: 1, borderTopColor: "#000", borderBottomWidth: 1, borderBottomColor: "#000", width: 50, paddingVertical: 10 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>R4</Text>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>10</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>11</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, padding: 8, marginHorizontal: 5, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>12</Text>
                </View>
              </View>

              <View style={styles.popbox}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text style={{ color: '#9AEC2E', fontSize: 12, textAlign: "center", fontWeight: "bold" }}>On the clock:</Text>
                    <Text style={{ color: '#fff', fontSize: 15, textAlign: "center", fontWeight: "bold", paddingTop: 5 }}>Doge</Text>
                  </View>
                  <View style={{ paddingLeft: 10 }}>
                    <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                  </View>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>9</Text>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={{ borderTopWidth: 1, borderTopColor: "#000", borderBottomWidth: 1, borderBottomColor: "#000", width: 50, paddingVertical: 10 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>R4</Text>
                </View>
              </View>


              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <FontAwesome name="refresh" size={18} color="#fff" />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>10</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, marginHorizontal: 5, padding: 8, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>11</Text>
                </View>
              </View>

              <View style={{ borderRadius: 10, padding: 8, marginHorizontal: 5, alignContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 10, }}>
                <View style={{ width: 25, height: 25, resizeMode: "cover", borderRadius: 80, backgroundColor: "#424242", alignItems: "center", justifyContent: "center" }} >
                  <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
                </View>
                <View style={{ paddingTop: 5 }}>
                  <Text style={{ color: '#fff', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>12</Text>
                </View>
              </View>

            </ScrollView>


          </View>
          <View style={{ width: '90%', marginTop: 15, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ color: '#cccccc', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>Last Pick : </Text>
              </View>
              <View>
                <Text style={{ color: '#8E995F', fontSize: 14, textAlign: "center", fontWeight: "bold" }}>Ardana</Text>
              </View>

            </View>

          </View>
        </View>

        <View style={{ width: "100%", flexDirection: "row", borderTopWidth: 1, borderTopColor: '#D1D1D1', paddingVertical: 1, paddingHorizontal: 5}}>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 8, paddingBottom: 12, alignItems: "center" }}>
                <Feather name="search" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", alignItems: "center" , paddingVertical:3}}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >ALL </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%",alignItems: "center", paddingVertical:3 }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >MarCap </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%",alignItems: "center", paddingVertical:3 }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >Volatility </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", alignItems: "center", paddingVertical:3  }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >Volume</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchicon}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center",backgroundColor: "#D1D1D1", borderRadius: 20 }} >
              <View style={{ width: "95%", alignItems:"center", paddingVertical:3 }}>
                <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }} >Price</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: "100%", flexDirection: "row", paddingVertical: 1,backgroundColor:"#f5f5f5" }}>

        <View style={{   width: "64%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Text style={{ color: "#000", textAlign: "center", fontSize: 12,fontWeight:"bold" }} >Coin </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "17%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Text style={{ color: "#000", textAlign: "center", fontSize: 12,fontWeight:"bold" }} >Relevance</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "17%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Text style={{ color: "#000", textAlign: "center", fontSize: 12,fontWeight:"bold" }} >Freq.</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{ width: "97%", height: "90%", marginTop: 5,paddingBottom:200 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

       {this.state.coins_arr.length > 0 && this.state.coins_arr.map((item,index) => {
         return (
          <View key={index} style={{ width: "100%", flexDirection: "row" }}>

        <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Entypo name="star" size={24} color="#5978a1" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "55%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" ,flexDirection:"row"}}
            onPress={()=> this.selectCoin(item)}
            >
              <View style={{ width: "30%", paddingTop: 5, paddingBottom: 8, alignItems: "center" }}>
              <Image style={{ width: 20, height: 20, resizeMode: "cover", borderRadius: 80 }} source={require("../assets/images/photos.png")} />
              </View>
              <View style={{ width: "70%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 15,fontWeight:"bold" }} >{item.name}</Text>
              <Text style={{ color: "#cccccc", fontSize: 10,fontWeight:"bold" }} >-5.97% (24h %)</Text>
              </View>

            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "95%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{   width: "15%",alignItems: "center",justifyContent: "center",}}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }} >
              <View style={{ width: "60%", paddingTop: 5, paddingBottom: 8}}>
              <Text style={{ color: "#000", fontSize: 12,fontWeight:"bold" }} >{item.quote.USD.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
         )
       })}







          </ScrollView>
 </View>





        <Footer title={"player"} back={false} navigation={this.props.navigation} />



      </View>


    );



  }

}
const styles = StyleSheet.create({

  searchicon: {

    width: "16.66%",
    alignItems: "center",
    justifyContent: "center",


  },
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
    padding: 10, alignContent: "center", alignItems: "center", backgroundColor: "#5F789E", marginTop: 10, borderWidth: 2, borderColor: "#def28a",
    shadowColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 2.60,
    shadowRadius: 2.62,
    elevation: 6,
  },

  document: {
    width: 18, height: 18, borderRadius: 50, backgroundColor: "#E6E8FA",
    marginHorizontal: 10

  },
  toggle: {
    padding: 5, borderRadius: 50,
    // backgroundColor: "#E6E8FA",
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
