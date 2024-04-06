import React, {useState} from "react"
import {StyleSheet, View , Image, TextInput, TouchableOpacity, Text} from "react-native"

export default function App(){
  const [cep, setCep] = useState("")

  return(
    <View style={styles.containerPrincipal}>
      <Image
        source={require("./assets/endereco.png")}
        style={styles.imagem} />

      <View style={styles.blocoCep}>
        <TextInput
          style={styles.inputCep}
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          placeholder="CEP"/>

        <TouchableOpacity style={styles.botaoBuscar}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#FFEDA0",
    alignItems: "center",
  },

  imagem:{
    width: 100, 
    height: 100, 
    marginTop: 20,
  },

  blocoCep:{
    alignItems: "center",
    marginTop: 20,
  },

  inputCep:{
    height: 47,
    width: 286,
    borderRadius: 20,
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: "#fff" 
  },

  botaoBuscar:{
    height: 57,
    width: 286,
    marginTop: 15,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#3EECAC"
  },

  textoBotaoBuscar:{
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  }

})