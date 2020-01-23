import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  {createDrawerNavigator } from 'react-navigation-drawer';
import { 
    IntroScreen
} from '../screens';
import HomeScreen from '../screens/Home/HomeScreen';
import VideoScreen from '../screens/Video/VideoScreen';
import VideoList from '../screens/Video/VideoList';
import ArticleList from '../screens/Article/ArticleList';
import ArticleDetailScreen from '../screens/Article/ArticleDetailScreen';
import TasbihScreen from '../screens/Tasbih/TasbihScreen';
import JadwalShalatScreen from '../screens/JadwalShalat/JadwalShalatScreen';
import DailyInsightScreen from '../screens/DailyInsight/DailyInsightScreen';
const StackNavigator = createStackNavigator({
    IntroScreen: {
        screen: IntroScreen
    },
    HomeScreen: {
        screen: HomeScreen
    },VideoScreen: {
        screen: VideoScreen
    },VideoList: {
        screen: VideoList
    },ArticleDetailScreen: {
        screen: ArticleDetailScreen
    },ArticleList: {
        screen: ArticleList
    },TasbihScreen:{
        screen:TasbihScreen
    },JadwalShalatScreen:{
        screen:JadwalShalatScreen
    },DailyInsightScreen:{
        screen:DailyInsightScreen
    }
}, { 
    initialRouteName: 'HomeScreen',
    headerMode: 'none'
});


const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;