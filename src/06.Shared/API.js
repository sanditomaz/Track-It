import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function ListarHabitos(config) {
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function BuscarHabitos(config) {
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function HistoricoDeHabitos() {
  const promise = axios.post(`${BASE_URL}/habits/history/daily`);
  return promise;
}

function FazerCadastro(body) {
  return axios.post(`${BASE_URL}/auth/sign-up`, body);
}

function FazerLogin(body) {
  return axios.post(`${BASE_URL}/auth/login`, body);
}

function CriarHabito(body, config) {
  return axios.post(`${BASE_URL}/habits`, body, config);
}

function DeletarHabito(config, habitId) {
  const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config);
  return promise;
}

function MarcarHabitoComoFeito(habitId, body, config) {
  return axios.post(`${BASE_URL}/habits/${habitId}/check`, body, config);
}

function DesmarcarHabitoComoFeito(habitId, body, config) {
  return axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, body, config);
}

export {
  ListarHabitos,
  BuscarHabitos,
  HistoricoDeHabitos,
  FazerCadastro,
  FazerLogin,
  CriarHabito,
  DeletarHabito,
  MarcarHabitoComoFeito,
  DesmarcarHabitoComoFeito,
};
