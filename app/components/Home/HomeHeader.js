import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import Geolocation from 'react-native-geolocation-service';
import RNReverseGeocode from '@kiwicom/react-native-reverse-geocode';
class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jadwalShalat:[],
        article:[],
        location:'',
        
       };
  }

  changePress = () => {
    this.props.navigation.navigate('ArticleDetailScreen');
    console.log(this.props);
}


componentDidMount(){

  this.getCoodinate()

  //untuk request ke api ke banyak api
    Promise.all([
      axios.get(`https://digiquran.id/api/v2/jadwal-salat/today/-6.285601/106.727883`),
      axios.get(`https://blog.digiquran.id/wp-json/wp/v2/posts/?_embed&per_page=1`)
    ])
      .then(([jadwalShalatResponse, articleResponse]) => {
            this.setState({jadwalShalat : jadwalShalatResponse.data, article : articleResponse.data});
          });


      //untuk mengambil tanggal sekarang
      var that = this;

      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year

      that.setState({
        //Setting the value of the date time
        date: date + '/' + month + '/' + year

      });

       //untuk mengambil waktu sekarang 
      setInterval( () => {
        this.setState({
          curTime : new Date().toTimeString()
        })
      },1000)

  }//end dari componentdidmount

    getCoodinate=()=>{
     
        // untuk Mengambil cordinate sekarang.
        Geolocation.getCurrentPosition(
          (position) => {
              console.log(position);
              return position
          },
          (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 ,showLocationDialog:true}
      );
      
        }

    //Untuk mengetahui Waktu Shalat
    Jadwal=()=>{
      const {curTime,jadwalShalat } = this.state
      var waktuShalat;

      if(curTime>jadwalShalat.Fajr){
         waktuShalat= 'Dzuhur';
         
      }if(curTime>jadwalShalat.Dhuhr){
        waktuShalat='Ashar';
      }if(curTime>jadwalShalat.Asr){
        waktuShalat='Maghrib'
      }if(curTime>jadwalShalat.Maghrib){
        waktuShalat='Isya'
      }if(curTime>jadwalShalat.Isha){
        waktuShalat='Midnight'
      }if(curTime>jadwalShalat.Midnight){
        waktuShalat='Subuh'
      }
      return waktuShalat;
    }
    
    // untuk Jam Waktu Shalat
    Waktu=()=>{
      const {curTime,jadwalShalat } = this.state
      var waktuShalat;

      if(curTime>jadwalShalat.Sunrise){
         waktuShalat= jadwalShalat.Dhuhr;
      }if(curTime>jadwalShalat.Dhuhr){
        waktuShalat=jadwalShalat.Asr;
      }if(curTime>jadwalShalat.Asr){
        waktuShalat=jadwalShalat.Maghrib;
      }if(curTime>jadwalShalat.Maghrib){
        waktuShalat=jadwalShalat.Isha;
      }if(curTime>jadwalShalat.Isha){
        waktuShalat=jadwalShalat.Midnight;
      }if(curTime>jadwalShalat.Midnight){
        waktuShalat=jadwalShalat.Sunrise
      }
      return waktuShalat;
    }

    //menentukan kategori yang akan diberikan ke artikel
    getKajian=()=>{
      const {article}=this.state
      var kajian;
        if(article[0].categories=='1' ){
          kajian='Doa'
        } if(article[0].categories=='10' ){
          kajian='Kajian Fiqih'
        } if(article[0].categories=='11' ){
          kajian='Kajihan Hadist'
        } if(article[0].categories=='13' ){
           kajian='Sejarah Islam'
        }

      return kajian
     }

    // untuk keyExtractornya
    keyExtractor=(item, index)=>index.toString()

    // untuk render item
    renderItem = ({item}) => (
        <View>
          {/* Card Artikel */}
          <TouchableOpacity 
                style={{marginTop:180}} 
                onPress={()=>this.props.navigation.navigate('ArticleDetailScreen',
                {
                title:item.title.rendered, kajian:this.getKajian(),
                content:item.content.rendered,date:item.date, 
                url:this.getImageWordpress()
                }) }>

            <View style={style.judulCard} >
              
                <Text style={style.textJudulArtikel} >{item.title.rendered}</Text>
          
            </View>
          </TouchableOpacity>
        </View>
    )

    // mengambil gambar dari api wordpress
    getImageWordpress=()=>{
      const {article}=this.state
      if (typeof article[0] !='undefined'){
        
        return {uri:article[0]._embedded['wp:featuredmedia'][0].source_url}
      }
        return require('../../../assets/images/Rectangle.png')
    }

  
  render() {

    const dateNow=new Date().toDateString();
    const tanggalNow=moment(dateNow).format("DD MMMM YYYY");
    const waktuNow=moment().format('LTS');
    
    return (
     <View>
      
        <View style={{flex:1,marginBottom:300}} >

            <Image style={{resizeMode:'cover',height:220}} source={this.getImageWordpress()} />
            <Text style={style.textHeader}>DigiQuran</Text>  
            <Text style={style.textArtikel}>Artikel Terbaru</Text>

        </View>      
  
    {/* view Card artikel dan Jadwal Shalat */}
    <View style={{position:'absolute'}}>

    <FlatList 

      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={this.state.article}
      renderItem={this.renderItem}
      keyExtractor={this.keyExtractor}

      />

       {/* Card Jadwal Shalat  */}
       <View style={style.judulCard2}>
         
               {/* Lokasi Sekarang */}
               <Text style={style.fontBold}>Jakarta</Text>
              
               {/* Tanggal Sekarang  */}
               <Text style={{ top:28,marginLeft:22,fontSize:12,color:'#000',fontFamily:'Barlow-Regular'}}> {tanggalNow} </Text>
               
               {/* Jadwal Shalat seperti shubuh ,dzuhur,ashar dll */}
               <Text style={{bottom:8, marginLeft:140,fontSize:21,color:'#08869F',fontWeight:'bold'}}> {this.Jadwal()}</Text>

               {/* Waktu shalat  */}
               <Text style={{bottom:42,left:240,fontWeight:'bold',width:62,height:20}}> {this.Waktu()} </Text>

               <Text style={{bottom:41, width:61,height:20, marginLeft:244,fontSize:14,color:'#000'}}>{waktuNow}</Text>
               
      </View>
    </View>
   </View>
    );
  }
}
const style=StyleSheet.create({
    
    textHeader:{
        position:'absolute',
        top:15,
        left:22,
        fontSize:14,
        fontWeight:'bold',
        color:'#fff'
    },

    relative:{
        flex:1,
        position:'relative'
    },

    textArtikel:{
        marginTop:150,
        marginLeft:30,
        position:'absolute',
        fontSize:14,
        color:'#fff',
        fontWeight:'bold'
    },

    judulCard:{
       
        width:330,
        height:100,
        marginLeft:15,
        alignContent:'center',
        backgroundColor:'#08869F'
    },

    judulCard2:{
      marginLeft:15,
       alignContent:'center',
        width:330,
        height:100,
        backgroundColor:'#f4f4f4'
    },
    textJudulArtikel:{
        width:300,
        marginTop:23,
        marginLeft:18,
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        fontFamily:'Barl ow-Regular'
    },
    fontBold:{
        fontWeight:'bold',
        top:26,
       marginLeft:43,
        fontSize:14
    }

});
export default HomeHeader;
