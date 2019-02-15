import axios from 'axios'
import ApiKey from '../ApiKey';

const apiKey = ApiKey.key
const endPoint = 'https://www.googleapis.com/youtube/v3'

export default class Videos {

  /**
   * Obtiene listado de videos filtrado por input usuario
   *
   * @static
   * @param {string} input 
   * @returns {Array}
   * @memberof Videos
   */
  static async getVideos(input = '') {
    const query = encodeURIComponent(input)
    const url = `${endPoint}/search?q=${query}&key=${apiKey}&maxResults=11&part=snippet`
    return axios.get(url).then(resp => {
      return resp.data.items
        .filter(v => v.id.kind === 'youtube#video')
        .map(v => ({
          id: v.id.videoId,
          title: v.snippet.title,
          publishedAt: v.snippet.publishedAt,
          channelId: v.snippet.channelId,
          channelTitle: v.snippet.channelTitle,
          description: v.snippet.description,
          image: v.snippet.thumbnails.medium
        }))
    }).catch((error) => {
      console.error(error)
      return []
    })
  }

  /**
   * Obtiene detalle de video por id
   *
   * @static
   * @param {string} id 
   * @returns {Object}
   * @memberof Videos
   */
  static async getVideoDetail(id) {
    const query = encodeURIComponent(id)
    const url = `${endPoint}/videos?id=${query}&key=${apiKey}&part=statistics`
    return axios.get(url).then(resp => {
      return resp.data.items[0].statistics
    }).catch(err => {
      console.error(err)
      return {}
    })
  }

  /**
   * Obtiene detalle de canal por id
   *
   * @static
   * @param {string} id 
   * @returns {Object}
   * @memberof Videos
   */
  static async getChannelDetail(id) {
    const query = encodeURIComponent(id)
    const url = `${endPoint}/channels?id=${query}&key=${apiKey}&part=snippet`
    return axios.get(url).then(resp => {
      return resp.data.items[0].snippet
    }).catch(err => {
      console.error(err)
      return {}
    })
  }

  /**
   * Obtiene listado de comentarios por id de video
   *
   * @static
   * @param {string} id 
   * @returns {Object}
   * @memberof Videos
   * @author JBernal
   */
  static async getComments(id) {
    const query = encodeURIComponent(id)
    const url = `${endPoint}/commentThreads?videoId=${query}&key=${apiKey}&part=snippet,replies`
    return axios.get(url).then(resp => {
      return resp.data.items.map(item => {
        return {
          authorDisplayName: item.snippet.topLevelComment.snippet.authorDisplayName,
          authorProfileImageUrl: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
          publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
          textDisplay: item.snippet.topLevelComment.snippet.textDisplay,
          textOriginal: item.snippet.topLevelComment.snippet.textOriginal,
          likeCount: item.snippet.topLevelComment.snippet.likeCount,
        }
      })
    }).catch(err => {
      console.error(err)
      return []
    })
  }
}


