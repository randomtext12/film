export interface Movie {
  name: string;
  img: string;
  place: string;
}

export const getRandomKeys = (
  numKeys: number,
  availableMovies: Record<number, Movie>
): number[] => {
  const keys = Object.keys(availableMovies).map(Number);
  const shuffled = keys.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numKeys);
};

export const MOVIES: Record<
  number,
  { name: string; img: string; place: string }
> = {
  1: {
    name: "Большой Лебовски",
    img: require("./images/БольшойЛебовски.jpg"),
    place: "",
  },
  2: {
    name: "Крёстный отец 2",
    img: require("./images/КрёстныйОтец2.jpg"),
    place: "",
  },
  3: {
    name: "Храброе сердце",
    img: require("./images/ХраброеСердце.jpg"),
    place: "",
  },
  4: {
    name: "Достучаться до небес",
    img: require("./images/ДостучатьсяДоНебес.jpg"),
    place: "",
  },
  5: {
    name: "Миллионер из трущоб",
    img: require("./images/МиллионерИзТрущоб.jpg"),
    place: "",
  },
  6: {
    name: "Список Шиндлера",
    img: require("./images/СписокШиндлера.jpg"),
    place: "",
  },
  7: {
    name: "Хоббит(все части)",
    img: require("./images/Хоббит.jpg"),
    place: "",
  },
  8: {
    name: "Назад в будущее(все части)",
    img: require("./images/НазадВБудущее.jpg"),
    place: "",
  },
  9: {
    name: "В центре внимания",
    img: require("./images/ВЦентреВнимания.jpg"),
    place: "",
  },
  10: {
    name: "По соображениям совести",
    img: require("./images/ПоСоображениямСовести.jpg"),
    place: "",
  },
  11: {
    name: "Убийцы цветочной луны",
    img: require("./images/УбийцыЦветочнойЛуны.jpg"),
    place: "",
  },
  12: {
    name: "Однажды в... Голивуде",
    img: require("./images/ОднаждыВГолливуде.jpg"),
    place: "",
  },
  13: {
    name: "Бойцовский клуб",
    img: require("./images/БойцовскийКлуб.jpg"),
    place: "",
  },
  14: {
    name: "Гарри Поттер(все части)",
    img: require("./images/ГарриПоттер.jpg"),
    place: "",
  },
  15: {
    name: "Охотники за привидениями(все части)",
    img: require("./images/ОхотникиЗаПривидениями.jpg"),
    place: "",
  },
  16: {
    name: "История игрушек(все части)",
    img: require("./images/ИсторияИгрушек.jpg"),
    place: "",
  },
  17: {
    name: "Эквилибриум",
    img: require("./images/Эквилибриум.jpg"),
    place: "",
  },
  18: {
    name: "Звездные войны(все части)",
    img: require("./images/ЗвёздныеВойны.jpg"),
    place: "",
  },
  19: {
    name: "Голодные игры(все части)",
    img: require("./images/ГолодныеИгры.jpg"),
    place: "",
  },
  20: {
    name: "Пираты Карибского моря(все части)",
    img: require("./images/ПиратыКарибскогоМоря.jpg"),
    place: "",
  },
  21: {
    name: "Вверх",
    img: require("./images/Вверх.jpg"),
    place: "",
  },
  22: {
    name: "Корпорация монстров(все части)",
    img: require("./images/КорпорацияМонстров.jpg"),
    place: "",
  },
  23: {
    name: "Сумерки(все части)",
    img: require("./images/Сумерки.jpg"),
    place: "",
  },
  24: {
    name: "Матрица(все части)",
    img: require("./images/Матрица.jpg"),
    place: "",
  },
  25: {
    name: "Убить Билла",
    img: require("./images/УбитьБилла.jpg"),
    place: "",
  },
  26: {
    name: "Скотт Пилигрим против всех",
    img: require("./images/СкоттПилигримПротивВсех.jpg"),
    place: "",
  },
  27: {
    name: "После прочтения сжечь",
    img: require("./images/ПослеПрочтенияСжечь.jpg"),
    place: "",
  },
  28: {
    name: "1+1",
    img: require("./images/1+1.jpg"),
    place: "",
  },
  29: {
    name: "Шерлок Холмс(все части)",
    img: require("./images/ШерлокХолмс.jpg"),
    place: "",
  },
  30: {
    name: "Крёстный отец",
    img: require("./images/КрёстныйОтец.jpg"),
    place: "",
  },
  31: {
    name: "Марсианин",
    img: require("./images/Марсианин.jpg"),
    place: "",
  },
  32: {
    name: "Как приручить дракона(все части)",
    img: require("./images/КакПриручитьДракона.jpg"),
    place: "",
  },
  33: {
    name: "Тайна Коко",
    img: require("./images/ТайнаКоко.jpg"),
    place: "",
  },
  34: {
    name: "Рататуй",
    img: require("./images/Рататуй.jpg"),
    place: "",
  },
  35: {
    name: "Люди в чёрном(все части)",
    img: require("./images/ЛюдиВЧерном.jpg"),
    place: "",
  },
  36: {
    name: "Реквием по мечте",
    img: require("./images/РеквиемПоМечте.jpg"),
    place: "",
  },
  37: {
    name: "Город грехов(все части)",
    img: require("./images/ГородГрехов.jpg"),
    place: "",
  },
  38: {
    name: "Пятый элемент",
    img: require("./images/ПятыйЭлемент.jpg"),
    place: "",
  },
  39: {
    name: "Леон",
    img: require("./images/Леон.jpg"),
    place: "",
  },
  40: {
    name: "Хранители",
    img: require("./images/Хранители.jpg"),
    place: "",
  },
  41: {
    name: "Бегущий по лезвию",
    img: require("./images/БегущийПоЛезвию.jpg"),
    place: "",
  },
  42: {
    name: "Залечь на дно в Брюгге",
    img: require("./images/ЗалечьНаДноВБрюгге.jpg"),
    place: "",
  },
  43: {
    name: "Побег из Шоушенка",
    img: require("./images/ПобегИзШоушенка.jpg"),
    place: "",
  },
  44: {
    name: "Интерстеллар",
    img: require("./images/Интерстеллар.jpg"),
    place: "",
  },
  45: {
    name: "Адвокат дьявола",
    img: require("./images/АдвокатДьявола.jpg"),
    place: "",
  },
  46: {
    name: "Шестое чувство",
    img: require("./images/ШестоеЧувство.jpg"),
    place: "",
  },
  47: {
    name: "V значит Вендетта",
    img: require("./images/VЗначитВендетта.jpg"),
    place: "",
  },
  48: {
    name: "Операция Арго",
    img: require("./images/ОперацияАрго.jpg"),
    place: "",
  },
  49: {
    name: "Три билборда на границе Эббинга, Миссури",
    img: require("./images/ТриБилбордаНаГраницеЭббингаМиссури.jpg"),
    place: "",
  },
  50: {
    name: "Мстители: Финал",
    img: require("./images/МстителиФинал.jpg"),
    place: "",
  },
  51: {
    name: "Социальная сеть",
    img: require("./images/СоциальнаяСеть.jpg"),
    place: "",
  },
  52: {
    name: "Криминальное чтиво",
    img: require("./images/КриминальноеЧтиво.jpg"),
    place: "",
  },
  53: {
    name: "Карты, деньги, два ствола",
    img: require("./images/КартыДеньгиДваСтвола.jpg"),
    place: "",
  },
  54: {
    name: "Мой сосед Тоторо",
    img: require("./images/МойСоседТоторо.jpg"),
    place: "",
  },
  55: {
    name: "День сурка",
    img: require("./images/ДеньСурка.jpg"),
    place: "",
  },
  56: {
    name: "Бесславные ублюдки",
    img: require("./images/БесславныеУблюдки.jpg"),
    place: "",
  },
  57: {
    name: "Джокер",
    img: require("./images/Джокер.jpg"),
    place: "",
  },
  58: {
    name: "Бэтмен",
    img: require("./images/Бэтмен.jpg"),
    place: "",
  },
  59: {
    name: "Принцесса Мононоке",
    img: require("./images/ПринцессаМононоке.jpg"),
    place: "",
  },
  60: {
    name: "Подозрительные лица",
    img: require("./images/ПодозрительныеЛица.jpg"),
    place: "",
  },
  61: {
    name: "Поймай меня, если сможешь",
    img: require("./images/ПоймайМеняЕслиСможешь.jpg"),
    place: "",
  },
  62: {
    name: "Невероятная жизнь Уолтера Митти",
    img: require("./images/НевероятнаяЖизньУолтераМитти.jpg"),
    place: "",
  },
  63: {
    name: "Молчание ягнят",
    img: require("./images/МолчаниеЯгнят.jpg"),
    place: "",
  },
  64: {
    name: "Тёмный рыцарь",
    img: require("./images/ТёмныйРыцарь.jpg"),
    place: "",
  },
  65: {
    name: "Мир Юрского периода(все части)",
    img: require("./images/МирЮрскогоПериода.jpg"),
    place: "",
  },
  66: {
    name: "Унесённые призраками",
    img: require("./images/УнесённыеПризраками.jpg"),
    place: "",
  },
  67: {
    name: "Одержимость",
    img: require("./images/Одержимость.jpg"),
    place: "",
  },
  68: {
    name: "Воин",
    img: require("./images/Воин.jpg"),
    place: "",
  },
  69: {
    name: "Джентльмены",
    img: require("./images/Джентельмены.jpg"),
    place: "",
  },
  70: {
    name: "Ходячий замок",
    img: require("./images/ХодячийЗамок.jpg"),
    place: "",
  },
  71: {
    name: "Отступники",
    img: require("./images/Отступники.jpg"),
    place: "",
  },
  72: {
    name: "Семь",
    img: require("./images/Семь.jpg"),
    place: "",
  },
  73: {
    name: "Убийство в Восточном экспрессе(все части)",
    img: require("./images/УбийствоВВосточномЭкспрессе.jpg"),
    place: "",
  },
  74: {
    name: "Достать ножи(все части)",
    img: require("./images/ДостатьНожи.jpg"),
    place: "",
  },
  75: {
    name: "Всегда говори `ДА`",
    img: require("./images/ВсегдаГовориДа.jpg"),
    place: "",
  },
  76: {
    name: "Ирландец",
    img: require("./images/Ирландец.jpg"),
    place: "",
  },
  77: {
    name: "Исходный код",
    img: require("./images/ИсходныхКод.jpg"),
    place: "",
  },
  78: {
    name: "Человек, который изменил всё",
    img: require("./images/ЧеловекКоторыйИзменилВсё.jpg"),
    place: "",
  },
  79: {
    name: "Я, робот",
    img: require("./images/ЯРобот.jpg"),
    place: "",
  },
  80: {
    name: "Волк с Уолл-стрит",
    img: require("./images/ВолкСУоллСтрит.jpg"),
    place: "",
  },
  81: {
    name: "Славные парни",
    img: require("./images/СлавныеПарни.jpg"),
    place: "",
  },
  82: {
    name: "Дело Ричарда Джуэлла",
    img: require("./images/ДелоРичардаДжуэлла.jpg"),
    place: "",
  },
  83: {
    name: "Бэтмен: Начало",
    img: require("./images/БэтменНачало.jpg"),
    place: "",
  },
  84: {
    name: "Безумный Макс: Дорога ярости",
    img: require("./images/БезумныйМаксДорогаЯрости.jpg"),
    place: "",
  },
  85: {
    name: "Великий Гэтсби",
    img: require("./images/ВеликийГэтсби.jpg"),
    place: "",
  },
  86: {
    name: "Драйв",
    img: require("./images/Драйв.jpg"),
    place: "",
  },
  87: {
    name: "Властелин колец(все части)",
    img: require("./images/ВластелинКолец.jpg"),
    place: "",
  },
  88: {
    name: "Исчезнувшая",
    img: require("./images/Исчезнувшая.jpg"),
    place: "",
  },
  89: {
    name: "Клаус",
    img: require("./images/Клаус.jpg"),
    place: "",
  },
  90: {
    name: "Красота по-американски",
    img: require("./images/КрасотаПоАмерикански.jpg"),
    place: "",
  },
  91: {
    name: "ВАЛЛ·И",
    img: require("./images/Валли.jpg"),
    place: "",
  },
  92: {
    name: "Спасти рядового Райана",
    img: require("./images/СпастиРядовогоРайана.jpg"),
    place: "",
  },
  93: {
    name: "Лобстер",
    img: require("./images/Лобстер.jpg"),
    place: "",
  },
  94: {
    name: "Гладиатор",
    img: require("./images/Гладиатор.jpg"),
    place: "",
  },
  95: {
    name: "Дом, который построил Джек",
    img: require("./images/ДомКоторыйПостроилДжек.jpg"),
    place: "",
  },
  96: {
    name: "Ford против Ferrari",
    img: require("./images/ФордПротивФеррари.jpg"),
    place: "",
  },
  97: {
    name: "Темный рыцарь: Возрождение легенды",
    img: require("./images/ТёмныйРыцарьВозрождениеЛегенды.jpg"),
    place: "",
  },
  98: {
    name: "Начало",
    img: require("./images/Начало.jpg"),
    place: "",
  },
  99: {
    name: "Паразиты",
    img: require("./images/Паразиты.jpg"),
    place: "",
  },
  100: {
    name: "Большой куш",
    img: require("./images/БольшойКуш.jpg"),
    place: "",
  },
  101: {
    name: "Зелёная книга",
    img: require("./images/ЗелёнаяКнига.jpg"),
    place: "",
  },
  102: {
    name: "Старикам тут не место",
    img: require("./images/СтарикамТутНеМесто.jpg"),
    place: "",
  },
  103: {
    name: "Одиннадцать друзей Оушена(все части)",
    img: require("./images/ОдиннадцатьДрузейОушена.jpg"),
    place: "",
  },
  104: {
    name: "Платформа",
    img: require("./images/Платформа.jpg"),
    place: "",
  },
  105: {
    name: "Выживший",
    img: require("./images/Выживший.jpg"),
    place: "",
  },
  106: {
    name: "Мстители: Война бесконечности",
    img: require("./images/МстителиВойнаБесконечности.jpg"),
    place: "",
  },
  107: {
    name: "Шоу Трумана",
    img: require("./images/ШоуТрумана.jpg"),
    place: "",
  },
  108: {
    name: "Малышка на миллион",
    img: require("./images/МалышкаНаМиллион.jpg"),
    place: "",
  },
  109: {
    name: "Король Лев",
    img: require("./images/КорольЛев.jpg"),
    place: "",
  },
  110: {
    name: "Прочь",
    img: require("./images/Прочь.jpg"),
    place: "",
  },
  111: {
    name: "Американская история X",
    img: require("./images/АмериканскаяИсторияХ.jpg"),
    place: "",
  },
  112: {
    name: "Вечное сияние чистого разума",
    img: require("./images/ВечноеСияниеЧистогоРазума.jpg"),
    place: "",
  },
  113: {
    name: "Помни",
    img: require("./images/Помни.jpg"),
    place: "",
  },
  114: {
    name: "Королевство полной луны",
    img: require("./images/КоролевствоПолнойЛуны.jpg"),
    place: "",
  },
  115: {
    name: "Умница Уилл Хантинг",
    img: require("./images/УмницаУиллХантинг.jpg"),
    place: "",
  },
  116: {
    name: "Лицо со шрамом",
    img: require("./images/ЛицоСоШрамом.jpg"),
    place: "",
  },
  117: {
    name: "Цельнометаллическая оболочка",
    img: require("./images/ЦельнометаллическаяОболочка.jpg"),
    place: "",
  },
  118: {
    name: "Бешеные псы",
    img: require("./images/БешеныеПсы.jpg"),
    place: "",
  },
  119: {
    name: "Джанго освобождённый",
    img: require("./images/ДжангоОсвобождённый.jpg"),
    place: "",
  },
  120: {
    name: "Невидимый гость",
    img: require("./images/НевидимыйГость.jpg"),
    place: "",
  },
  121: {
    name: "Престиж",
    img: require("./images/Престиж.jpg"),
    place: "",
  },
  122: {
    name: "Бегущий по лезвию 2049",
    img: require("./images/БегущийПоЛезвию2049.jpg"),
    place: "",
  },
  123: {
    name: "Брюс Всемогущий",
    img: require("./images/БрюсВсемогущий.jpg"),
    place: "",
  },
  124: {
    name: "Я - легенда",
    img: require("./images/ЯЛегенда.jpg"),
    place: "",
  },
  125: {
    name: "Олдбой",
    img: require("./images/Олдбой.jpg"),
    place: "",
  },
  126: {
    name: "Далласский клуб покупателей",
    img: require("./images/ДалласскийКлубПокупателей.jpg"),
    place: "",
  },
  127: {
    name: "Форрест Гамп",
    img: require("./images/ФоррестГамп.jpg"),
    place: "",
  },
  128: {
    name: "Остров проклятых",
    img: require("./images/ОстровПроклятых.jpg"),
    place: "",
  },
  129: {
    name: "Пленницы",
    img: require("./images/Пленницы.jpg"),
    place: "",
  },
  130: {
    name: "Троя",
    img: require("./images/Троя.jpg"),
    place: "",
  },
  131: {
    name: "Храбрая сердцем",
    img: require("./images/ХрабраяСердцем.jpg"),
    place: "",
  },
  132: {
    name: "Зелёная миля",
    img: require("./images/ЗелёнаяМиля.jpg"),
    place: "",
  },
  133: {
    name: "Логан",
    img: require("./images/Логан.jpg"),
    place: "",
  },
  134: {
    name: "Игры разума",
    img: require("./images/ИгрыРазума.jpg"),
    place: "",
  },
  135: {
    name: "Отель «Гранд Будапешт»",
    img: require("./images/ОтельГрандБудапешт.jpg"),
    place: "",
  },
  136: {
    name: "Сияние",
    img: require("./images/Сияние.jpg"),
    place: "",
  },
  137: {
    name: "Терминатор(все части)",
    img: require("./images/Терминатор.jpg"),
    place: "",
  },
  138: {
    name: "Игра",
    img: require("./images/Игра.jpg"),
    place: "",
  },
  139: {
    name: "12 обезьян",
    img: require("./images/12Обезьян.jpg"),
    place: "",
  },
  140: {
    name: "Господин Никто",
    img: require("./images/ГосподинНикто.jpg"),
    place: "",
  },
  141: {
    name: "Планета Ка-Пэкс",
    img: require("./images/ПланетаКаПэкс.jpg"),
    place: "",
  },
  142: {
    name: "Законопослушный гражданин",
    img: require("./images/ЗаконопослушныйГражданин.jpg"),
    place: "",
  },
  143: {
    name: "Терминал",
    img: require("./images/Терминал.jpg"),
    place: "",
  },
  144: {
    name: "Машинист",
    img: require("./images/Машинист.jpg"),
    place: "",
  },
  145: {
    name: "Пиджак",
    img: require("./images/Пиджак.jpg"),
    place: "",
  },
  146: {
    name: "Загадочная история Бенджамина Баттона",
    img: require("./images/ЗагадочнаяИсторияБенджаминаБаттона.jpg"),
    place: "",
  },
  147: {
    name: "Омерзительная восьмёрка",
    img: require("./images/ОмерзительнаяВосьмёрка.jpg"),
    place: "",
  },
  148: {
    name: "Грань будущего",
    img: require("./images/ГраньБудущего.jpg"),
    place: "",
  },
  149: {
    name: "Голгофа",
    img: require("./images/Голгофа.jpg"),
    place: "",
  },
  150: {
    name: "Девушка с татуировкой дракона",
    img: require("./images/ДевушкаСТатуировкойДракона.jpg"),
    place: "",
  },
  151: {
    name: "Бёрдмэн",
    img: require("./images/Бёрдмэн.jpg"),
    place: "",
  },
  152: {
    name: "Арахисовый сокол",
    img: require("./images/АрахисовыйСокол.jpg"),
    place: "",
  },
  153: {
    name: "Дюна",
    img: require("./images/Дюна.jpg"),
    place: "",
  },
  154: {
    name: "Дюна 2",
    img: require("./images/Дюна2.jpg"),
    place: "",
  },
  155: {
    name: "Оппенгеймер",
    img: require("./images/Оппенгеймер.jpg"),
    place: "",
  },
  156: {
    name: "Топ Ган: Мэверик",
    img: require("./images/ТопГанМэверик.jpg"),
    place: "",
  },
  157: {
    name: "Довод",
    img: require("./images/Довод.jpg"),
    place: "",
  },
  158: {
    name: "Банши Инишерина",
    img: require("./images/БаншиИнишерина.jpg"),
    place: "",
  },
  159: {
    name: "Лига справедливости Зака Снайдера",
    img: require("./images/ЛигаСправедливостиЗакаСнайдера.jpg"),
    place: "",
  },
  160: {
    name: "Зависнуть в Палм-Спрингс",
    img: require("./images/ЗависнутьВПалмСпрингс.jpg"),
    place: "",
  },
  161: {
    name: "Быстрее пули",
    img: require("./images/БыстрееПули.jpg"),
    place: "",
  },
  162: {
    name: "Пианист",
    img: require("./images/Пианист.jpg"),
    place: "",
  },
  163: {
    name: "Человек-паук: Паутина вселенных",
    img: require("./images/ЧеловекПаукПаутинаВселенных.jpg"),
    place: "",
  },
  164: {
    name: "Человек-паук: Через вселенные",
    img: require("./images/ЧеловекПаукЧерезВселенные.jpg"),
    place: "",
  },
  165: {
    name: "Душа",
    img: require("./images/Душа.jpg"),
    place: "",
  },
  166: {
    name: "Могила светлячков",
    img: require("./images/МогилаСветлячков.jpg"),
    place: "",
  },
  167: {
    name: "Апокалипсис сегодня",
    img: require("./images/АпокалипсисСегодня.jpg"),
    place: "",
  },
  168: {
    name: "Твоё имя",
    img: require("./images/ТвоёИмя.jpg"),
    place: "",
  },
  169: {
    name: "1917",
    img: require("./images/1917.jpg"),
    place: "",
  },
  170: {
    name: "Отец",
    img: require("./images/Отец.jpg"),
    place: "",
  },
  171: {
    name: "Головоломка",
    img: require("./images/Головоломка.jpg"),
    place: "",
  },
  172: {
    name: "Общество мёртвых поэтов",
    img: require("./images/ОбществоМёртвыйПоэтов.jpg"),
    place: "",
  },
  173: {
    name: "Железный человек(все части)",
    img: require("./images/ЖелезныйЧеловек.jpg"),
    place: "",
  },
  174: {
    name: "Тор(все части)",
    img: require("./images/Тор.jpg"),
    place: "",
  },
  175: {
    name: "Солнцестояние",
    img: require("./images/Солнцестояние.jpg"),
    place: "",
  },
  176: {
    name: "Дэдпул(все части)",
    img: require("./images/Дэдпул.jpg"),
    place: "",
  },
  177: {
    name: "Джон Уик(все части)",
    img: require("./images/ДжонУик.jpg"),
    place: "",
  },
  178: {
    name: "Вавилон",
    img: require("./images/Вавилон.jpg"),
    place: "",
  },
  179: {
    name: "Аватар: Путь Воды",
    img: require("./images/АватарПутьВоды.jpg"),
    place: "",
  },
  180: {
    name: "300 спартанцев",
    img: require("./images/300Спартанцев.jpg"),
    place: "",
  },
  181: {
    name: "Аватар",
    img: require("./images/Аватар.jpg"),
    place: "",
  },
  182: {
    name: "Не смотрите наверх",
    img: require("./images/НеСмотритеНаверх.jpg"),
    place: "",
  },
  183: {
    name: "Шрэк(все части)",
    img: require("./images/Шрэк.jpg"),
    place: "",
  },
  184: {
    name: "Иллюзия обмана(все части)",
    img: require("./images/ИллюзияОбмана.jpg"),
    place: "",
  },
  185: {
    name: "Один дома(все части)",
    img: require("./images/ОдинДома.jpg"),
    place: "",
  },
  186: {
    name: "Евротур",
    img: require("./images/Евротур.jpg"),
    place: "",
  },
  187: {
    name: "На Западном фронте без перемен",
    img: require("./images/НаЗападномФронтеБезПеремен.jpg"),
    place: "",
  },
  188: {
    name: "Валериан и город тысячи планет",
    img: require("./images/ВалерианИГородТысячиПланет.jpg"),
    place: "",
  },
  189: {
    name: "Игра в имитацию",
    img: require("./images/ИграВИмитацию.jpg"),
    place: "",
  },
  190: {
    name: "Код да Винчи(все части)",
    img: require("./images/КодДаВинчи.jpg"),
    place: "",
  },
  191: {
    name: "Александр",
    img: require("./images/Александр.jpg"),
    place: "",
  },
  192: {
    name: "Перелом",
    img: require("./images/Перелом.jpg"),
    place: "",
  },
  193: {
    name: "Лучшее предложение",
    img: require("./images/ЛучшееПредложение.jpg"),
    place: "",
  },
  194: {
    name: "Рок-н-рольщик",
    img: require("./images/РокНРольщик.jpg"),
    place: "",
  },
  195: {
    name: "Револьвер",
    img: require("./images/Револьвер.jpg"),
    place: "",
  },
  196: {
    name: "Пока не сыграл в ящик",
    img: require("./images/ПокаНеСыгралВЯщик.jpg"),
    place: "",
  },
  197: {
    name: "Всё везде и сразу",
    img: require("./images/ВсёВездеИСразу.jpg"),
    place: "",
  },
  198: {
    name: "Малыш на драйве",
    img: require("./images/МалышНаДрайве.jpg"),
    place: "",
  },
  199: {
    name: "Первому игроку приготовиться",
    img: require("./images/ПервомуИгрокуПриготовиться.jpg"),
    place: "",
  },
  200: {
    name: "Великий уравнитель",
    img: require("./images/ВеликийУравнитель.jpg"),
    place: "",
  },
  201: {
    name: "Тачки(все части)",
    img: require("./images/Тачки.jpg"),
    place: "",
  },
  202: {
    name: "Бегущий в лабиринте(все части)",
    img: require("./images/БегущийВЛабиринте.jpg"),
    place: "",
  },
  203: {
    name: "Главный герой",
    img: require("./images/ГлавныйГерой.jpg"),
    place: "",
  },
  204: {
    name: "Дивергент(все части)",
    img: require("./images/Дивергент.jpg"),
    place: "",
  },
  205: {
    name: "Время",
    img: require("./images/Время.jpg"),
    place: "",
  },
  206: {
    name: "Кингсмэн(все части)",
    img: require("./images/Кингсмэн.jpg"),
    place: "",
  },
  207: {
    name: "Прибытие",
    img: require("./images/Прибытие.jpg"),
    place: "",
  },
  208: {
    name: "Форсаж(все части)",
    img: require("./images/Форсаж.jpg"),
    place: "",
  },
  209: {
    name: "Дюнкерк",
    img: require("./images/Дюнкерк.jpg"),
    place: "",
  },
  210: {
    name: "Ванильное небо",
    img: require("./images/ВанильноеНебо.jpg"),
    place: "",
  },
  211: {
    name: "Миссия невыполнима(все части)",
    img: require("./images/МиссияНевыполнима.jpg"),
    place: "",
  },
  212: {
    name: "Джеймс Бонд(все части)",
    img: require("./images/ДжеймсБонд.jpg"),
    place: "",
  },
  213: {
    name: "Эффект бабочки",
    img: require("./images/ЭффектБабочки.jpg"),
    place: "",
  },
  214: {
    name: "Фокус",
    img: require("./images/Фокус.jpg"),
    place: "",
  },
  215: {
    name: "Ещё по одной",
    img: require("./images/ЕщёПоОдной.jpg"),
    place: "",
  },
  216: {
    name: "Пила(все части)",
    img: require("./images/Пила.jpg"),
    place: "",
  },
  217: {
    name: "Такси(все части)",
    img: require("./images/Такси.jpg"),
    place: "",
  },
  218: {
    name: "Барби",
    img: require("./images/Барби.jpg"),
    place: "",
  },
  219: {
    name: "Титаник",
    img: require("./images/Титаник.jpg"),
    place: "",
  },
  220: {
    name: "Счастливое число Слевина",
    img: require("./images/СчастливоеЧислоСлевина.jpg"),
    place: "",
  },
  221: {
    name: "Стражи Галактики(все части)",
    img: require("./images/СтражиГалактики.jpg"),
    place: "",
  },
  222: {
    name: "Люди Х(все части)",
    img: require("./images/ЛюдиХ.jpg"),
    place: "",
  },
  223: {
    name: "Первый мститель(все части)",
    img: require("./images/ПервыйМститель.jpg"),
    place: "",
  },
  224: {
    name: "Человек-паук(все части)",
    img: require("./images/ЧеловекПаукНовый.jpg"),
    place: "",
  },
  225: {
    name: "Доктор Стрэндж(все части)",
    img: require("./images/ДокторСтрэнж.jpg"),
    place: "",
  },
  226: {
    name: "Мстители",
    img: require("./images/Мстители.jpg"),
    place: "",
  },
  227: {
    name: "Мстители: Эра Альтрона",
    img: require("./images/МстителиЭраАльтрона.jpg"),
    place: "",
  },
  228: {
    name: "Хроники Нарнии(все части)",
    img: require("./images/ХроникиНарнии.jpg"),
    place: "",
  },
  229: {
    name: "Звёздный путь(все части)",
    img: require("./images/ЗвёздныйПуть.jpg"),
    place: "",
  },
  230: {
    name: "Индиана Джонс(все части)",
    img: require("./images/ИндианаДжонс.jpg"),
    place: "",
  },
  231: {
    name: "Планета обезьян(все части)",
    img: require("./images/ПланетаОбезьян.jpg"),
    place: "",
  },
  232: {
    name: "Трансформеры(все части)",
    img: require("./images/Трансформеры.jpg"),
    place: "",
  },
  233: {
    name: "Американский психопат",
    img: require("./images/АмериканскийПсихопат.jpg"),
    place: "",
  },
  234: {
    name: "Страх и ненависть в Лас-Вегасе",
    img: require("./images/СтрахИНенавистьВЛасВегасе.jpg"),
    place: "",
  },
  235: {
    name: "Изгой",
    img: require("./images/Изгой.jpg"),
    place: "",
  },
  236: {
    name: "Мальчишник в Вегасе(все части)",
    img: require("./images/МальчишникВВегасе.jpg"),
    place: "",
  },
  237: {
    name: "Идентефикация Борна(все части)",
    img: require("./images/Борн.jpg"),
    place: "",
  },
  238: {
    name: "Легенда",
    img: require("./images/Легенда.jpg"),
    place: "",
  },
  239: {
    name: "Звёздный десант(все части)",
    img: require("./images/ЗвёздныйДесант.jpg"),
    place: "",
  },
  240: {
    name: "Патруль времени",
    img: require("./images/ПатрульВремени.jpg"),
    place: "",
  },
  241: {
    name: "Крепкий Орешек(все части)",
    img: require("./images/КрепкийОрешек.jpg"),
    place: "",
  },
  242: {
    name: "Грязь",
    img: require("./images/Грязь.jpg"),
    place: "",
  },
  243: {
    name: "Игра на понижение",
    img: require("./images/ИграНаПонижение.jpg"),
    place: "",
  },
  244: {
    name: "Рейд(все части)",
    img: require("./images/Рейд.jpg"),
    place: "",
  },
  245: {
    name: "Области тьмы",
    img: require("./images/ОбластиТьмы.jpg"),
    place: "",
  },
  246: {
    name: "Американский пирог(все части)",
    img: require("./images/АмериканскийПирог.jpg"),
    place: "",
  },
  247: {
    name: "Форма голоса",
    img: require("./images/ФормаГолоса.jpg"),
    place: "",
  },
  248: {
    name: "Парфюмер",
    img: require("./images/Парфюмер.jpg"),
    place: "",
  },
  249: {
    name: "Черный лебедь",
    img: require("./images/ЧёрныйЛебедь.jpg"),
    place: "",
  },
  250: {
    name: "Человек из стали",
    img: require("./images/ЧеловекИзСтали.jpg"),
    place: "",
  },
  251: {
    name: "Обливион",
    img: require("./images/Обливион.jpg"),
    place: "",
  },
  252: {
    name: "Мадагаскар(все части)",
    img: require("./images/Мадагаскар.jpg"),
    place: "",
  },
  253: {
    name: "Зверополис",
    img: require("./images/Зверополис.jpg"),
    place: "",
  },
  254: {
    name: "Ледниковый период(все части)",
    img: require("./images/ЛедниковыйПериод.jpg"),
    place: "",
  },
  255: {
    name: "Кот в сапогах 2",
    img: require("./images/КотВСапогах2.jpg"),
    place: "",
  },
  256: {
    name: "Схватка",
    img: require("./images/Схватка.jpg"),
    place: "",
  },
  257: {
    name: "Мост в Терабитию",
    img: require("./images/МостВТерабитию.jpg"),
    place: "",
  },
  258: {
    name: "Лабиринт Фавна",
    img: require("./images/ЛабиринтФавна.jpg"),
    place: "",
  },
  259: {
    name: "Джуманджи(все части)",
    img: require("./images/Джуманджи.jpg"),
    place: "",
  },
  260: {
    name: "Король Англии",
    img: require("./images/КорольАнглии.jpg"),
    place: "",
  },
  261: {
    name: "Меч короля Артура",
    img: require("./images/МечКороляАртура.jpg"),
    place: "",
  },
  262: {
    name: "Чарли и шоколадная фабрика",
    img: require("./images/ЧарлиИШоколаднаяФабрика.jpg"),
    place: "",
  },
  263: {
    name: "Горбатая гора",
    img: require("./images/ГорбатаяГора.jpg"),
    place: "",
  },
  264: {
    name: "Назови меня своим именем",
    img: require("./images/НазовиМеняСвоимИменем.jpg"),
    place: "",
  },
  265: {
    name: "Куб(Все части)",
    img: require("./images/Куб.jpg"),
    place: "",
  },
  266: {
    name: "Пункт назначения(все части)",
    img: require("./images/ПунктНазначения.jpg"),
    place: "",
  },
  267: {
    name: "12 лет рабства",
    img: require("./images/12ЛетРабства.jpg"),
    place: "",
  },
  268: {
    name: "Семь психопатов",
    img: require("./images/СемьПсихопатов.jpg"),
    place: "",
  },
  269: {
    name: "Король говорит!",
    img: require("./images/КорольГоворит.jpg"),
    place: "",
  },
  270: {
    name: "Вонка",
    img: require("./images/Вонка.jpg"),
    place: "",
  },
  271: {
    name: "Авиатор",
    img: require("./images/Авиатор.jpg"),
    place: "",
  },
  272: {
    name: "Тихое место(все части)",
    img: require("./images/ТихоеМесто.jpg"),
    place: "",
  },
  273: {
    name: "Птичий короб",
    img: require("./images/ПтичийКороб.jpg"),
    place: "",
  },
  274: {
    name: "Молчание",
    img: require("./images/Молчание.jpg"),
    place: "",
  },
  275: {
    name: "Агенты А.Н.К.Л.",
    img: require("./images/АгентыАНКЛ.jpg"),
    place: "",
  },
  276: {
    name: "Война миров Z ",
    img: require("./images/ВойнаМировZ.jpg"),
    place: "",
  },
  277: {
    name: "Зомби по имени Шон",
    img: require("./images/ЗомбиПоИмениШон.jpg"),
    place: "",
  },
  278: {
    name: "Тепло наших тел",
    img: require("./images/ТеплоНашихТел.jpg"),
    place: "",
  },
  279: {
    name: "Добро пожаловать в Zомбилэнд",
    img: require("./images/ДоброПожаловатьВЗомбиЛенд.jpg"),
    place: "",
  },
  280: {
    name: "Парк Юрского периода",
    img: require("./images/ПаркЮрскогоПериода.jpg"),
    place: "",
  },
  281: {
    name: "Оно(все части)",
    img: require("./images/Оно.jpg"),
    place: "",
  },
  282: {
    name: "Сплит(все части)",
    img: require("./images/Сплит.jpg"),
    place: "",
  },
  283: {
    name: "Зодиак",
    img: require("./images/Зодиак.jpg"),
    place: "",
  },
  284: {
    name: "Враг",
    img: require("./images/Враг.jpg"),
    place: "",
  },
  285: {
    name: "2001 год: Космическая одиссея",
    img: require("./images/2001КосмическаяОдиссея.jpg"),
    place: "",
  },
  286: {
    name: "Не говори никому",
    img: require("./images/НеГовориНикому.jpg"),
    place: "",
  },
  287: {
    name: "Донни Дарко",
    img: require("./images/ДонниДарко.jpg"),
    place: "",
  },
  288: {
    name: "Константин: Повелитель тьмы",
    img: require("./images/КонстантинПовелительТьмы.jpg"),
    place: "",
  },
  289: {
    name: "Человек паук(все части)",
    img: require("./images/ЧеловекПаукСтарый.jpg"),
    place: "",
  },
  290: {
    name: "Мгла",
    img: require("./images/Мгла.jpg"),
    place: "",
  },
  291: {
    name: "На грани",
    img: require("./images/НаГрани.jpg"),
    place: "",
  },
  292: {
    name: "Одаренная",
    img: require("./images/Одарённая.jpg"),
    place: "",
  },
  293: {
    name: "Книга Илая ",
    img: require("./images/КнигаИлая.jpg"),
    place: "",
  },
  294: {
    name: "Сиротский Бруклин",
    img: require("./images/СиротскийБруклин.jpg"),
    place: "",
  },
  295: {
    name: "13-ый район",
    img: require("./images/13йРайон.jpg"),
    place: "",
  },
  296: {
    name: "13 грехов ",
    img: require("./images/13Грехов.jpg"),
    place: "",
  },
  297: {
    name: "Из машины",
    img: require("./images/ИзМашины.jpg"),
    place: "",
  },
  298: {
    name: "Варкрафт",
    img: require("./images/Варкрафт.jpg"),
    place: "",
  },
  299: {
    name: "Стрингер",
    img: require("./images/Стрингер.jpg"),
    place: "",
  },
  300: {
    name: "Афера по-американски ",
    img: require("./images/АфераПоАмерикански.jpg"),
    place: "",
  },
};
