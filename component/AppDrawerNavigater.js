import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigaor'
import CustomSideBar from './CustomSideBar'
import SettingScreen from '../screens/SettingScreen'


export const AppDrawerNavigaor = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    setting:{
        screen:SettingScreen
    }
},
    {
        contentComponent:CustomSideBar
 },
{
    initialRouteName:'Home'
})