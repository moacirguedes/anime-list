import HttpService from './HttpService';

export const getSeason = async (year, season) => {
  try {
    const {
      data
    } = await HttpService.get(`season/${year}/${season}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};