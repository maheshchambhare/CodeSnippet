
import React ,{useState} from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputContainer from './InputContainer'
import { centerItem, colorsInInvoice, InvoiceFonts } from './styles'

const CBMCal = () => {

    const [length ,setLength] = useState("")

    const [inputField, setInputField] = useState([{ length , breadth : "",height :"", cbm:""}])

    const handleChange = (i:any,e:any,name:string) => {
        // const {name} = e.target.dataset
        let newData = [...inputField];
        newData[i][name] = e.nativeEvent.text,
        setInputField(newData)

        console.log(newData)
    }

    const addNewField = () => {
        setInputField([...inputField,{ length: "" , breadth : "",height :"", cbm:""}])
    }

    return (
        <SafeAreaView
        style={{
            flex:1,
            backgroundColor:"#fff",
        }}
        >
        <View
        style={{
            width: "95%",
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:30,
           
        }}
        >
            <Text
            style={{
                ...centerItem,
                textAlign:"center",
                ...InvoiceFonts.SemiBold,
                fontSize:22,
                marginBottom:30,
            }}
            >CBM CALCULATOR</Text>
            <View
            style={{
                display: "flex",
                flexDirection:"row",
                justifyContent:"space-around",
                marginTop:30,
            }}
            >
                <Text
                style={{
                    ...InvoiceFonts.Bold,
                    color: colorsInInvoice.blue,
                    opacity: 0.5,
                    fontSize:14,
                }}
                >
                    LENTH
                </Text>
                <Text
                style={{
                    ...InvoiceFonts.Bold,
                    color: colorsInInvoice.blue,
                    opacity: 0.5,
                    fontSize:14,
                }}
                >
                    BREADTH
                </Text>
                <Text
                style={{
                    ...InvoiceFonts.Bold,
                    color: colorsInInvoice.blue,
                    opacity: 0.5,
                    fontSize:14,
                }}
                >
                    HEIGHT
                </Text>
                <Text
                style={{
                    ...InvoiceFonts.Bold,
                    color: colorsInInvoice.blue,
                    opacity: 0.5,
                    fontSize:14,
                }}
                >
                    CBM
                </Text>

            </View>
     

          
                {inputField.map((d,i) => {
                    console.log(d.length)
                    return (
                        <View
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection:"row",
                            justifyContent:"space-around",
                            marginTop:30,
                        }}
                        >
                        <InputContainer 
                        placeholder="0000"
                        height={35}
                        width={70}
                        fontSize={12}
                        value={d.length || ""}
                        onchange={e =>  handleChange(i,e,"length")}
                        color={colorsInInvoice.gray}
                        />
                            <InputContainer 
                        placeholder="0000"
                        height={35}
                        width={70}
                        fontSize={12}
                        value={d.breadth || ""}
                        onchange={e => handleChange(i,e,"breadth")}
                        color={colorsInInvoice.gray}
                        />
                            <InputContainer 
                        placeholder="0000"
                        height={35}
                        width={70}
                        fontSize={12}
                        value={d.height}
                        onchange={e => handleChange(i,e,"height")}
                        color={colorsInInvoice.gray}
                        />
                            <InputContainer 
                        placeholder="0000"
                        height={35}
                        width={70}
                        fontSize={12}
                        value={d.cbm}
                        onchange={e => handleChange(i,e,"cbm")}
                        color={colorsInInvoice.blue}
                        />
                           </View>
                    )
                })}
         

                <TouchableOpacity
                onPress={() => addNewField()}
                >
                    <Text>
                        Add more rows
                    </Text>

                </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default CBMCal
