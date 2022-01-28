export default class Card_model {
    url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-xYT0a71YniVnkMpBI3U-7JgQakOtwPbBH3MlL_BE6DXkjNtj4bt3kwkzIGCMMKtrQCbYqLyHOdPK/pub?output=tsv';

    static sortedStatus = {
        price: false,
    };

    static currentDataState = null

    getData() {
        return fetch(this.url)
            .then(data => data.text())
            .then(this.parseData.bind(this))

    }

    parseData = tsv => {
        const arrOfdata = tsv.split('\r\n').map(line => line.split('\t'))
        const keys = arrOfdata.shift();
        const data = arrOfdata.map(arr => arr.reduce((obj, prop, i) => {
            obj[keys[i]] = prop;
            return obj;
        }, {}));
        this.data = data;
        return data
    }

    // sortin data

    sortDataByPrice(data, sortType) {
        return data.sort((a, b) => a[sortType] - b[sortType])
    }

    getSortData(sortType) {

        let dataToSort = [...this.data];
        if (this.filteredData) {
            dataToSort = this.filteredData
        }
        this.sortDataByPrice(dataToSort, sortType)

        if (Card_model.sortedStatus[sortType] == true) {
            Card_model.sortedStatus[sortType] = false
            return dataToSort.reverse();
        }

        Card_model.sortedStatus[sortType] = true;
        return dataToSort;
    }

    getFilteredData({ filterCategory, filterType, filteredStatus }) {

        const filteredData = this.data.filter(item => item[filterCategory] == filterType)
        this.filteredData = filteredData;
        return filteredStatus == 1 ? this.filteredData : this.data;
    }

    getPopupCard(id) {
        const item = this.data.filter(item => item['id'] == id)
        return item
    }

    getProductToShopingCart(id) {
        return this.data.filter(item => item['id'] == id)[0]
    }

    getSearchData(searchString) {
        const reg = new RegExp(searchString, 'i')
        console.log(reg)
        return this.data.filter(item => item.name.match(reg))
    }
}