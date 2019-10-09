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

export const getAnime = async (id) => {
  try {
    const {
      data
    } = await HttpService.get(`anime/${id}`);
    return(data);
  } catch (error) {
    console.error(error);
  }
}

export const getAnimePictures = async (id) => {
  try {
    const {
      data
    } = await HttpService.get(`anime/${id}/pictures`);
    return(data);
  } catch (error) {
    console.error(error);
  }
}
