import HttpService from './HttpService';
import AxiosService from './AxiosService';

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
    return (data);
  } catch (error) {
    console.error(error);
  }
}

export const getAnimePictures = async (id) => {
  try {
    const {
      data
    } = await HttpService.get(`anime/${id}/pictures`);
    return (data);
  } catch (error) {
    console.error(error);
  }
}

export const getFavorites = async () => {
  try {
    const {
      data
    } = await AxiosService.get('favorites');
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const createFavorite = async (favorite) => {
  try {
    const response = await AxiosService.post('favorites', favorite);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const deleteFavorite = async (id) => {
  try {
    const response = await AxiosService.delete(`favorites/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}