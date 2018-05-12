import React, { Component } from 'react';

import GLOBAL from '../Globals'
import commonStyle from '../styles/common_style';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';

import {
    CachedImage,
    ImageCacheProvider
} from 'react-native-cached-image';

import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

import IconFA from 'react-native-vector-icons/FontAwesome';

export default class Vocabulary extends Component {
    constructor(props) {
        super(props)
        //define variable global 
        //this.test = 'this is test';

        this.state = {
            page: 1,
            isFetching: false,
            vocabulary: null,
            dataSource: Array()
        }
    }

    static navigationOptions = {
        header: null,
        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon/ic-education.png')}
                style={[commonStyle.tabbar_icon, { tintColor: tintColor }]}
            />
        ),
    };

    componentDidMount() {
        this.fetchData(this.state.page);
    }

    fetchData(page) {
        return fetch('http://192.168.11.10/my-profile/public/api/vocabulary/list?api_token=XNywQbf23rTee8e9YOL8lpJWAKaNuOjwnFWYptisA2qV3UfPUqmT4rZFaICm&page=' + page)
            .then((response) => response.json())
            .then((responseJson) => {

                let data = responseJson.data;
                let vocabularies = Array();
                data.forEach(function (item) {
                    vocabularies.push({
                        isHeader: true,
                        day: item.day,
                        count: item.count
                    });
                    item.data.forEach(function (itemVocabulary) {
                        vocabularies.push({
                            isHeader: false,
                            count: 0,
                            id: itemVocabulary.id,
                            user_id: itemVocabulary.user_id,
                            type: itemVocabulary.type,
                            en: itemVocabulary.en,
                            en_pronunciation: itemVocabulary.en_pronunciation,
                            jp: itemVocabulary.jp,
                            jp_pronunciation: itemVocabulary.jp_pronunciation,
                            vi: itemVocabulary.vi,
                            descriptions: itemVocabulary.descriptions,
                            ex1: itemVocabulary.ex1,
                            ex2: itemVocabulary.ex2,
                            ex3: itemVocabulary.ex3,
                            ex4: itemVocabulary.ex4,
                            ex5: itemVocabulary.ex5,
                            created_at: itemVocabulary.created_at,
                            updated_at: itemVocabulary.updated_at
                        });
                    }, this);
                }, this);

                this.setState({
                    isFetching: false,
                    dataSource: vocabularies,
                }, function () {
                    // do something with new state

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onRefresh(page) {
        this.setState({ isFetching: true }, function () { this.fetchData(page) });
    }

    onEndReached() {
        // if(this.state.dataSource.length > 0){
        //     this.setState({
        //         page: this.state.page + 1
        //     }, function(){
        //         this.onRefresh(this.state.page);
        //     });
        // }
    }

    goDetail(vocabulary) {
        if (!vocabulary.isHeader) {
            this.setState({
                vocabulary: vocabulary
            }, function () {
                this.popupDialog.show();
            });
        }
    }

    goExercise() {
        this.props.navigation.navigate('Exercise');
    }

    hideDialog() {
        this.popupDialog.dismiss();
    }

    render() {
        if (this.state.isFetching) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, paddingTop: Platform.OS == "ios" ? 20 : 0 }}>
                <FlatList
                    onRefresh={() => this.onRefresh(1)}
                    refreshing={this.state.isFetching}
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.goDetail(item)}>
                            {
                                item.isHeader ?
                                    <View style={styles.view_item_header}>
                                        <IconFA style={styles.icon_item_header} name="calendar" size={20} color={GLOBAL.COLOR.PRIMARY} />
                                        <Text style={styles.title_item_header}>{item.day}</Text>
                                        <Text style={styles.icon_count_item_header}>{item.count}</Text>
                                    </View> :
                                    <View style={styles.view_item}>
                                        <IconFA style={styles.icon_item} name="circle" size={20} color={GLOBAL.COLOR.PRIMARY} />
                                        <View style={styles.view_item_content}>
                                            <Text style={styles.title_item}>{item.en}</Text>
                                            <Text style={styles.sub_title_item}>{item.en_pronunciation + ' : ' + item.vi}</Text>
                                        </View>
                                    </View>
                            }
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index}
                    onEndReached={() => this.onEndReached()}
                    onEndReachedThreshold={0.5}
                />
                <View style={styles.view_menu}>
                    <TouchableOpacity onPress={() => this.goExercise()}>
                        <IconFA style={styles.flat_icon_menu} name="play-circle" size={30} color={GLOBAL.COLOR.PRIMARY} />
                    </TouchableOpacity>
                </View>

                <PopupDialog width={0.9} height={0.6}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogAnimation={slideAnimation}>
                    <View>
                        <IconFA style={styles.dialog_icon_close} name="close" size={20} color={GLOBAL.COLOR.GRAY} justifyContent='center' alignItems='center'
                            onPress={() => this.hideDialog()} />
                        {
                            this.state.vocabulary != null ?
                                <ScrollView style={styles.view_dialog}>
                                    <Text style={styles.dialog_title}>{this.state.vocabulary.en}</Text>
                                    <Text style={styles.dialog_sub_title}>{this.state.vocabulary.en_pronunciation}</Text>
                                    <Text style={styles.dialog_sub_title}>{this.state.vocabulary.vi}</Text>
                                    <Text style={styles.dialog_sub_title}>{this.state.vocabulary.ex1 != null ? 'ex1: ' + this.state.vocabulary.ex1 : ''}</Text>
                                    <Text style={styles.dialog_sub_title}>{this.state.vocabulary.ex2 != null ? 'ex2: ' + this.state.vocabulary.ex2 : ''}</Text>
                                    <Text style={styles.dialog_sub_title}>{this.state.vocabulary.ex3 != null ? 'ex3: ' + this.state.vocabulary.ex3 : ''}</Text>
                                    <Text style={styles.dialog_sub_title}>{this.state.vocabulary.descriptions}</Text>
                                </ScrollView>
                                :
                                <View></View>
                        }
                    </View>
                </PopupDialog>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_item_header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 3,
        width: null,
        height: 35,
    },
    icon_item_header: {
        width: 35,
        height: null,
        marginLeft: 5,
    },
    title_item_header: {
        width: null,
        height: null,
        marginLeft: 0,
        fontSize: 18,
        fontWeight: '300',
        color: GLOBAL.COLOR.PRIMARY,
        alignSelf: 'center',
        alignItems: 'center',
    },
    icon_count_item_header: {
        width: 22,
        height: 22,
        marginLeft: 15,
        borderRadius: 10,
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        backgroundColor: GLOBAL.COLOR.PRIMARY
    },
    view_item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 3,
        width: null,
        height: 80,
    },
    view_item_content: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        padding: 3,
        width: null,
        height: null,
    },
    title_item: {
        flex: 1,
        width: null,
        height: null,
        marginLeft: 0,
        fontSize: 16,
        fontWeight: '400',
        color: GLOBAL.COLOR.TEXT,
    },
    sub_title_item: {
        flex: 1,
        width: null,
        height: null,
        marginLeft: 0,
        fontSize: 14,
        fontWeight: '200',
        color: GLOBAL.COLOR.TEXT_HOLDER,
    },
    icon_item: {
        width: 35,
        height: null,
        marginLeft: 15,
    },
    //For dialog
    view_dialog: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    dialog_icon_close: {
        width: null,
        height: null,
        marginTop: 3,
        marginRight: 3,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    dialog_title: {
        marginLeft: 5,
        fontSize: 24,
        fontWeight: '500',
        color: GLOBAL.COLOR.PRIMARY,
    },
    dialog_sub_title: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '100',
        color: GLOBAL.COLOR.TEXT,
    },
    view_menu: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 10,
        bottom: 0,
    }, flat_icon_menu: {
        alignItems: 'center',
        alignSelf: 'flex-end',
    }
});