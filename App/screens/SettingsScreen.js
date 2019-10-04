// import React from 'react';
// import { ExpoConfigView } from '@expo/samples';

// export default function SettingsScreen() {
//   /**
//    * Go ahead and delete ExpoConfigView and replace it with your content;
//    * we just wanted to give you a quick view of your config.
//    */
//   return ()>;
// }

// SettingsScreen.navigationOptions = {
//   title: 'app.json',
// };
import React, { Component } from 'react';
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {items,categories} from '../constants/NewsWebsites';
import CountryPicker,{getAllCountries} from 'react-native-country-picker-modal'
 const LIST = 
 ["AR","AU","AT","BE","BR","BG","CA","CN","CO","CU","CZ","EG","FR","DE","GR","HK","HU","IN","ID","IE","IL","IT","JP","LV","LT","MY","MX","MA","NL","NZ","NG","NO","PH","PL","PT","RO","RU","SA","RS","SG","SK","SI","ZA","KR","SE","CH","TW","TH","TR","AE","UA","GB","US","VE"]
 
 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      selectedCategories:[],
      country:'',
      cca2:'IN',
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };
  onSelectedCategoriesChange = (selectedCategories) => {
    this.setState({ selectedCategories });
  };
 
  render() {
    console.log(LIST)
    return (
      <ScrollView>
        <SectionedMultiSelect style={styles.welcome}
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="Choose News Sources..."
          showDropDowns={false}
          readOnlyHeadings={false}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          iconKey="icon"
        />        
        <Text  >Select country</Text>
        <CountryPicker
          countryList={LIST}
          onChange={value => {
            this.setState({ cca2: value.cca2 })
          }}
          cca2={this.state.cca2}
          translation="eng"
          filterable={true}
          filterPlaceholder={'Search'}
        />
        <Text style={styles.instructions}>press on the flag</Text>

        <SectionedMultiSelect style={styles.welcome}
          items={categories}
          uniqueKey="id"
          subKey="children"
          selectText="Choose Categories..."
          showDropDowns={false}
          readOnlyHeadings={false}
          onSelectedItemsChange={this.onSelectedCategoriesChange}
          selectedItems={this.state.selectedCategories}
        />     
      </ScrollView>
    );  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  },
  instructions: {
    fontSize: 12,
    textAlign: 'right',
    color: '#888',
    marginBottom: 5
  },
  data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 ,
    color: '#777'
  }
})
