const searchHandler = (array, term) => {
        if (term.length === 0) {
            return array;
        }

        return array.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1;
        });
    }

const filterHandler = (array, filter) => {
    switch (filter) {
        case 'popular':
            return array.filter((item) => {
                return item.like;
            });
        case 'mostViewers':
            return array.filter((item) => {
                return item.viewers > 800;
            });
        default:
            return array;
    }
}

export {searchHandler, filterHandler};