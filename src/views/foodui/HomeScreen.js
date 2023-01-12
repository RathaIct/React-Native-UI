
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AssetSvg } from '../../utils/AssetSvg';
import { AssetImage } from '../../utils/AssetImage';
import MyText from '../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoryItem from './components/CategoryItem';
import SectionComponent from './components/SectionComponent';
import ProductItem from './components/ProductItem';
function HomeScreen(props) {
    const categories = [
        {
            title: "Pizza",
            picture: AssetImage.pizza,
            is_selected: true,
        },
        {
            title: "Seafood",
            picture: AssetImage.shrimp,
            is_selected: false,
        },
        {
            title: "Soft Drinks",
            picture: AssetImage.soda,
            is_selected: false,
        },
    ];
    const products = [
        {
            title: "Primavera Pizza",
            image: "https://pngimg.com/uploads/pizza/pizza_PNG43985.png",
            price: "5.99",
            size: "Medium 14”",
            crust: "Thin Crust",
            delivery: "30 min",
            weight: "Weight 540 gr",
            options: [
                {
                    "image": "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg"
                },
                {
                    "image": "https://produits.bienmanger.com/34833-0w600h600_Organic_Yellow_Onion.jpg"
                }
            ],
        },
        {
            title: "Sea Pizza",
            image: "https://i.dlpng.com/static/png/6495974_preview.png",
            price: "5.99",
            size: "Medium 14”",
            crust: "Thin Crust",
            delivery: "30 min",
            weight: "Weight 540 gr",
            options: [
                {
                    "image": "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg"
                },
                {
                    "image": "https://produits.bienmanger.com/34833-0w600h600_Organic_Yellow_Onion.jpg"
                }
            ],
        },
        {
            title: "Vegetable Pizza",
            image: "https://pngimg.com/uploads/pizza/pizza_PNG43981.png",
            price: "5.99",
            size: "Medium 14”",
            crust: "Thin Crust",
            delivery: "30 min",
            weight: "Weight 540 gr",
            options: [
                {
                    "image": "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg"
                },
                {
                    "image": "https://produits.bienmanger.com/34833-0w600h600_Organic_Yellow_Onion.jpg"
                }
            ],
        },
        {
            title: "Hot Dog Pizza",
            image: "https://www.pngkit.com/png/full/340-3401739_hola-hawaiian-pizza-hawaiian-png.png",
            price: "5.99",
            size: "Medium 14”",
            crust: "Thin Crust",
            delivery: "30 min",
            weight: "Weight 540 gr",
            options: [
                {
                    "image": "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg"
                },
                {
                    "image": "https://produits.bienmanger.com/34833-0w600h600_Organic_Yellow_Onion.jpg"
                }
            ],
        },

    ]
    console.log(props);
    return (
        <View style={styles.scaffold}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <Image style={styles.profile} source={{ uri: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" }} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}></View>
                    <TouchableOpacity onPress={() => {
                        props.navigation.openDrawer();
                    }}>
                        <AssetSvg.menu style={styles.menu} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.body}>
                    <MyText style={styles.title}>Food</MyText>
                    <MyText style={styles.subTitle}>Delivery</MyText>
                    <View style={styles.searchContainer}>
                        <AssetSvg.search style={{ marginRight: 8 }} />
                        <TextInput style={styles.search} placeholder="Search..." />
                    </View>
                    <SectionComponent title="Categories">
                        <ScrollView style={{ padding: 8 }} horizontal={true}>
                            {categories.map((item, index) => <CategoryItem key={index} model={item} />)}
                        </ScrollView>
                    </SectionComponent>
                    <SectionComponent title="Popular">
                        {products.map((item, index) => <ProductItem model={item} key={index} props={props} />)}
                    </SectionComponent>
                    <View style={{ height: 50 }}></View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );


}
const styles = StyleSheet.create({
    scaffold: {
        height: "100%",
        backgroundColor: "#F9F9FB"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    profile: {
        width: 40,
        height: 40,
        margin: 16,
        borderRadius: 20,
    },
    menu: {
        margin: 16,
    },
    body: {
        padding: 16,
    },
    title: {
        fontSize: 16,
        color: "#313234",
    },
    subTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#313234",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    search: {
        flex: 1,
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#888888"
    }
});

export default HomeScreen;