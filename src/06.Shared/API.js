import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function ListarHabitos(config) {
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function BuscarHabitos() {
  const promise = axios.get(`${BASE_URL}/habits/today`);
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

function CriarHabito(habit, config) {
  return axios.post(`${BASE_URL}/habits`, habit, config);
}

function DeletarHabito() {
  const promise = axios.post(`${BASE_URL}/habits/ID_DO_HABITO`);
  return promise;
}

function MarcarHabitoComoFeito() {
  const promise = axios.post(`${BASE_URL}/habits/ID_DO_HABITO/check`);
  return promise;
}

function DesmarcarHabitoComoFeito() {
  const promise = axios.post(`${BASE_URL}/habits/ID_DO_HABITO/uncheck`);
  return promise;
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
