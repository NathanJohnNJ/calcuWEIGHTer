import { View, Text, Pressable} from 'react-native-web';
import { styles } from './styles';
import { useState } from 'react';
import OpeningModal from '../components/modals/opening';

const Home = (props) => {
    const [openingModalIsOpen, setOpeningModalIsOpen] = useState(false);

    function openOpeningModal(){ 
        props.setOpeningModalIsOpen(true)
    }
    return (
        <View style={styles.page}>
            <View style={styles.btnSection}>
                <Pressable style={styles.button} onPress={openOpeningModal}>
                    <Text style={styles.btnText}>
                        Let's Begin...
                    </Text>
                    <OpeningModal openingModalIsOpen={openingModalIsOpen} setOpeningModalIsOpen={setOpeningModalIsOpen} weight={props.weight} height={props.height} setWeight={props.setWeight} setHeight={props.setHeight}  waist={props.waist} setWaist={props.setWaist} age={props.age} setAge={props.setAge}/>
                </Pressable>
            </View>
        </View>
    )
}

export default Home;
