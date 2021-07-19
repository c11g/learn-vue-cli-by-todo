import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '@/constant.js';

Vue.use(Vuex);

const coutries = [
  { no:1,  name : '미국', capital : '워싱턴DC', region:'america' },
  { no:2,  name : '프랑스', capital : '파리', region:'europe' },
  { no:3,  name : '영국', capital : '런던', region:'europe' },
  { no:4,  name : '중국', capital : '베이징', region:'asia' },
  { no:5,  name : '태국', capital : '방콕', region:'asia' },
  { no:6,  name : '모로코', capital : '라바트', region:'africa' },
  { no:7,  name : '라오스', capital : '비엔티안', region:'asia' },
  { no:8,  name : '베트남', capital : '하노이', region:'asia' },
  { no:9,  name : '피지', capital : '수바', region:'oceania' },
  { no:10,  name : '솔로몬 제도', capital : '호니아라', region:'oceania' },
  { no:11,  name : '자메이카', capital : '킹스턴', region:'america' },
  { no:12,  name : '나미비아', capital : '빈트후크', region:'africa' },
  { no:13,  name : '동티모르', capital : '딜리', region:'asia' },
  { no:14,  name : '멕시코', capital : '멕시코시티', region:'america' },
  { no:15,  name : '베네수엘라', capital : '카라카스', region:'america' },
  { no:16,  name : '서사모아', capital : '아피아', region:'oceania' },
];

const store = new Vuex.Store({
  state: {
    todolist: [],
    currentRegion: null,
    coutries: coutries,
  },
  getters: {
    regions: (state) => state.coutries
      .reduce((set, country) => set.add(country.region), new Set()),
    countriesByRegion: (state) => state.coutries.filter(country => !state.currentRegion || country.region === state.currentRegion),
    currentRegion: (state) => state.currentRegion,
  },
  mutations: {
    [Constant.ADD_TODO]: (state, payload) => {
      if(payload.todo !== ''){
        state.todolist.push(payload);
      }
    },
    [Constant.DONE_TOGGLE]: (state, todoId) => {
      const index = state.todolist.findIndex(todo => todo.id === todoId);
      state.todolist[index].done = !state.todolist[index].done;
    },
    [Constant.DELETE_TODO]: (state, todoId) => {
      state.todolist = state.todolist.filter(todo => todo.id !== todoId);
    },
    [Constant.CHANGE_REGION]: (state, region) => {
      state.currentRegion = region;
    }
  },
  actions: {
    [Constant.ADD_TODO]: ({commit}, payload) => {
      console.log(Constant.ADD_TODO, 'fired')
      commit(Constant.ADD_TODO, payload);
    },
    [Constant.DONE_TOGGLE]: ({commit}, payload) => {
      console.log(Constant.DONE_TOGGLE, 'fired')
      commit(Constant.DONE_TOGGLE, payload);
    },
    [Constant.DELETE_TODO]: ({commit}, payload) => {
      console.log(Constant.DELETE_TODO, 'fired')
      commit(Constant.DELETE_TODO, payload);
    },
    [Constant.CHANGE_REGION]: ({commit}, payload) => {
      console.log(Constant.CHANGE_REGION, 'fired')
      commit(Constant.CHANGE_REGION, payload);
    }
  }
});

export default store;