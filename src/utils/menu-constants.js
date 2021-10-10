export const MENU =
  [
    {
      title: "Головна",
      route: 'Home',
      link: null,
      submenu: [
        {
          title: "Студенти",
          route: 'Students',
          icon: 'people',
        },
        {
          title: "Імпорт",
          route: 'Import',
          icon: 'file-earmark-arrow-up',
        },
        {
          title: "Рейтинг",
          route: 'Rating',
          icon: 'graph-up',
        },
        {
          title: "Коефіцієнт",
          route: 'Multiplier',
          icon: 'bookshelf',
        },
        {
          title: "Змінити пароль",
          route: 'ResetPassword',
          icon: 'arrow-clockwise',
        },
      ]
    },
    {
      title: "Імпорт",
      route: 'Import',
    },
    {
      title: "Рейтинг",
      route: 'Rating',
    },
    {
      title: "Налаштування",
      route: 'Setting',
      submenu: [
        {
          title: "Коефіцієнт",
          route: 'Multiplier',
          icon: 'bookshelf',
        },
        {
          title: "Змінити пароль",
          route: 'ResetPassword',
          icon: 'arrow-clockwise',
        },
      ]
    },
  ]
