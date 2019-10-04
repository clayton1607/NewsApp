import * as WebBrowser from 'expo-web-browser';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Item } from 'native-base';
import React,{ Component } from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Picker,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import * as Font from 'expo-font';
import { SearchBar } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import axios from 'react-native-axios';
import ListNews from '../components/ListNews';
export default class HomeScreen extends Component{
  state={
    isReady: false,
    articles:[],
    search: '',
  }
  
  async componentDidMount() {
    console.log("here")
    await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=48041bd93c834e97b57eb595d62e8e5b").then(
      res=>{
        // console.log(res.data.articles);
        this.setState({articles:res.data.articles});
      }
    )
    await Font.loadAsync({
      Roboto: require('../constants/Fonts/Roboto.ttf'),
      Roboto_medium: require('../constants/Fonts/Roboto_medium.ttf'),
      // ...Ionicons.font,
    });
    
    this.setState({ isReady: true });
  }

  updateSearch = search => {
    this.setState({ search });
  };
  searchFetch=search=>{
    axios.get("https://newsapi.org/v2/everything",{params:{
      q:this.state.search,
      apiKey:'48041bd93c834e97b57eb595d62e8e5b'
    }}).then(
      res=>{
        this.setState({articles:res.data.articles});
      }
    )
  }
  render(){
    if (this.state.isReady){
    return(
      <Container>
      <ScrollView>
      <SearchBar
          placeholder="Type Here..."
          onSubmitEditing={this.searchFetch}
          onChangeText={this.updateSearch}
          value={this.state.search}
          showLoading={true}
        />
      {/* <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>*/}
 {this.state.articles.map((article,index)=>{
   return(<ListNews key={index}
    title={article.title}
    thumbnail={article.urlToImage}
    source={article.source.name}
    publishedAt={article.publishedAt}
    url={article.url}
    onPress={()=>{
      this.props.navigation.navigate('Details', {
        key:index,
        title:article.title,
        thumbnail:article.urlToImage,
        source:article.source.name,
        publishedAt:article.publishedAt,
        url:article.url,
        content:article.content,
        
      });
    }}
  /> );
 })}
    {/* <ListNews 
    title={this.state.articles[0].title}
    thumbnail={this.state.articles[0].urlToImage}
    source={this.state.articles[0].source.name}
    publishedAt={this.state.articles[0].publishedAt}
    url={this.state.articles[0].url}/> */}
    </ScrollView>
    </Container>  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
