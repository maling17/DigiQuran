import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Vibration from 'react-native-vibration';
import Lingkaran from './Lingkaran';
import Sound from 'react-native-sound';
import AsyncStorage  from '@react-native-community/async-storage';



var radio_props = [
    {label: 'Sound', value: "Sound" },
    {label: 'Vibrate', value: "Vibrate"  },
    {label: 'Muted', value: "Muted" }
  ];

  var radio_props2 = [
    {label: '33', value: 33 },
    {label: '99', value: 99 },
    {label: '100', value: 100 }
  ];

  var whoosh = new Sound('ketukan.mp4', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
   
    
  });

class BodyTasbih extends Component {

  Dzikir=[];
  constructor(props) {
    super(props);
    this.state = {
        count:0,
        total:0,     
        dialogVisible:false,
        dialogVisible2:false,
        number:33,
        value:'Sound',
        value2:33,
        initial:0,
        initial2:0
        
    };

  }
    componentDidMount(){
      
      this.getData();
    
      }

    componentWillUnmount(){
      
      this.setCountItem();
        
      }

      // function menambah value ketukan
    _incrementCount = async (key) => {

        this.setState(prevState => ({ count: prevState.count + 1 }));
        this.setState(prevState => ({ total: prevState.total + 1 }));
      
        if(this.state.count==this.state.value2 || this.state.count>this.state.value2 ){
            this.state.count=0
            return this.state.count
          }
        
          if(this.state.value == "Vibrate"){
            this.setState(()=>({initial:1}))
              Vibration.vibrate(300);
              
          }if(this.state.value == "Sound"){
            this.setState(()=>({initial:0}))
              whoosh.play()
              
          }if(this.state.value == "Muted"){
          this.setState(()=>({initial:2}))
      }

        
        if(this.state.value2 == "33"){
            
          this.setState(()=>({initial2:0}))

        }if(this.state.value2 == "99"){
          
          this.setState(()=>({initial2:1}))

        }if(this.state.value2 == "100"){
          
          this.setState(()=>({initial2:2}))

        }      
      }//end here

    //untuk menyimpan setting data ke local storage
    setCountItem = async () => {
      const valueSound = ["soundKey", this.state.value.toString()]
      const valueDzikir = ["dzikirKey", this.state.value2.toString()]
      const valueCount = ["countKey", this.state.count.toString()]
      const valueTotal = ["totalKey", this.state.total.toString()]
      const valueInitial = ["initial", this.state.initial.toString()]
      const valueInitial2 = ["initial2", this.state.initial2.toString()]
      
      try {
       
       await AsyncStorage.multiSet([valueSound, valueDzikir,valueCount,valueTotal,valueInitial,valueInitial2])
      
      } catch(e) {
          console.log(e);
          
      }

    }

    //untuk mengambil data setting di local storage
    getData = async () => {
      const {count,total,value,value2,initial,initial2}=this.state
      
      let valueSound;
      let valueDzikir;
      let valueCount;
      let valueTotal;
      let valueInitial;
      let valueInitial2;
      let Sound;
      let Dzikir;
      let Hitung;
      let TotalHitung;
      let Initial;
      let Initial2;

      try {
       
          await AsyncStorage.getItem('soundKey').then((res) => {
            valueSound = res == null ? "Sound" : res;
            console.log("valeSound: "+valueSound);
            
          })
    
         await AsyncStorage.getItem('dzikirKey').then((res)=>{
            valueDzikir = res ==null ? 33:res;
          })
     
         await AsyncStorage.getItem('countKey').then((res)=>{
            valueCount = res ==null ? 0:res;
          })
     
         await AsyncStorage.getItem('totalKey').then((res)=>{
            valueTotal = res ==null ? 0:res;
          })
     
          await AsyncStorage.getItem('initial').then((res)=>{
            valueInitial = res ==null ? 0:res;
          })
    
         await AsyncStorage.getItem('initial2').then((res)=>{
            valueInitial2 = res ==null ? 0:res;
          })
      
        Hitung = this.state.count=parseInt( valueCount)
        TotalHitung= this.state.total=parseInt( valueTotal)
        Sound= this.state.value=valueSound
        Dzikir= this.state.value2=parseInt( valueDzikir)
        Initial=this.state.initial=parseInt(valueInitial)
        Initial2=this.state.initial2=parseInt(valueInitial2)

        this.setState(() => ({ count: Hitung}))
        this.setState(() => ({ total: TotalHitung}))
        this.setState(() => ({ value: Sound}))
        this.setState(() => ({ value2: Dzikir}))
        this.setState(() => ({ initial: Initial}))
        this.setState(() => ({ initial2: Initial2}))

        console.log(valueSound,valueDzikir,valueCount,valueTotal,valueInitial2,valueInitial);
        
        } catch(e) {
      
          // error reading value
          console.log(e);
          
        }
        return count,total,value,value2,initial,initial2
      }
      
