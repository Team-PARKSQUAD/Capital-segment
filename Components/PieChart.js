import { SmsOutlined } from '@material-ui/icons';
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { StateContext } from '../context';

class Pie extends React.PureComponent {
  static contextType = StateContext;
    constructor(props) {
        super(props);
        this.state = {
        selectedSlice: {
            label: '',
            value: 0
        },
        labelWidth: 0
        }
    }

    render() {
      const [{list}, dispatch] = this.context;
      const { labelWidth, selectedSlice } = this.state;
      const { label, value } = selectedSlice;
      const keys = [];
      const values = [];
      const colors = [ '#00213A', '#003966', '#005393', '#006BBF', '#008FFF' ]
      list.map(ls => keys.push(ls.name))

      const accountBal = 50000; // If starting balance in the reducer change, this shoul also change
      list.map(ls => values.push(  (ls.amount/accountBal) * 100  ))
      values[0] = 100 - values.slice(1).reduce((a, b) => a + b, 0)
      console.log(values)

      const data = keys.map((key, index) => {
          return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          arc: { outerRadius: (70 + (values[index]/5)) + '%', padAngle: label === key ? 0.1 : 0 },
          onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
          }
      })
    const deviceWidth = Dimensions.get('window').width


    return (
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <PieChart
          style={{ height: 300, width: 400 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            // position: 'absolute',
            // fontSize: '20%',
            fontWeight: '600',
            fontSize: 20,
            textAlign: 'center',
          }}>
          {`${label} \n ${value}%`}
        </Text>
      </View>
    )
  }
}

export default Pie;
