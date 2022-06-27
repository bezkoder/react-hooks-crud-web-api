import http from '../http-common'

const getAll = () => {
  return http.get('/characters')
}

const get = id => {
  return http.get(`/characters/${id}`)
}

const create = data => {
  return http.post('/characters', data)
}

const update = (id, data) => {
  return http.put(`/characters/${id}`, data)
}

const remove = id => {
  return http.delete(`/characters/${id}`)
}

const removeAll = () => {
  return http.delete(`/characters`)
}

const findByTitle = title => {
  return http.get(`/characters?title=${title}`)
}

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
}

export default TutorialService
