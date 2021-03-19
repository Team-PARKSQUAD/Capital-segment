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
      const [{list},dispatch] = this.context;
      const { labelWidth, selectedSlice } = this.state;
      const { label, value } = selectedSlice;
      // const keys =   ['Hostel Mess', 'Books',    'Gym',   'Hostel Fee', 'Remaining'];
      const keys = []
      const values = [    15,          25,        35,         45,          55      ];
      const colors = ['#00213A',     '#003966', '#005393', '#006BBF',   '#008FFF'  ]
      list.map(ls => keys.push(ls.name))
      const data = keys.map((key, index) => {
          return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
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
