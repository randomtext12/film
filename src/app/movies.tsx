export interface Movie {
  name: string;
  img: string;
}

export const getRandomKeys = (
  numKeys: number,
  availableMovies: Record<number, Movie>
): number[] => {
  const keys = Object.keys(availableMovies).map(Number);
  const shuffled = keys.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numKeys);
};

export const MOVIES: Record<number, { name: string; img: string }> = {
  1: {
    name: "Большой Лебовски",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uKvGRKdO7ztWyycjoYiFE31JNM3.jpg",
  },
  2: {
    name: "Крёстный отец 2",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jDaC944dvUc1a4M1vp0oSW1XDak.jpg",
  },
  3: {
    name: "Храброе сердце",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/41bk8rHhQcDdNhRT5qfJmBARyRg.jpg",
  },
  4: {
    name: "Достучаться до небес",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/71qxP78IEyem9hEYSxZqSXHF7aQ.jpg",
  },
  5: {
    name: "Миллионер из трущоб",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oShPzAshoE2wFgzAr6n26Q4veSk.jpg",
  },
  6: {
    name: "Список Шиндлера",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4K8fGGcJP2EoGDucILnaJcOJhZl.jpg",
  },
  7: {
    name: "Хоббит(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/19fnHQ9g3Sy87rHKtw3wqhkBGOh.jpg",
  },
  8: {
    name: "Назад в будущее(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9a07nfvCoAAyUMfY0yQqsOjlb2C.jpg",
  },
  9: {
    name: "В центре внимания",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tKcRxAfMcvTA7xGqQCZGNYJETIq.jpg",
  },
  10: {
    name: "По соображениям совести",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/A4Q3CdaQzbPwDI1gnE7WX5585rJ.jpg",
  },
  11: {
    name: "Убийцы цветочной луны",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dc06PiS7uRAonQwrxKAnDvORZgC.jpg",
  },
  12: {
    name: "Однажды в... Голивуде",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/muqDW2S3rkZKAVLv4TE47IYg3O6.jpg",
  },
  13: {
    name: "Бойцовский клуб",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/66RvLrRJTm4J8l3uHXWF09AICol.jpg",
  },
  14: {
    name: "Гарри Поттер(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q3LZNzwW7ZWu4kSFIPGcB5CYFE4.jpg",
  },
  15: {
    name: "Охотники за привидениями(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q9gSeNEXzwTllZC6Wrjfb7Rcr2X.jpg",
  },
  16: {
    name: "История игрушек(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/phl71RCOMfNA5uu1GIYeVxKBYzJ.jpg",
  },
  17: {
    name: "Эквилибриум",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3L8uAS38M7sgehBoZ7ao2FooG2j.jpg",
  },
  18: {
    name: "Звездные войны(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9DkEtsmLSIvVpmnzRaldXqImyQw.jpg",
  },
  19: {
    name: "Голодные игры(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5QrQfsH4y7KHDYt9oaVGFtGb2Vm.jpg",
  },
  20: {
    name: "Пираты Карибского моря(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/70xRYK8orGWA7NfxvzhtkjpZAD6.jpg",
  },
  21: {
    name: "Вверх",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/47DEnHvvLCOPLPG7QpM8mXLCJG5.jpg",
  },
  22: {
    name: "Корпорация монстров(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zXIusESsQ7ZXP9MFwbvcTTZ3XWF.jpg",
  },
  23: {
    name: "Сумерки(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pWI6GBi4eMQttMtKSWbxIFO2HqC.jpg",
  },
  24: {
    name: "Матрица(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/28CIJk2teXWGsnUyVO6E77XpTOM.jpg",
  },
  25: {
    name: "Убить Билла",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dW3L2wsTSyLQBPYrHJPHhqXYseh.jpg",
  },
  26: {
    name: "Скотт Пилигрим против всех",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bLJEFAh6tILVS1PS5mCRlA9HVsR.jpg",
  },
  27: {
    name: "После прочтения сжечь",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iGMF7dPgnKimWxSvlL9PXGN0Ky7.jpg",
  },
  28: {
    name: "1+1",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zQsq95pYgjhJwYKqoFdeXlVse88.jpg",
  },
  29: {
    name: "Шерлок Холмс(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1MFCYbRCh5yPJagHIRJT4YCs7e6.jpg",
  },
  30: {
    name: "Крёстный отец",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gZUc6DbAirZGWJL1685jsOd90Sf.jpg",
  },
  31: {
    name: "Марсианин",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6U19srkH4wI6taluviXbVaIpsau.jpg",
  },
  32: {
    name: "Как приручить дракона(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cMUmeDM2QRlSOAK9onB8PhXtdZJ.jpg",
  },
  33: {
    name: "Тайна Коко",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jvYsGaUqN8ymH696kRfVJjJ3GIl.jpg",
  },
  34: {
    name: "Рататуй",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6u4JvZBiw1Uv6BgTlWNsFSSHlMn.jpg",
  },
  35: {
    name: "Люди в чёрном(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aWdS4UOb4aeoS9xZsxGHhXTA1jp.jpg",
  },
  36: {
    name: "Реквием по мечте",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/c1o9fv7X5zoKuBR6VnC3FGYRmgP.jpg",
  },
  37: {
    name: "Город грехов(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kxOAIDJd23t8HIZaOWyXMPu4rpi.jpg",
  },
  38: {
    name: "Пятый элемент",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bqALmWhVaqfQedyPZn7MeuOjfSk.jpg",
  },
  39: {
    name: "Леон",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qKvvqLOyfz6QDp7BH5OoQhYLfcb.jpg",
  },
  40: {
    name: "Хранители",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iGdjNnKCGsAYbd3n4Bp7D8sapsU.jpg",
  },
  41: {
    name: "Бегущий по лезвию",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iPPJmGDTqHcBFEtjcSgX0rI7QMe.jpg",
  },
  42: {
    name: "Залечь на дно в Брюгге",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iLDMVtj7G0Gu0U2cgUFo1AiWuGe.jpg",
  },
  43: {
    name: "Побег из Шоушенка",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg",
  },
  44: {
    name: "Интерстеллар",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vReLRjDV9XPhiOSEW7QWow4DXwf.jpg",
  },
  45: {
    name: "Адвокат дьявола",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/li94auZyP82I64AR0PxEMibDAO3.jpg",
  },
  46: {
    name: "Шестое чувство",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/prITVK0LHHrA1fUK2bP8HZyIcnW.jpg",
  },
  47: {
    name: "V значит Вендетта",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bLDAaOt50FY0j9vB8HTLjF9AHAO.jpg",
  },
  48: {
    name: "Операция Арго",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wRzK8TL7Je3zcqhUgerphuMj0Cl.jpg",
  },
  49: {
    name: "Три билборда на границе Эббинга, Миссури",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xnyRGjhSIbM2ZVaolkhmPVNncL2.jpg",
  },
  50: {
    name: "Мстители: Финал",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dzAtuccZlvtcussbdZxpF4dkrB5.jpg",
  },
  51: {
    name: "Социальная сеть",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7zUY5dnIzggvRZmrHdrYbGGpm5u.jpg",
  },
  52: {
    name: "Криминальное чтиво",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7FaHjGa4RvKJZHzY7c9UgTTH9KN.jpg",
  },
  53: {
    name: "Карты, деньги, два ствола",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/57vIJPRNsBZUAKu0jkt8QrA3tXI.jpg",
  },
  54: {
    name: "Мой сосед Тоторо",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ynClhtTAYG8N7FfU7EYK0T131rj.jpg",
  },
  55: {
    name: "День сурка",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gVv4Zy77h8xICJg7QhBocFaaymb.jpg",
  },
  56: {
    name: "Бесславные ублюдки",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cUWnHMRFC1fVQDALtUaGmrJ6MqP.jpg",
  },
  57: {
    name: "Джокер",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tEOoBmiA6VnbRo2maox5KHAHHyo.jpg",
  },
  58: {
    name: "Бэтмен",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3EXgl14Wmr5NcbYnBy1kavGHnvh.jpg",
  },
  59: {
    name: "Принцесса Мононоке",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dZE9oUyp14UEoPk5QV7emBu0Ix3.jpg",
  },
  60: {
    name: "Подозрительные лица",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gwnjyZrFh7IFxsrwYVknk2FTbmj.jpg",
  },
  61: {
    name: "Поймай меня, если сможешь",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gtnKEucm7DK2iNpvojIyjneV4Ig.jpg",
  },
  62: {
    name: "Невероятная жизнь Уолтера Митти",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nIKlc3okrp1d0N7R7OA0r11J5rR.jpg",
  },
  63: {
    name: "Молчание ягнят",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kP6CsSCugE5SiQrWCNmTQPqtAff.jpg",
  },
  64: {
    name: "Тёмный рыцарь",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dxWaYQtgpLbycqUpHzkqqYkT5I3.jpg",
  },
  65: {
    name: "Мир Юрского периода(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nSUyxiLlf9qHDiQH5LmCQQK62WX.jpg",
  },
  66: {
    name: "Унесённые призраками",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xV3zYcOA6xFjYwizIMDDkl2MGT7.jpg",
  },
  67: {
    name: "Одержимость",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nq3mYsTXx6086nFXxzDReQI0J1S.jpg",
  },
  68: {
    name: "Воин",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/g6CV1Ck0toQ3VNsN9Tqz7BTcnVF.jpg",
  },
  69: {
    name: "Джентльмены",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vWxVVECgYDPSg5o0Rhw5u7KFa7X.jpg",
  },
  70: {
    name: "Ходячий замок",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rAj2xNZOlSKWqaCpoNgCsAFXPXY.jpg",
  },
  71: {
    name: "Отступники",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/91iulTTBGivvyxUYeIU0Kbv9Amo.jpg",
  },
  72: {
    name: "Семь",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1e7WmKXLo6xqibkYBwwGWOcF43E.jpg",
  },
  73: {
    name: "Убийство в Восточном экспрессе(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7rGEmW9OSi9UZPkEB6IeotqQNCe.jpg",
  },
  74: {
    name: "Достать ножи(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mGfb75tcFWxuT8esS1isHrNFE90.jpg",
  },
  75: {
    name: "Всегда говори `ДА`",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oIkuOFFs6MIdPcIbLLefwFtq9yD.jpg",
  },
  76: {
    name: "Ирландец",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ZXfScDPpnTvPTHPT05ulDWqOfk.jpg",
  },
  77: {
    name: "Исходный код",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dE4IM48fgZBzr96y7gjwpbab4hJ.jpg",
  },
  78: {
    name: "Человек, который изменил всё",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sVTliDUi3ehhRKxHwGC4LxdXg85.jpg",
  },
  79: {
    name: "Я, робот",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mcGZ07eyn8UERDOPvfEWE690q4l.jpg",
  },
  80: {
    name: "Волк с Уолл-стрит",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qXPvpRGJlGmWyq15we5Ex3Thaah.jpg",
  },
  81: {
    name: "Славные парни",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/U8NIEbRRPiD32j0rTlvMrQsIXJ.jpg",
  },
  82: {
    name: "Дело Ричарда Джуэлла",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xGvizXUXeTE1NS3HQbfrgD0vyDQ.jpg",
  },
  83: {
    name: "Бэтмен: Начало",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fIfmG3EaIy3eqebyq7hXjl1ymQW.jpg",
  },
  84: {
    name: "Безумный Макс: Дорога ярости",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3tdXXuXIWU26LffOntbYFfX1SNN.jpg",
  },
  85: {
    name: "Великий Гэтсби",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pWJ7cIEF8hYSjFlpkdS64s8lHb2.jpg",
  },
  86: {
    name: "Драйв",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6nugn6lUEvfBkc6skpp8gQC25ax.jpg",
  },
  87: {
    name: "Властелин колец(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lxaDSQCLsMRRbp4UsfvsxzOq1OB.jpg",
  },
  88: {
    name: "Исчезнувшая",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dBFu1XPsa8NptOJnGiKUJKMVe3C.jpg",
  },
  89: {
    name: "Клаус",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iQ4WqwaeYzL9Hiljji98AkwR8Ix.jpg",
  },
  90: {
    name: "Красота по-американски",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lusI8lV9eThjA7otUGo3bRmFWk9.jpg",
  },
  91: {
    name: "ВАЛЛ·И",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i4qDsHTfrTD2EkPa7tT53cJYZkL.jpg",
  },
  92: {
    name: "Спасти рядового Райана",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9eif6yaxtVY7j5ujoWIsHlDcBgd.jpg",
  },
  93: {
    name: "Лобстер",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zmvHVGbAFqT3lZesZMEgwnK0WAv.jpg",
  },
  94: {
    name: "Гладиатор",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5fZ1JiGfVshoLHwgvdF3TY4bPem.jpg",
  },
  95: {
    name: "Дом, который построил Джек",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/teQzIKngihlL1Zg2BInPHyebEuX.jpg",
  },
  96: {
    name: "Ford против Ferrari",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/a3xUGMB8F9s98fGXOpBKlIg0ikm.jpg",
  },
  97: {
    name: "Темный рыцарь: Возрождение легенды",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9LfroB8zJD7HqP5hsxeDPHrzbw0.jpg",
  },
  98: {
    name: "Начало",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7SivRwOLuA6DR09zNJ9JIo14GyX.jpg",
  },
  99: {
    name: "Паразиты",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9xL2PwIOerz8jld06J9cxwuJfoD.jpg",
  },
  100: {
    name: "Большой куш",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8TIsqb5aeEMNzmv8IxfN4chuRvL.jpg",
  },
  101: {
    name: "Зелёная книга",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aEeTnDzcnGRD5IjSFwVXjusKpu0.jpg",
  },
  102: {
    name: "Старикам тут не место",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/z4zkwUKQMV3cp901LoBw9DrsvyE.jpg",
  },
  103: {
    name: "Одиннадцать друзей Оушена(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zEuI9yi0mOHjBzIubMMsxHxtKz1.jpg",
  },
  104: {
    name: "Платформа",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2tXnTUAVYea7FXWmhAKFgR6LIHk.jpg",
  },
  105: {
    name: "Выживший",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gvWniVnehAkIAfy40VlcFy3vOef.jpg",
  },
  106: {
    name: "Мстители: Война бесконечности",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n3PDUmM7Scg63LjfpmkOXtdOPoe.jpg",
  },
  107: {
    name: "Шоу Трумана",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6DXeXL6WTNptP9HrhfUvZyEhlqD.jpg",
  },
  108: {
    name: "Малышка на миллион",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1QR1o8kFAWRPxP2reQE0Bp53B1c.jpg",
  },
  109: {
    name: "Король Лев",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/j8tdiuhbF9p5mnAeA1YOUvz82xY.jpg",
  },
  110: {
    name: "Прочь",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hkchWNmGfcgow2Jivyxv83JqHCy.jpg",
  },
  111: {
    name: "Американская история X",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2dIE1KOc7Fa3FIMzph8mBJK17KM.jpg",
  },
  112: {
    name: "Вечное сияние чистого разума",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sigtn1tCMBOcHUB4kAMapb5tO4U.jpg",
  },
  113: {
    name: "Помни",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xILX5k6PvSeCQ0NFVjKQJKkiJr2.jpg",
  },
  114: {
    name: "Королевство полной луны",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/l2irG6cKVmEHKma4AYo8q3AInwP.jpg",
  },
  115: {
    name: "Умница Уилл Хантинг",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oUNOV8pKhvjLR4RzpkiwAH8i2Qh.jpg",
  },
  116: {
    name: "Лицо со шрамом",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9rGmgcmnnlrzB4K2SPIM8bgnNpw.jpg",
  },
  117: {
    name: "Цельнометаллическая оболочка",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nrsiYLtkkIbg4mOaEGh2juqwKkN.jpg",
  },
  118: {
    name: "Бешеные псы",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAFNjbxfxfcwT5wWj30thTbj9fE.jpg",
  },
  119: {
    name: "Джанго освобождённый",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eFqbX9ZobGPgZ8tuUUy2ZgstQJd.jpg",
  },
  120: {
    name: "Невидимый гость",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/51pl9F6V5Bqga8QoEfun8PmjCJl.jpg",
  },
  121: {
    name: "Престиж",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/26B5M0Yze0UJ5WIYzKYRvgM9D1c.jpg",
  },
  122: {
    name: "Бегущий по лезвию 2049",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kAq1RFHqtZrBvKve7GOGdgUU399.jpg",
  },
  123: {
    name: "Брюс Всемогущий",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f0QqG14SZYYZcV4VWykVc5w13dz.jpg",
  },
  124: {
    name: "Я - легенда",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/A5hUBLPcIaJycHGiOFXzlFVt8hT.jpg",
  },
  125: {
    name: "Олдбой",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lMW008z4oFLi5MwwrsI1Ey4Z70M.jpg",
  },
  126: {
    name: "Далласский клуб покупателей",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/laaJsjwItvj0DBJt5dc3guQmmPz.jpg",
  },
  127: {
    name: "Форрест Гамп",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nsZyCXOubU9Eihvu0o9WwkF6x87.jpg",
  },
  128: {
    name: "Остров проклятых",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3UVMyefkUBiktshtKIEnNXvOFKH.jpg",
  },
  129: {
    name: "Пленницы",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iBuJWQEJLOhsN40GiXM6lJyoklW.jpg",
  },
  130: {
    name: "Троя",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/peWHlsZyYiJMATYjoTvKyeF5ZQi.jpg",
  },
  131: {
    name: "Храбрая сердцем",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5A52Y3scfxXTwBKVdgEVmoa8i0q.jpg",
  },
  132: {
    name: "Зелёная миля",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lHxe8t4B0CKv4DO0C0B4rsuiG95.jpg",
  },
  133: {
    name: "Логан",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FSoZ8mtEwPAO3k670G3yRaBpTK.jpg",
  },
  134: {
    name: "Игры разума",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/whoHXxUCVEHmGUTJPwJ8J6ZElxo.jpg",
  },
  135: {
    name: "Отель «Гранд Будапешт»",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5qFxj03eBrkI0bUiGIonb4e0AI4.jpg",
  },
  136: {
    name: "Сияние",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nkylUXS1lhnCeffdTDAR4OH4zyK.jpg",
  },
  137: {
    name: "Терминатор(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hcItc8IMO0WKyRWPGkI6xtKVu6X.jpg",
  },
  138: {
    name: "Игра",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fQkIewFx7pF77cyyXXMKpTynlkc.jpg",
  },
  139: {
    name: "12 обезьян",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bcBnh6I89hS2PP36MuVpVbrMEjO.jpg",
  },
  140: {
    name: "Господин Никто",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6j1TfRRDuoHFc36kx3vob1NxZmp.jpg",
  },
  141: {
    name: "Планета Ка-Пэкс",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zRFONTvWYz3MJXazsuEBtLPptDV.jpg",
  },
  142: {
    name: "Законопослушный гражданин",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qIFpGHKTT0fQM1OS9rfKi7K5AV8.jpg",
  },
  143: {
    name: "Терминал",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ccZhi9LQhw871sB2VNsOAGifru9.jpg",
  },
  144: {
    name: "Машинист",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nZNHIBIIwTfgN9GVI7VoTm46LSX.jpg",
  },
  145: {
    name: "Пиджак",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/z2wFU9osaBRspQn9Kk6GqyzkFv1.jpg",
  },
  146: {
    name: "Загадочная история Бенджамина Баттона",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wmVLPh1WFUe8CglklJYpXFMQqiG.jpg",
  },
  147: {
    name: "Омерзительная восьмёрка",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oum699CFFl34Z0ZyIUBmkFRVjfT.jpg",
  },
  148: {
    name: "Грань будущего",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/98Ll6igWXdjHiKuZtCacTzRGyNX.jpg",
  },
  149: {
    name: "Голгофа",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jzgiam18I0gR20LB8BAE5u4dIdm.jpg",
  },
  150: {
    name: "Девушка с татуировкой дракона",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qMTJRPjORJOFFSaB7f8PWuIhqpI.jpg",
  },
  151: {
    name: "Бёрдмэн",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8w5wEs0UiPUnM4yp9cinETSHpBh.jpg",
  },
  152: {
    name: "Арахисовый сокол",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tMB9auXwFlgQ0BQTUk1pF2ZXBVE.jpg",
  },
  153: {
    name: "Дюна",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3hbXNclcHaj5KiF6kK41GBMjyFr.jpg",
  },
  154: {
    name: "Дюна 2",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3aLghRkuJc9cs770fxo4a6YWht3.jpg",
  },
  155: {
    name: "Оппенгеймер",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8OQzw8keE6sDNH25sOqPRTxhFTO.jpg",
  },
  156: {
    name: "Топ Ган: Мэверик",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/r1xknB9WZTveRTmeBk2jvRIEehL.jpg",
  },
  157: {
    name: "Довод",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1jU80STrosbPsiNe3oPpwyS5cXg.jpg",
  },
  158: {
    name: "Банши Инишерина",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/49rEsMRYaPVcKcRSOarhtXPBxC.jpg",
  },
  159: {
    name: "Лига справедливости Зака Снайдера",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mUKyopnIdWe8bqW7Q4VSiQEDaeq.jpg",
  },
  160: {
    name: "Зависнуть в Палм-Спрингс",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/z2gIGxxJ1OV64pJQ3DaOtMpy7I.jpg",
  },
  161: {
    name: "Быстрее пули",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oK3e4nDFB8lsT8H1D7bMHXoXsRH.jpg",
  },
  162: {
    name: "Пианист",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2hxGkepoXGO3Zo9wjE3ZyTdHE3G.jpg",
  },
  163: {
    name: "Человек-паук: Паутина вселенных",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hsGAxOqbH0UNpIJPMsVRA6dFf85.jpg",
  },
  164: {
    name: "Человек-паук: Через вселенные",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wmEKJr81CABBU68Qy2wYPwQHn0L.jpg",
  },
  165: {
    name: "Душа",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jZkksyMZdTYw7fIVKyA95nFEPnt.jpg",
  },
  166: {
    name: "Могила светлячков",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nJYXr0RAznczy5tCZtYcjoYMjEg.jpg",
  },
  167: {
    name: "Апокалипсис сегодня",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qD22STmuP6DiBmqIUmFrWSlpwCW.jpg",
  },
  168: {
    name: "Твоё имя",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iH2WDCYLIUjc7oPWRT7Kxgxza6k.jpg",
  },
  169: {
    name: "1917",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nfU1YXe2ztCSUWusLOpCUL75Zdw.jpg",
  },
  170: {
    name: "Отец",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xL2A41uKed4nepCCb0621kAxUiL.jpg",
  },
  171: {
    name: "Головоломка",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n7dwgOD11bcuLjxckCKyrIl3ekS.jpg",
  },
  172: {
    name: "Общество мёртвых поэтов",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1josLrBovuxYylg6QimE0Y1FUs.jpg",
  },
  173: {
    name: "Железный человек(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wAKZudQn0HEXqLvaGN6BEripHbv.jpg",
  },
  174: {
    name: "Тор(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7pzUsnFD4T8Syeqaojcb9zheR3H.jpg",
  },
  175: {
    name: "Солнцестояние",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nCZDd6sJ7OdonxiDUNgncrKusQn.jpg",
  },
  176: {
    name: "Дэдпул(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7vEAHaoSXU5evsHMTETUFRVW3QW.jpg",
  },
  177: {
    name: "Джон Уик(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eHYhZGgN3BUFarPxhFMdjQd0ir.jpg",
  },
  178: {
    name: "Вавилон",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/u8Hj5v5x0R4DJFW0yUX4iGTWtDT.jpg",
  },
  179: {
    name: "Аватар: Путь Воды",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yFNn7uWudLLWDJqfj3fwh5CcUdR.jpg",
  },
  180: {
    name: "300 спартанцев",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sWQBYdrUvT5JObCmd9gUvYFQmXd.jpg",
  },
  181: {
    name: "Аватар",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lUKcrcO3wEPhNnzGq06JIX7GIEb.jpg",
  },
  182: {
    name: "Не смотрите наверх",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nLWRxZYkUVM3gQNyF70jFMvImG3.jpg",
  },
  183: {
    name: "Шрэк(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oQh2HpAXRIr2ZCSmYuH8NIMRxyP.jpg",
  },
  184: {
    name: "Иллюзия обмана(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/theB79zav0sACXPxMFgKI3nQIr8.jpg",
  },
  185: {
    name: "Один дома(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yeS4fjFnTm6jBRiU6zSzFZ8t9W5.jpg",
  },
  186: {
    name: "Евротур",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/MDt6uQzoOqE1hCCoIu3B97Pxqf.jpg",
  },
  187: {
    name: "На Западном фронте без перемен",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yzn6vRTjTZZ9ySBPQojKtzWqHwX.jpg",
  },
  188: {
    name: "Валериан и город тысячи планет",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jNGLo4MfpwZGPW5chCIGgwyD2Y9.jpg",
  },
  189: {
    name: "Игра в имитацию",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iM1C3NYISOzLbWEo8HcUDBASprh.jpg",
  },
  190: {
    name: "Код да Винчи(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1INA6Y4ewrXoTbBbxtm4W4aY8Uf.jpg",
  },
  191: {
    name: "Александр",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3om7SsMhUjxa4comBGldIVNZOys.jpg",
  },
  192: {
    name: "Перелом",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cSiHIOgqhMNXK2B9KC12htzAtNc.jpg",
  },
  193: {
    name: "Лучшее предложение",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4LCRuz87vahELwdHlISyZjKZHig.jpg",
  },
  194: {
    name: "Рок-н-рольщик",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n9C7YPkBKuz77Xn44xq35mqLTT2.jpg",
  },
  195: {
    name: "Револьвер",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cOu6PVzoMPZf65sUhkuu50xYsYw.jpg",
  },
  196: {
    name: "Пока не сыграл в ящик",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOgd3KgFq2ceo8hIgrxjiB8cVYz.jpg",
  },
  197: {
    name: "Всё везде и сразу",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oFiudghfudYUtW3yHgvv82xgoXP.jpg",
  },
  198: {
    name: "Малыш на драйве",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/18ZLWLRx9jPq1rEEzZGbxGyS76a.jpg",
  },
  199: {
    name: "Первому игроку приготовиться",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tIgYNUuBeYaFSeVsQfQhidYkE9W.jpg",
  },
  200: {
    name: "Великий уравнитель",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hc1tXFITduL2nm5CqORSmlwAOlI.jpg",
  },
  201: {
    name: "Тачки(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wnnv9vLO4jBhXF1Vw2Ss8uhjJPC.jpg",
  },
  202: {
    name: "Бегущий в лабиринте(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fvy2LrxQzSCpUuGaB9jK5z1NeA6.jpg",
  },
  203: {
    name: "Главный герой",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJZ3UeKAOgz2kFVJPZZFzLtn1Qk.jpg",
  },
  204: {
    name: "Дивергент(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4GxZw9ADsIPAcpebbrm053DPa18.jpg",
  },
  205: {
    name: "Время",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dswZ4d60sHxa60uhPfJmFp4phL1.jpg",
  },
  206: {
    name: "Кингсмэн(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9NyzS42sc9mvNLyPJtYqTqpkEoY.jpg",
  },
  207: {
    name: "Прибытие",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3K1byNV0CfChvJFNbe2ZAkiro4U.jpg",
  },
  208: {
    name: "Форсаж(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eGdN1s6G7COuTu2rJmZQl0eU7kg.jpg",
  },
  209: {
    name: "Дюнкерк",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/m3xR365ajZrTN5vm2xf91L1zplv.jpg",
  },
  210: {
    name: "Ванильное небо",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v9uych9hmfnc4gTBWeQu0k47RIp.jpg",
  },
  211: {
    name: "Миссия невыполнима(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1uWgp34DKYpxPAIlDaoR3sUanTv.jpg",
  },
  212: {
    name: "Джеймс Бонд(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jycSKuZ4CvgPWRHdhgPA9q1EC8n.jpg",
  },
  213: {
    name: "Эффект бабочки",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/w6YONfckbFUksa6IITACN89JuHk.jpg",
  },
  214: {
    name: "Фокус",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/grzQRCyZEEdJomeq8324AV6AI6W.jpg",
  },
  215: {
    name: "Ещё по одной",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1iAyKvrc6FoIpSk4iXJKZsiUjZJ.jpg",
  },
  216: {
    name: "Пила(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ghBc5iOJxDcEHPi7OvQYdVXiGeF.jpg",
  },
  217: {
    name: "Такси(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3I83PHvy6iPqtzuItLaI2DdLeHQ.jpg",
  },
  218: {
    name: "Барби",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qqwqW8jWjZ6iaLRU98z3fdghwRn.jpg",
  },
  219: {
    name: "Титаник",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mA0Dcp327JOX1YoaQS5nqXjDoyW.jpg",
  },
  220: {
    name: "Счастливое число Слевина",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ly683uqv7CsL3mByM1cVFxTX7to.jpg",
  },
  221: {
    name: "Стражи Галактики(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4uVdNj0FWCjtG1jEYASuNzE33LS.jpg",
  },
  222: {
    name: "Люди Х(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wBqh8PMSOoUmSCyilXR8IRnjhwN.jpg",
  },
  223: {
    name: "Первый мститель(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uviZWCZnL46bkmDZMpyUhrdLwhH.jpg",
  },
  224: {
    name: "Человек-паук(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/20KscwCTqRIC0fmh6oQog50PrJ1.jpg",
  },
  225: {
    name: "Доктор Стрэндж(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fR4oifDjoGFAyhWyPUl3h9H1xpQ.jpg",
  },
  226: {
    name: "Мстители",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7SCa2Uw4sdTkn7mGMAhq0AkSC6Y.jpg",
  },
  227: {
    name: "Мстители: Эра Альтрона",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eBHGsSnSroprBWUBCzQxAevv9iv.jpg",
  },
  228: {
    name: "Хроники Нарнии(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3Gnurtw8o3j8AF5MucEGmlXu2YP.jpg",
  },
  229: {
    name: "Звёздный путь(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1OCtC9zCxEeW523tl8gdaDOUTaV.jpg",
  },
  230: {
    name: "Индиана Джонс(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d361eZAD4twogn7xlQxn2yOlJSu.jpg",
  },
  231: {
    name: "Планета обезьян(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ppqcUWZUcU16XyvPFMCCv8tBeUB.jpg",
  },
  232: {
    name: "Трансформеры(все части)",
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rIATybb4lnphRHoD05jAyW8lBaP.jpg",
  },
};
