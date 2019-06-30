import getResult from '../../actions/result';

test('It should setup getResult action object.', () => {
  const action = getResult({ 
    data: { 
      total_entries: 321,
      per_page: 25,
      current_page: 1,
      restaurant: [
        {
          id: 21307,
          name: "Scaramouche Restaurant",
          address: "1 Benvenuto Place",
          city: "Toronto",
          state: "ON",
          area: "Toronto / SW Ontario",
          postal_code: "M4V 2L1",
          country: "CA",
          phone: "4169618011",
          lat: 43.68207,
          lng: -79.40041,
          price: 4,
          reserve_url: "http://www.opentable.com/single.aspx?rid=21307",
          mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=21307",
          image_url: "https://www.opentable.com/img/restimages/21307.jpg"
        }
      ]
    }   
  });
  expect(action).toEqual({
  type: 'GET_RESTAURANT',
  data: { 
      total_entries: 321,
      per_page: 25,
      current_page: 1,
      restaurant: [
        {
          id: 21307,
          name: "Scaramouche Restaurant",
          address: "1 Benvenuto Place",
          city: "Toronto",
          state: "ON",
          area: "Toronto / SW Ontario",
          postal_code: "M4V 2L1",
          country: "CA",
          phone: "4169618011",
          lat: 43.68207,
          lng: -79.40041,
          price: 4,
          reserve_url: "http://www.opentable.com/single.aspx?rid=21307",
          mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=21307",
          image_url: "https://www.opentable.com/img/restimages/21307.jpg"
        }
      ]
    }   
  });
});
