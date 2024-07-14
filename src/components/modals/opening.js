import { View, Text, Modal} from 'react-native-web';
import { styles } from '../styles';

const OpeningModal = (props) => {

    function closeModal(){
        props.setOpeningModalIsOpen(false)
    }

    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={props.openingModalIsOpen}
        onReluestClose={closeModal}
        >
            <View style={styles.modal}>

            </View>
        </Modal>
    )
}

export default OpeningModal;
