  
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
    Linking
} from 'react-native'
import AppConfig from '../constants/appconfig';
var HTMLView = require('react-native-htmlview')
// import CacheableImage from 'react-native-cacheable-image'

var { width, height } = Dimensions.get('window');
import { darkgradient } from '../constants/darkgradient.png';

class NewsDetail extends Component {
    static componentName = 'NewsDetail';
    state ={
        url:''
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
        let url=JSON.stringify(navigation.getParam('url', 'NOT AVAILABLE'));
        this.setState({
            url:url
        });
    }

    /**
    * RENDER
    */
   handleClick = () => {
    Linking.canOpenURL(this.state.url).then(supported => {
      if (supported) {
        Linking.openURL(this.state.url);
      } else {
        console.log("Don't know how to open URI: " + this.state.url);
      }
    });
  };
    render = () => {
        const { navigation } = this.props;
        let title=JSON.stringify(navigation.getParam('title', 'NOT AVAILABLE'));
        let thumbnail=JSON.stringify(navigation.getParam('thumbnail', 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png'));
        let source=JSON.stringify(navigation.getParam('source', 'NOT AVAILABLE'));
        let publishedAt=JSON.stringify(navigation.getParam('publishedAt', 'NOT AVAILABLE'));

        // let author=JSON.stringify(navigation.getParam('author', 'NOT AVAILABLE'));
        let content=navigation.getParam('content', 'NOT AVAILABLE');
        console.log(thumbnail)
        
            return (
                <View>
                    
                    <ScrollView>
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL(this.state.url)}}>
                            <Image source={{uri: thumbnail}} style={styles.gradientimage}/>
                            <Text numberOfLines={2} style={[styles.baseText, styles.listRow_text]}>{title}</Text>
                        </TouchableOpacity>
                        <View style={styles.bottomView}>
                            <Text style={[styles.baseText, styles.subTitleText]}>{source}</Text>
                            <Text style={[styles.baseText, styles.subTitleText]}>{"  •  "}</Text>
                            <Text style={[styles.baseText, styles.subTitleText]}>{publishedAt}</Text>
                        </View>
                        <View style={styles.body}>
                            {/* <HTMLView stylesheet={htmlstyles} value={content} /> */}
                            <Text>
                                {content}
                            </Text>
                        </View>
                        <View style={styles.bottomPadding}>
                        </View>
                    </ScrollView>
                </View >
            );
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
     
        fontSize: AppConfig.baseFontSize,
        fontWeight: 'bold',
        color: AppConfig.textColor,
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
        fontSize: 10,
        color: AppConfig.textColor,
    },
});

/* Export Component ==================================================================== */
export default NewsDetail