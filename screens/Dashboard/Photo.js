import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, StyleSheet, SafeAreaView, Platform, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { RFValue } from "react-native-responsive-fontsize";
import DrPicker from '../../components/DrPicker';
import firebase from "firebase";

export default class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookname: '',
            author: '',
            publication: '',
            sellingpoint: '',
            description: '',
            points: 1000,
            bookimage: {}
        }
    }

    componentDidMount() {
        this.fetchUser();
    }

    async addPost() {
        if (
            this.state.bookname &&
            this.state.author &&
            this.state.publication &&
            this.state.sellingpoint
        ) {
            let postData = {
                bookname: this.state.bookname,
                author: this.state.author,
                publication: this.state.publication,
                sellingpoint: this.state.sellingpoint,
                description: this.state.description,
                userId: firebase.auth().currentUser.uid,
                bookimage: this.state.bookimage
            };
            await firebase
                .database()
                .ref(
                    "/posts/" +
                    Math.random()
                        .toString(36)
                        .slice(2)
                )
                .set(postData)
                .then(function (snapshot) { });

                await firebase
                .database()
               .ref('users/user/' + postData.userId + '/')  
               .update({points:firebase.database.ServerValue.increment(100),})
               .then(function (snapshot) { });            
        } else {
            Alert.alert(
                "Error",
                "All fields are required!",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
            );
        }
        this.setState({bookname: '', author: '', publication: '', sellingpoint: '', description: '', bookimage: ''})
        Alert.alert('Your post has been created')
        this.props.navigation.navigate('AddItem')
    }

    async fetchUser() {
        let name, image;
        await firebase
            .database()
            .ref("/users/user/" + firebase.auth().currentUser.uid)
            .on("value", function (snapshot) {
                name = `${snapshot.val().first_name} ${snapshot.val().last_name}`;
                image = snapshot.val().profile_picture;
            });
        this.setState({
            name: name,
            profile_image: image
        });
    }

    pickFromGallery = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                media: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            this.setState({bookimage: data.uri})
        }else{
            Alert.alert('You need to give us permission to open your gallery')
        }
    }

    pickFromCamera = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                media: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            this.setState({bookimage: data.uri})
        }else{
            Alert.alert('You need to give us permission to open the camera')
        }
        
    }
    
    
render(){
    return (
        <View>
        <ScrollView>
            <SafeAreaView style={styles.droidSafeArea} />
            
            <Text style={styles.text}>Pick a photo of the book which you want to sell</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginRight: 50, alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={() => this.pickFromGallery()}>
                <Text style={styles.buttonText}>Galary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.pickFromCamera()}>
                <Text  style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            
                <TextInput 
                    placeholder='Name of the Book*' 
                    placeholderTextColor='gray' 
                    style={styles.textinput} 
                    onChangeText={bookname => this.setState({bookname})} 
                />

                <TextInput 
                    placeholder='Author*' 
                    placeholderTextColor='gray' 
                    style={styles.textinput}
                    onChangeText={author => this.setState({author})} 
                />

                <TextInput 
                    placeholder='Publication*' 
                    placeholderTextColor='gray' 
                    style={styles.textinput} 
                    onChangeText={publication => this.setState({publication})} 
                />

                <DrPicker />

                <TextInput 
                    keyboardType='numeric'
                    placeholder='Selling Points*' 
                    placeholderTextColor='gray' 
                    style={styles.textinput} 
                    onChangeText={sellingpoint => this.setState({sellingpoint})} 
                />

                <TextInput 
                    placeholder='Description (Optional)' 
                    placeholderTextColor='gray' 
                    style={[styles.textinput, {height: 150}]} 
                    multiline
                    onChangeText={description => this.setState({description})} 
                />

            </View>
            </ScrollView>
            <TouchableOpacity onPress={() => this.addPost()} style={styles.postbtn}>
                <Text style={styles.postbtntext}>Post</Text>
            </TouchableOpacity>
        </View>
        )
}
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(40)
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#FFBA00',
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    textinput: {
        borderWidth: 3,
        borderRadius: 5,
        width: 300,
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 15
    },
    postbtn: {
        backgroundColor: '#FFBA00',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginTop: -40,
    },
    postbtntext: {
        fontWeight: 'bold',
        fontSize: 25,
    }
})