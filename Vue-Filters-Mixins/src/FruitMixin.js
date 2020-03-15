export const fruitMixin = {

    data() {
        return {
            fruits: ['Apple', 'Mango', 'Guava', 'Grapes', 'Banana'],
            filterText: ''
        }
    },
    filters: {
        toUpperCase(value){
            return value.toUpperCase();
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(element => {
                return element.toLowerCase().match(this.filterText.toLowerCase());
            })
        }
    },
}


    