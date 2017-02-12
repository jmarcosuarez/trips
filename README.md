# base-init
Base repository for all my projects

```
npm install
```

```
npm start
```

The app is running at http://localhost:8080/




filter: {

  checkIn: { id: 'checkIn' value: undefined }
  checkOut: { id: 'checkOut' value: undefined }
  guest: { id: 'guest' value: 1 }
  bedroom: { id: 'bedroom' value: 1 } 
  priceBottom: { id:'priceBottom' value: 0 }
  priceTop: { id:'priceTop' value: 500 }
  occasion_0: { id:'occasion_0' value: "Perfect for..."}
  occasion_1: { id:'occasion_1' value: "Holiday with friends"}
  occasion_2: { id:'occasion_2' value: "Bussiness trip"}

  isInstantBook: { id:'isInstantBook' name: "instantbook", value: false }
  neighbourhoods_0: { id:'neighbourhoods_0' name: "Balham", value: false }
  neighbourhoods_1: { id:'neighbourhoods_1' name: "Battersea", value: false }
  neighbourhoods_2: { id:'neighbourhoods_2' name: "Bayswater", value: false }
  amenities_0: { id:'amenities_0' name: "Air conditioning", value: false }
  propertyTypes_0: { id:'propertyTypes_0' name: "Apartament", value: false }

}

isFilterActive: {
  dateInput: true,
  bedroom: true,
  priceBottom: true,
  occassion_1,
  ...
}


{
  "productsById": {
    "88cd7621-d3e1-42b7-b2b8-8ca82cdac2f0": {
      "title": "Blue Shirt",
      "price": 9.99,
    },
    "aec17a8e-4793-4687-9be4-02a6cf305590": {
      "title": "Red Hat",
      "price": 7.99,
    }
  }
  "outOfStockProductMap": {
      "aec17a8e-4793-4687-9be4-02a6cf305590": true
  }
}

const setFilterActive = (dates) => (dispatch, getState) => {
  console.log();
  // const CheckInKey = getState().filter.get('filters').findIndex(listing => {
  //   return listing.get('id') === 'CheckIn';
  // });
  // const CheckOutKey = getState().filter.get('filters').findIndex(listing => {
  //   return listing.get('id') === 'CheckOut';
  // });

  // let value = dates[1] !== undefined
  //     ? value = moment(dates[1]).format('MM/DD/YYYY')
  //     : value = moment(dates[0]).format('MM/DD/YYYY');

  // let key = dates[1] !== undefined
  //     ? key = CheckOutKey
  //     : key = CheckInKey;

  // forwards to filters action creator
  // dispatch(setFilterObject(key, value));
};