    //mereset hitungan angka hitungan dan total hitungan
    _resetNumber = () =>{
        this.setState(prevState => ({ count: prevState.count * 0 }));
        this.setState(prevState => ({ total: prevState.total * 0 }));
      
      }
      
      //untuk memunculkan pilihan setting ada suara,getar dan mute
    showDialog = () => {
        this.setState({ dialogVisible: true });
      };

      //untuk setting max Dzikir yang dapat dipilih
    showDialog2 = () => {
        this.setState({ dialogVisible2: true });
      };
   
  render() {
   
    return (
     <View>
        
        {/* untuk dialog setting suara, vibrated, dan muted */}
        <ConfirmDialog
            animationType="fade"
            title="Sound Settings"
            visible={this.state.dialogVisible}
            onTouchOutside={() => this.setState({dialogVisible: false})}
            positiveButton={{
                title: "OK",
                onPress: ()=> this.setState({dialogVisible: false})
                ,titleStyle:{color:'#08869F'}
            }} 
            negativeButton={{
                title:"Cancel",
                onPress:()=> this.setState({dialogVisible: false,value:this.state.value}),
                titleStyle:{color:"#08869F"}
            }}>
                <View>
                    <RadioForm 
                        animation={true}
                        radio_props={radio_props}
                        initial={this.state.initial}
                        onPress={(value) => {this.setState({value:value})}}
                        isSelected={true}
                        buttonColor={'#08869F'}
                        />
                </View>
        </ConfirmDialog>

        {/* untuk settingan max dzikir yang dapat dipilih */}
        <ConfirmDialog
            animationType="fade"
            title="Max Dzikir"
            visible={this.state.dialogVisible2}
            onTouchOutside={() => this.setState({dialogVisible2: false})}
            positiveButton={{
                title: "OK",
                onPress: ()=> this.setState({dialogVisible2: false})
                ,titleStyle:{color:'#08869F'}
            }} 
            negativeButton={{
                title:"Cancel",
                onPress:()=> this.setState({dialogVisible2: false,value2:33}),
                titleStyle:{color:"#08869F"}
            }}>
                <View>
                    <RadioForm
                        animation={true} 
                        initial={this.state.initial2}
                        radio_props={radio_props2}
                        onPress={(value2) => {this.setState({value2:value2})}}
                        buttonColor={'#08869F'}/>
                </View>
        </ConfirmDialog>
       
        {/* untuk tap hitung dzikir */}
        <View style={styles.bgcolor}>
           
            <TouchableOpacity style={{height:772}} onPress={()=>this._incrementCount()}>
                <Lingkaran/>
            </TouchableOpacity>
            
             <Text style={{textAlign:"center",fontSize:16,color:"white",marginTop:280,marginLeft:124,position: 'absolute',width:120 }}>{this.state.count}/{this.state.value2}</Text>
             <Text style={{textAlign:"center",fontSize:70,color:"white",marginTop:300,marginLeft:124 ,position: 'absolute',width:120 }}>{this.state.count}</Text>
             <Text style={{textAlign:"center",fontSize:16,color:"white",marginTop:410,marginLeft:134 ,position: 'absolute',width:100}}>Total: {this.state.total}</Text>
        
        {/* untuk tombol reset , setting mode sound, setting max dzikir */}
        <View style={{width:300, marginTop:680, marginLeft:50,flexDirection:'row',position: 'absolute',}}>
            
            {/* button reset */}   
            <TouchableOpacity style={{marginLeft:30}} onPress={()=>this._resetNumber()}>
                <View style={{
                    borderRadius:100/2,
                    backgroundColor:'white',
                    width:50,
                    height:50,
                    elevation:2,
                }}>
            
                  <Icon2
                      name="repeat" 
                      size={20} 
                      style={{
                        marginLeft:15,
                        marginTop:15,
                        color:"#08869F"}}/>

                </View>
            </TouchableOpacity>
        
        {/* untuk button setting suara */}
        <TouchableOpacity style={{marginLeft:30}} onPress={this.showDialog.bind(this)}>
            <View style={{
              borderRadius:100/2,
              backgroundColor:'white',
              width:50,
              height:50,
              elevation:2,
              
            }}>
                <Icon
                name="sound" 
                size={20} 
                style={{
                  marginLeft:15,
                  marginTop:15,
                  color:"#08869F"}}/>
            </View>
        </TouchableOpacity>

        {/* untuk setting berapa banyak dizikir */}
        <TouchableOpacity style={{marginLeft:30}} onPress={this.showDialog2.bind(this)}>
            
            <View style={{
              borderRadius:100/2,
              backgroundColor:'white',
              width:50,
              height:50,
              elevation:2,
              
            }}>
                <Text style={{width:50,textAlign:'center',marginTop:15,color:"#08869F"}}> {this.state.value2} </Text>
          </View>

        </TouchableOpacity>

    </View>

  </View>   
    
</View>
    );
  }
}

const styles = StyleSheet.create({
  
  
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#563636',
      marginTop: 40
      },
      bgcolor:{
          backgroundColor: '#08869F',
      }
  });

export default BodyTasbih;
