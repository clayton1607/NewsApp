  
/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    InteractionManager,
    TouchableOpacity,
    Linking,
    Share,
    Button
} from 'react-native'
import AppConfig from '../constants/appconfig';
import axios from 'react-native-axios';
var HTMLView = require('react-native-htmlview')
// import CacheableImage from 'react-native-cacheable-image'

var { width, height } = Dimensions.get('window');
import { darkgradient } from '../constants/darkgradient.png';

class NewsDetail extends Component {
    static componentName = 'NewsDetail';
    state ={
        url:'',
        isReady:false,
    }
    // static propTypes={
    //     title: React.PropTypes.string.isRequired,
    //     thumbnail: React.PropTypes.string.isRequired,
    //     source: React.PropTypes.string.isRequired,
    //     publishedAt: React.PropTypes.string.isRequired,
    //     content: React.PropTypes.string.isRequired,
    //     url: React.PropTypes.string.isRequired,
    // }

    componentDidMount = () => {
        const { navigation } = this.props;
        let url=navigation.getParam('url', 'NOT AVAILABLE');
        axios.post('http://192.168.43.29:5002/url',{url:url}).then(res=>{
            this.setState({
                url:res.data[0],
                isReady:true
            });
        })
        
    }

    /**
    * RENDER
    */
   handleClick = () => {
    Linking.canOpenURL(this.state.url.url).then(supported => {
      if (supported) {
        Linking.openURL(this.state.url.url);
      } else {
        console.log("Don't know how to open URI: " + this.state.url.url);
      }
    });
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          this.state.url.url,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

    render = () => {
        const { navigation } = this.props;
        let title=navigation.getParam('title', 'NOT AVAILABLE');
        let thumbnail=navigation.getParam('thumbnail', 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png');
        let source=navigation.getParam('source', 'NOT AVAILABLE');
        // let publishedAt=JSON.stringify(navigation.getParam('publishedAt', 'NOT AVAILABLE'));

        // let author=JSON.stringify(navigation.getParam('author', 'NOT AVAILABLE'));
        // let content=navigation.getParam('content', 'NOT AVAILABLE');
        // console.log(this.state.url.text)
        console.log(thumbnail)
        if (this.state.isReady){
            return (
                <View>
                    
                    <ScrollView>
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL(this.state.url.url)}}>
                            <Image source={{uri: thumbnail}} style={styles.gradientimage}/>
                            
                        </TouchableOpacity>
                        
                        <View style={styles.bottomView}>
                            <Text style={[styles.baseText, styles.subTitleText]}>{source}</Text>
                            <Text style={[styles.baseText, styles.subTitleText]}>{"  •  "}</Text>
                            <Text style={[styles.baseText, styles.subTitleText]}>{this.state.url.date_publish}    </Text>
                            <Button onPress={this.onShare} title="Share" style={color="#555"} />

                        </View>
                      
                        <View style={styles.body}>
                            {/* <HTMLView stylesheet={htmlstyles} value={content} /> */}
                            <View style={{flexDirection: 'row'}}>
                            <Text style={styles.baseText} onPress={this.onShare}>{this.state.url.title}</Text>
                            </View>
                            <Text style={styles.bodyText}>
                                {this.state.url.text}
                            </Text>
                        </View>
                        <View style={styles.bottomPadding}>
                        </View>
                    </ScrollView>
                </View >
            );
        }
            else{
                return(
                  <View style={[styles.containerLoading, styles.horizontal]}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
                )
              }
    }
}
const htmlstyles = StyleSheet.create({
    p: {
        left: 10,
        width: width - 20,
        color: '#333',
    },
});
/* Styles ==================================================================== */
const styles = StyleSheet.create({
    image: {
        backgroundColor: '#B8B4B8',
        width: width,
        height: 220,
    },
    bodyText:{
        fontSize:20,

    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      },
      containerLoading: {
        flex: 1,
        justifyContent: 'center'
      },
    body: {
        top: 17,
        left: 17,
        width: width - 34,
    },
    loadingBackground: {
        backgroundColor: "#f5f5f7",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
    },
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f5f5f7',
    },
    bottomView: {
        backgroundColor: '#f5f5f7',
        flexDirection: 'row',
        maxWidth: width - 34,
        height: 35,
        left: 17,
        top: 16,
    },
    baseText: { 
        fontSize: 28,
        fontWeight: '600',
        color:"#555",
        fontStyle:'italic',
    },
    listRow_text: {
        textAlign: 'left',
        left: 17,
        backgroundColor: 'transparent',
        maxWidth: width - 34,
        height: 30,
        position: 'absolute',
        bottom: 40,
        color: "#fff",

    },
    bottomPadding: {
        height: 20,
    },
    gradientimage: {
        backgroundColor: 'transparent',
        width: width,
        height: 240,
    },
    subTitleText: {
        fontSize: 12,
        color: AppConfig.textColor,
    },
});

/* Export Component ==================================================================== */
export default NewsDetail