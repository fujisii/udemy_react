import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1234567890123456789'; // dummy

// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then(result =>
      result.data.hotels.map((hotel) => {
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
        };
      }),
    );

  // const result = {
  //   data: {
  //     hotels: [
  //       {
  //         hotel: {
  //           hotel: [
  //             {
  //               hotelBasicInfo: {
  //                 hotelNo: 28506,
  //                 hotelName: '東京プリンスホテル',
  //                 hotelInformationUrl: 'https://travel.rakuten.co.jp/HOTEL/28506/28506.html',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   },
  // };

  // return result.data.hotels.map((hotel) => {
  //   const basicInfo = hotel.hotel[0].hotelBasicInfo;
  //   return {
  //     id: basicInfo.hotelNo,
  //     name: basicInfo.hotelName,
  //     url: basicInfo.hotelInformationUrl,
  //   };
  // });
};
