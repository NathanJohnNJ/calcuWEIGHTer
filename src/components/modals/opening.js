import { View, Text, Modal, TextInput, Picker, Pressable} from 'react-native-web';
import { styles } from './styles';
import { useState } from 'react';

const OpeningModal = (props) => {
  function closeModal(){
    props.setOpeningModalIsOpen(false)
  }
  const [ stone, setStone ] = useState (10)
  const [ lbs, setLbs ] = useState (0)

  function setWeight(e){
    const weightString = e.toString();
    props.setWeight(weightString)
  }
  const Weight = () => {
    return (
      <TextInput
      style={styles.details}
      onChangeText={setWeight}
      value={props.weight}
      keyboardType="numeric" />
    )
  }
  const Stone = () => {
    return(
      <View style={styles.stone}>
        <TextInput
        style={styles.stoneInput}
        onChangeText={setStone}
        value={stone}
        keyboardType="numeric" />
        <Text style={styles.stoneText}>st</Text>
        <TextInput
        style={styles.stoneInput}
        onChangeText={setLbs}
        value={lbs}
        keyboardType="numeric" />
        <Text style={styles.stoneText}>lbs</Text>
      </View>
    )
  }

  function submit(){
    if (props.weightUnits==='StoneAndPounds'){
      const weight = `${stone} st  ${lbs} lbs`
      props.setWeight(weight)
    }
  }
  return (
  <Modal
  animationType="slide"
  transparent={false}
  visible={props.openingModalIsOpen}
  onRequestClose={closeModal}
  >
    <View style={styles.modal}>
      <View style={styles.tableView}>

        <View style={styles.titleTable} >
          <Text style={styles.title}>
            YOUR CURRENT DETAILS
          </Text>
        </View>

        <View style={styles.firstTable} >
          <View style={styles.row}>
            <Text style={styles.header}>
              Age
            </Text>
            <TextInput
            style={styles.details}
            onChangeText={props.setAge}
            value={props.age}
            keyboardType="numeric" />
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>
              Height
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.picker}
              onValueChange={props.setHeightUnits}
              selectedValue={props.heightUnits}
              >
                <Picker.Item
                value="cm"
                label="Centimeters" />
                <Picker.Item
                value='"'
                label="Inches" />
                <Picker.Item
                value={`' "`}
                label="Feet & Inches" />
              </Picker>
            </View>
            <TextInput
            style={styles.details}
            onChangeText={props.setHeight}
            value={props.height}
            keyboardType="numeric" />
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>
              Weight
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.picker}
              onValueChange={props.setWeightUnits}
              selectedValue={props.weightUnits}
              >
                <Picker.Item
                value="kg"
                label="Kilograms" />
                <Picker.Item
                value="lbs"
                label="Pounds" />
                <Picker.Item
                value="st lbs"
                label="Stone & Pounds" />
              </Picker>
            </View>
            {
              props.weightUnits==="kg"||props.weightUnits==="lbs"?
              <Weight />
              :
              <Stone />
            }
            
          </View>
        </View>


        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.header}>
              Waist
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.picker}
              onValueChange={props.setWaistUnits}
              selectedValue={props.waistUnits}
              >
                <Picker.Item
                value="Centimeters"
                label="Centimeters" />
                <Picker.Item
                value="Inches"
                label="Inches" />
              </Picker>
            </View>
            <TextInput
            style={styles.details}
            onChangeText={props.setWaist}
            value={props.waist}
            keyboardType="numeric" />
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>
              Sex
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.sexPicker}
              onValueChange={props.setSex}
              selectedValue={props.sex}
              >
                <Picker.Item
                value="Please select"
                label="Please select" />
                <Picker.Item
                value="Male"
                label="Male" />
                <Picker.Item
                value="Female"
                label="Female" />
              </Picker>
            </View>
          </View>
        </View>


        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.header}>
              Calorie Intake
            </Text>
            <TextInput
            style={styles.calories}
            onChangeText={props.setCalorieIntake}
            value={props.calorieIntake}
            keyboardType="numeric" />
            <Text style={styles.empty}>
              kcal/day
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>
              Exercise
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222'}}>
              <Picker
              style={styles.sexPicker}
              onValueChange={props.setExercise}
              selectedValue={props.exercise}
              >
                <Picker.Item
                value="Please select"
                label="Please select" />
                <Picker.Item
                value="none"
                label="No Exercise" />
                <Picker.Item
                value="light"
                label="Light (1-2 days)" />
                <Picker.Item
                value="moderate"
                label="Moderate (3-5 days)" />
                <Picker.Item
                value="high"
                label="High (6-7 days)" />
              </Picker>
            </View>
            <Text style={styles.empty}>Weekly</Text>
          </View>
        </View>
        <Pressable onPress={submit} style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>   
    </View>
    <View style={styles.display}>
      <Text>Age: {props.age} years</Text>
      <Text>Height: {props.height}{props.heightUnits}</Text>
      <Text>Weight: {props.weight}{props.weightUnits}</Text>
      <Text>Waist: {props.waist}{props.waistUnits}</Text>
      <Text>Sex: {props.sex}</Text>
      <Text>Calorie Intake: {props.calorieIntake} kcal/day</Text>
      <Text>Exercise: {props.exercise}</Text>
    </View>
  </Modal>
  )
}

export default OpeningModal;
