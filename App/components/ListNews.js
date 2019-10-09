import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Body, Left } from 'native-base';
import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import axios from 'react-native-axios';
import extractDomain from 'extract-domain';

class ListNews extends Component {
    // static propTypes={
    //     title: React.PropTypes.string.isRequired,
    //     thumbnail: React.PropTypes.string.isRequired,
    //     source: React.PropTypes.string.isRequired,
    //     publishedAt: React.PropTypes.string.isRequired,


    // }
    state = {
        logo: '',
        isReady: false,
    }
    componentDidMount() {
        // console.log(this.props.url);
        // logo:'https://api.ritekit.com/v1/images/logo?domain='+getDomain+'&client_id=1ef911e9c38215b9b9f663051b4496920a7b8c8f2b66',
        let getDomain = extractDomain(this.props.url);
        this.setState({
            logo:'https://api.ritekit.com/v1/images/logo?domain='+getDomain+'&client_id=1ef911e9c38215b9b9f663051b4496920a7b8c8f2b66',
            isReady:true})
    }
    render() {
        
        let { title, source, thumbnail, onPress, publishedAt } = this.props;
        // console.log(this.state.logo)
        if (this.state.isReady) {
            return (
                <TouchableOpacity onPress={onPress}>
                <Content>
                    <Card cardItemPadding={12}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: this.state.logo }} />
                                <Body>
                                    <Text>{source}</Text>
                                    <Text note>{publishedAt}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: thumbnail }} style={{ height: 200, width: 350, flex: 1, alignItems: 'center' }} />
                                <Text>
                                    {title}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                </TouchableOpacity>

            );
        }
        else {
            return (
                    <ActivityIndicator size="large" color="#0000ff" />

            )
        }
    }
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center'
    },
})
/* Styles ==================================================================== */
// const styles = StyleSheet.create({
//     baseText: {
//         fontFamily: 'Verdana',
//         fontSize: AppConfig.baseFontSize,
//         fontWeight: 'bold',
//         color: AppConfig.textColor,
//     },
//     subTitleText: {
//         color: AppConfig.subtitleTextColor,
//         fontSize: AppConfig.subTitleFontSize,
//     },
//     listRow: {
//         left: 0,
//         right: 0,
//         height: 83,
//         backgroundColor: "#f5f5f7",
//         alignSelf: 'flex-start',

//     },
//     listRowInner: {
//         left: 10,
//         right: 5,
//         maxWidth: width - 20,
//         height: 65,
//         top: 16,
//         backgroundColor: '#f5f5f7',
//         flexDirection: 'row'

//     },
//     image: {
//         height: 65,
//         width: 65,
//         top: 0,
//         left: 7,
//         backgroundColor: '#B8B4B8'
//     },
//     sidePanel: {
//         height: 65,
//         width: width - 105,
//         top: 0,
//         left: 20,
//         backgroundColor: '#f5f5f7',
//         flexDirection: 'column',
//     },
//     bottomView: {
//         bottom: 0,
//         top: 7,
//         backgroundColor: '#f5f5f7',
//         flexDirection: 'row',
//         maxWidth: width - 85,
//         height: 20
//     },
//     listRow_text: {
//         color: "#333",
//         textAlign: 'left',
//         fontWeight: '500',
//         backgroundColor: '#f5f5f7',
//         maxWidth: width - 85,
//         height: 35,
//     },
//     rightAlign: { position: 'absolute', right: 10, top: 0 },
//     listRow_description: {
//         color: "#666",
//         textAlign: 'left',
//         fontWeight: '500',
//         backgroundColor: 'transparent',
//         maxWidth: width,
//     },
//     listRowImage_text: {
//         color: "#f5f5f7",
//     },

//     // With Image
//     imageBackground: {
//         backgroundColor: "#333",
//     },
// });
export default ListNews;