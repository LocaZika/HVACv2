import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

const host = import.meta.env.VITE_HOST; // process.env.tenbien
const generateUrl = (obj) => {
  let url = '?';
  const checkPrefix = (key, value) => {
    url.charAt(1) === '' ?
      url += `_${key}=${value}` :
      url += `&_${key}=${value}`;
  }
  if (isEmpty(obj) === true || obj === undefined){
    return '';
  }
  if (obj.sort ?? undefined){
    checkPrefix('sort', obj.sort);
  }
  if (obj.order ?? undefined){
    checkPrefix('order', obj.order);
  }
  if (obj.page ?? undefined){
    checkPrefix('page', obj.page);
  }
  if (obj.limit ?? undefined){
    checkPrefix('limit', obj.limit);
  }
  if (obj.search ?? undefined){
    url.charAt(1) === '' ?
      url += `q=${obj.search}` :
      url += `&q=${obj.search}`;
  }
  if (obj.filter ?? undefined){
    for (let item in obj.filter){
      checkPrefix('filter', obj.filter[item]);
    }
  }
  return url;
};
export default function useFetch(path) {
  /**
   * 
   * @param {string} method Set method to call api. Require* UPPERCASE.
   * @param {{
   * id?: string | number,
   * data: string | object,
   * extraUrl?: string
   * }} requestObject Set object data to call api.
   * @returns Promise
   */
  const send = async(method, requestObject) => {
    let responsive = {};
    const defData = requestObject.data ?? null;
    const defExUrl = requestObject.extraUrl ?? '';
    const defUrl = host + path + defExUrl;
    let initFetch = {
      method,
      'content-type': 'application/json',
    };
    if (defData != null){
      return initFetch.body = JSON.stringify(defData);
    }
    const RES = await fetch(defUrl, initFetch);
    const DATA = await RES.json();
    responsive = {data: DATA, res: RES};
    return responsive;
  };
  const get = (extraOpt) => {
    const defExOpt = extraOpt ?? {};
    const extraUrl = generateUrl(defExOpt);
    return send('GET', {extraUrl});
  };
  const post = (data) => {
    return send('POST', {data});
  };
  const update = (id, data) => {
    return send('PATCH', {id, data});
  };
  const remove = (id) => {
    return send('DELETE', {id});
  };
  return {get, post, update, remove};
}

useFetch.propTypes = {
  path: PropTypes.string.isRequired,
}