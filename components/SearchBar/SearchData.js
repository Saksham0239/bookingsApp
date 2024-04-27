import uuid from 'react-native-uuid';


export const generateSearchData = () => {
    const SearchData = [
        {
            title: 'Bluetooth boat headphones',
        },
        {
            title: 'keychain global',
        },
        {
            title: 'iphone 15',
        },
        {
            title:'keyboard Hp'
        },
        {
            title:'nike shoes'
        },
        {
            title:'adidas shoes'
        },
        {
            title:"handle bags"
        },
        {
            title:'cricket bats'
        },
        {
            title:'bike cover'
        }
    ];


    SearchData.forEach((data) => {
        data.id = uuid.v4();
    });

    return SearchData;
}

