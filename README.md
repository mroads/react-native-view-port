# react-native-responsive-view-port

This package helps to create responsive application for either complete landscape or portrait applications.

![](button-wrapper.gif)

# Setup
### Installation

`$ npm install react-native-responsive-view-port --save`

or

`$ react-native link react-native-responsive-view-port`

## Usage

### Props   
##### Props you may need to pass while implementing. This wrapper default extends the properties of the touchable Opacity.

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| createViewPortConfig     |  () => {}  |  `function`  | Called when user clicked once.|

### Basic
```javascript

import { createViewPortConfig } from 'react-native-responsive-view-port';

const baseDeviceWidth: 1920;
const baseDeviceHeight: 1080;
/*
  createViewPortConfig returns default values for width: 1280px and height 800px
  example: const { vw, vh } = createViewPortConfig();
*/
const { vw, vh } = createViewPortConfig(baseDeviceWidth, baseDeviceHeight); 

function TextWrapper() {
  return (
    <View style={{ height: 500 * vh, width: 600 * vh, paddingVertical: 10 * vh, paddingHorizontal: 15 * vh }}>
      <TextInput
        style={{
          height: 60 * vh,
          marginLeft: 16 * vw,
          borderBottomColor: '#FFFFFF',
          flex:1,
          justifyContent: 'center',
          fontSize: 25 * vh,
        }}
	placeholder="Enter Text..."
	keyboardType="email-address"
	underlineColorAndroid='transparent'
      />
     </View>
   );
 }
```
