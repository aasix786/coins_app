import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, StyleSheet, Picker, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage, Button, Linking, Switch, FlatList
} from 'react-native';
import Footer from './footer'


console.log.disableYellowBox = true

export default class home extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    // this.data = this.props.route.params
    // console.log("protips data")
    // console.log(this.data)
    this.state = {
      started: false,
      is_favorite: false,
      toggle_search: false,
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      toggle: [1,2,3,4,5],
      admin_post: [],
      search: "",
      tags: [],
      total_pro_pages: "",
      tag_selected: 0,
      current_page: 1,
      show_pageNo: false,
      hidePass:true

    }
  
  }


  render() {
   

    
    return (

      <View style={{ flex: 1, alignItems: "center", alignContent: "center", backgroundColor: "#fff" }}>
     <View style={{ width: "100%", alignContent: "center", alignItems: "center",justifyContent:"center", marginTop: 30, backgroundColor: "#000" }}>
      <View style={{paddingVertical:5}}>
      <Text style={{ color: '#fff', fontSize: 22 }}>00:53</Text>
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


            {this.state.toggle.length > 0 ? (
              this.state.toggle.map((item, index) => {
                return (

                  <TouchableOpacity key={index} style={[styles.toggle, { backgroundColor: this.state.tag_selected == item.uuid ? '#00a2fb' : "#E6E8FA" }]}

               
                  >
                    <Text style={{ textAlign: "center" }}>featured</Text>

                  </TouchableOpacity>

                );

              })
            ) : null
            }

          
          </ScrollView>


        </View>
  <View style={{marginTop:10}}>
              <TouchableOpacity style={styles.popbox1}>
              <View style={{ paddingHorizontal: 20}}>
                <Text style={{ fontSize: 16, color: "#808080", fontWeight: "bold" }}>UFC $300K YEAR FINAL</Text>
              </View>
      <View style={{flexDirection:"row"}}>
      <View style={{ width: "20%", alignItems: "center" }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>12</Text>
        </View>
      </View>
      <View style={{ width: "50%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>$12</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Entry Fee</Text>
        </View>

      </View>
      <View style={{ width: "30%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#006400", fontWeight: "bold" }}>$30000000</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Total Prizes</Text>
        </View>

      </View>
      </View>
   
</TouchableOpacity>
  </View>
  <View>
              <TouchableOpacity style={styles.popbox1}>
              <View style={{ paddingHorizontal: 20}}>
                <Text style={{ fontSize: 16, color: "#808080", fontWeight: "bold" }}>UFC $300K YEAR FINAL</Text>
              </View>
      <View style={{flexDirection:"row"}}>
      <View style={{ width: "20%", alignItems: "center" }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>12</Text>
        </View>
      </View>
      <View style={{ width: "50%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>$12</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Entry Fee</Text>
        </View>

      </View>
      <View style={{ width: "30%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#006400", fontWeight: "bold" }}>$30000000</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Total Prizes</Text>
        </View>

      </View>
      </View>
   
</TouchableOpacity>
  </View>
  <View>
              <TouchableOpacity style={styles.popbox1}>
              <View style={{ paddingHorizontal: 20}}>
                <Text style={{ fontSize: 16, color: "#808080", fontWeight: "bold" }}>UFC $300K YEAR FINAL</Text>
              </View>
      <View style={{flexDirection:"row"}}>
      <View style={{ width: "20%", alignItems: "center" }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>12</Text>
        </View>
      </View>
      <View style={{ width: "50%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>$12</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Entry Fee</Text>
        </View>

      </View>
      <View style={{ width: "30%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#006400", fontWeight: "bold" }}>$30000000</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Total Prizes</Text>
        </View>

      </View>
      </View>
   
</TouchableOpacity>
  </View>
  <View>
              <TouchableOpacity style={styles.popbox1}>
              <View style={{ paddingHorizontal: 20}}>
                <Text style={{ fontSize: 16, color: "#808080", fontWeight: "bold" }}>UFC $300K YEAR FINAL</Text>
              </View>
      <View style={{flexDirection:"row"}}>
      <View style={{ width: "20%", alignItems: "center" }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>12</Text>
        </View>
      </View>
      <View style={{ width: "50%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>$12</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Entry Fee</Text>
        </View>

      </View>
      <View style={{ width: "30%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#006400", fontWeight: "bold" }}>$30000000</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Total Prizes</Text>
        </View>

      </View>
      </View>
   
</TouchableOpacity>
  </View>
  <View>
              <TouchableOpacity style={styles.popbox1}>
              <View style={{ paddingHorizontal: 20}}>
                <Text style={{ fontSize: 16, color: "#808080", fontWeight: "bold" }}>UFC $300K YEAR FINAL</Text>
              </View>
      <View style={{flexDirection:"row"}}>
      <View style={{ width: "20%", alignItems: "center" }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
        <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>12</Text>
        </View>
      </View>
      <View style={{ width: "50%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>$12</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Entry Fee</Text>
        </View>

      </View>
      <View style={{ width: "30%",alignItems:"center",borderLeftWidth:1,borderLeftColor:"#e2e2e2" }}>

        <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
          <Text style={{ fontSize: 18, color: "#006400", fontWeight: "bold" }}>$30000000</Text>
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, color: "#a9a9a9" }}>Total Prizes</Text>
        </View>

      </View>
      </View>
   
</TouchableOpacity>
  </View>

        







       <Footer title={"home"} back={false} navigation={this.props.navigation} />



      </View>


    );



  }

}
const styles = StyleSheet.create({
  popbox1: {
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
    
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 1,

    paddingVertical: 10,
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