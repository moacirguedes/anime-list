import HttpService from './HttpService';
import axios from 'axios';

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
    const response = await axios.get('localhost:3000/favorites');
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const createFavorite = async (favorite) => {
  try {
    const response = await axios.post('localhost:3000/favorites', favorite);
    return response;
  } catch (error) {
    console.error(error);
  }
}