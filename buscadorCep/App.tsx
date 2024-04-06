import React, {useState} from "react"
import {StyleSheet, View , Image, TextInput, TouchableOpacity, Text, Alert} from "react-native"
import api from "./src/services/api"

export default function App(){
  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [DDD, setDDD] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [complemento, setComplemento] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")

  async function buscarCep(){
    if(cep == ""){
      Alert.alert("Digite um CEP")
      setCep("")
      return
    }
    if(cep.length < 8 || cep.length > 8){
      Alert.alert("CEP inválido!\nA sequência deve conter 8 dígitos.")
      setCep("")
      return
    }
    if(isNaN(Number(cep))){
      Alert.alert("CEP inválido!\nDigite apenas números.")
      setCep("")
      return
    }

    try{
      const response = await api.get(`/${cep}/json`)
      setEstado(response.data.uf)
      setDDD(response.data.ddd)
      setLogradouro(response.data.logradouro)
      setComplemento(response.data.complemento)
      setBairro(response.data.bairro)
      setCidade(response.data.localidade)
    }catch(error){
      console.log("Erro:" + error)
    }
  }
  
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

        <TouchableOpacity style={styles.botaoBuscar} onPress={buscarCep}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blocoEstadoDDD}> 
        <TextInput
          style={styles.inputEstado}
          value={estado}
          onChangeText={(texto) => setEstado(texto)}
          placeholder="Estado"/>

        <TextInput
          style={styles.inputDDD}
          value={estado}
          onChangeText={(texto) => setDDD(texto)}
          placeholder="DDD"/>
      </View>

      <View style={styles.blocoInputs}>
        <TextInput
            style={styles.inputLogradouro}
            value={logradouro}
            onChangeText={(texto) => setLogradouro(texto)}
            placeholder="Logradouro"/>

        <TextInput
            style={styles.inputComplemento}
            value={complemento}
            onChangeText={(texto) => setComplemento(texto)}
            placeholder="Complemento"/>

        <TextInput
            style={styles.inputBairro}
            value={bairro}
            onChangeText={(texto) => setBairro(texto)}
            placeholder="Bairro"/>

        <TextInput
            style={styles.inputCidade}
            value={cidade}
            onChangeText={(texto) => setCidade(texto)}
            placeholder="Cidade"/>
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
    marginTop: 40,
  },

  blocoCep:{
    alignItems: "center",
    marginTop: 40,
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
  },

  blocoEstadoDDD:{
    marginTop: 40,
    flexDirection: "row",
  },

  inputEstado:{
    height: 47,
    width: 120,
    borderRadius: 20,
    fontSize: 18,
    marginRight: 35,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  inputDDD:{
    height: 47,
    width: 120,
    borderRadius: 20,
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  blocoInputs:{
    alignItems: "center",
    marginTop: 40,
  },

  inputLogradouro:{
    height: 47,
    width: 286,
    borderRadius: 20,
    fontSize: 18,
    marginBottom: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff" 
  },

  inputComplemento:{
    height: 47,
    width: 286,
    borderRadius: 20,
    fontSize: 18,
    marginBottom: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff" 
  },

  inputBairro:{
    height: 47,
    width: 286,
    borderRadius: 20,
    fontSize: 18,
    marginBottom: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff" 
  },

  inputCidade:{
    height: 47,
    width: 286,
    borderRadius: 20,
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: "#fff" 
  },
})