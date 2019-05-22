// import Localize from 'v-localize';
// import Vue from 'vue'

// Vue.use(Localize);

// export const localize = Localize.config({
//   default: 'en-US',
//   available: ['en-US', 'ru-RU', {
//     locale: 'ru-RU',
//     orientation: 'rtl',
//   }],
//   fallback: '?',
//   localizations: {
//     "en-US": {
//       nav: {
//         createUser: 'Create user',
//         listUsers: 'List users'
//       }
//     },
//     "ru-RU": {
//       nav: {
//         createUser: 'Создать пользователя',
//         listUsers: 'Список пользователей'
//       }
//     },
//   }
// });


import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const messages = {
  'en': {
    nav: {
      createUser: 'Create user',
      listUsers: 'List users',
    },
  },
  'ru': {
    nav: {
      createUser: 'Создать пользователя',
      listUsers: 'Список пользователей',
    }
  }
};

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});
