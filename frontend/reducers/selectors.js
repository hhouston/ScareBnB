export const asArray = (array) => Object.keys(array).map(key => array[key]);


export const reviewedPlace = (object, currentUser) => {
    let reviewed = false;

    if (!currentUser) {
      return reviewed;
    }

    Object.keys(object).forEach(key => {


        if (object[key].author_id === currentUser.id) {
            reviewed = true;
        }

    });
    return reviewed;
};
