# Операционные системы: первая линия атласа

Добавлены 15 событий и 9 связей. Все записи — draft. Это начальная выборка истории ОС XX века, а не полный перечень систем и не рейтинг их важности.

## Зачем отдельная линия

ОС связывают аппаратуру, языки, приложения и сети: распределяют ресурсы, задают способы взаимодействия и формируют программные платформы. Unix — центральная ветвь этой выборки, рядом с которой показаны другие подходы.

## Хронология и документы

| Дата | Событие / ID | Основание |
| --- | --- | --- |
| 1961-11 | CTSS: демонстрация разделения времени · `ctss-demo` | [Фернандо Корбато · Oral History · CHM, 2006](https://archive.computerhistory.org/resources/text/Oral_History/Corbato_Fernando/Corbato_Fernando_1.oral_history.2006.102658041.pdf) |
| 1962-12 | Atlas: запуск с Supervisor · `atlas-supervisor` | [University of Manchester · Atlas и Tom Kilburn](https://curation.cs.manchester.ac.uk/computer50/www.computer50.org/mark1/kilburn.html) |
| 1965 | Multics: совместная разработка · `multics-project` | [Корбато, Солтцер, Клинген · Multics: The First Seven Years](https://multicians.org/f7y.html) |
| 1966 | OS/360: управление заданиями · `os360-platform` | [IBM · System/360 Operating System: Introduction · ноябрь 1966](https://bitsavers.computerhistory.org/pdf/ibm/360/os/R01-08/C28-6534-1_OS_Intro_Nov66.pdf) |
| 1969 | Unix на PDP-7 · `unix-origin` | [Деннис Ритчи · The Evolution of the Unix Time-sharing System](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/hist.html) |
| 1973 | Ядро Unix переписывают на C · `unix-c` | [Деннис Ритчи · The Evolution of the Unix Time-sharing System](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/hist.html) |
| 1974 | Прототип CP/M · `cpm-prototype` | [CHM · Early Digital Research CP/M Source Code](https://computerhistory.org/blog/early-digital-research-cpm-source-code/) |
| 1977 | Первая сборка Berkeley Software Distribution · `berkeley-first-distribution` | [Маршалл Кирк Маккьюсик · Twenty Years of Berkeley Unix](https://www.oreilly.com/openbook/opensources/book/kirkmck.html_original) |
| 1981 | PC DOS для IBM PC · `pc-dos` | [CHM · Microsoft MS-DOS Early Source Code](https://computerhistory.org/blog/microsoft-ms-dos-early-source-code/); [Microsoft · Continuing the Story of Early DOS Development · 2026](https://opensource.microsoft.com/blog/2026/04/28/continuing-the-story-of-early-dos-development/) |
| 1983-08 | 4.2BSD: Unix с сетевым стеком · `bsd42` | [Маршалл Кирк Маккьюсик · Twenty Years of Berkeley Unix](https://www.oreilly.com/openbook/opensources/book/kirkmck.html_original) |
| 1983-09-27 | Объявлен проект GNU · `gnu-announcement` | [Ричард Столлман · Initial GNU Announcement · 27 сентября 1983](https://www.gnu.org/gnu/initial-announcement.html) |
| 1984-01-24 | Macintosh: системная среда с GUI · `macintosh-system` | [Apple · Первый пресс-релиз Macintosh · 24 января 1984](https://www-leland.stanford.edu/dept/SUL/sites/mac/primary/docs/pr1.html) |
| 1991 | Linux 0.01: раннее ядро · `linux-001` | [Линус Торвальдс · Notes for Linux Release 0.01](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.01); [Линус Торвальдс · Release Notes for Linux v0.12](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12) |
| 1993-07-27 | Windows NT 3.1 · `windows-nt31` | [Microsoft · История Дейва Катлера и Windows NT](https://news.microsoft.com/features/the-engineers-engineer-computer-industry-luminaries-salute-dave-cutlers-five-decade-long-quest-for-quality/) |
| 1993-11-01 | FreeBSD 1.0 · `freebsd-10` | [FreeBSD · Объявление версии 1.0 · 1 ноября 1993](https://www.freebsd.org/releases/1.0/announce/); [FreeBSD Handbook · История проекта](https://docs.freebsd.org/en/books/handbook/introduction/) |

## Как читать связи

- ctss-demo → multics-project: Опыт CTSS становится отправной точкой более масштабной разработки Multics.
- multics-project → unix-origin: Разработчики Unix участвовали в работе с Multics; Ритчи описывает влияние этого опыта после выхода Bell Labs из проекта. Это преемственность опыта и отдельных идей, не копирование всей системы.
- unix-origin → unix-c: Ранняя Unix развивается до реализации ядра на C в 1973.
- unix-c → berkeley-first-distribution: BSD начинается как набор дополнений для Unix, пришедшего в Berkeley. Связь показывает преемственность системы, а не утверждает, что одна смена языка сама вызвала создание BSD.
- berkeley-first-distribution → bsd42: Серия Berkeley Software Distribution развивается до 4.2BSD; между карточками пропущены несколько промежуточных выпусков.
- tcp → bsd42: 4.2BSD включает реализацию TCP/IP и средства сетевого программирования. Это внедрение семейства протоколов в ОС, не повторное изобретение протокола.
- unix-origin → gnu-announcement: GNU объявлен Unix-совместимой системой, которую предлагается разработать и распространять на свободных условиях. Совместимость не означает происхождение исходного кода от Unix.
- gnu-announcement → linux-001: При сборке и использовании раннего Linux применяются GNU-инструменты GCC и Bash. Связь обозначает совместное использование компонентов, а не разработку Linux внутри проекта GNU.
- bsd42 → freebsd-10: FreeBSD продолжает ветвь BSD через Net/2 и 386BSD. Промежуточные этапы пока пропущены на карте.

## Принятые ограничения

- CTSS не называется первой операционной системой вообще. Пакетные мониторы 1950-х пока не внесены.
- Atlas декабря 1962 имел ограниченный Supervisor; запуск не равен завершению всех функций.
- Дата OS/360 — документированный этап по руководству 1966, не анонс аппаратуры 1964.
- Для первой BSD использована датировка сборки 1977 из рассказа Маккьюсика. Дату более поздней ленты 1978 нельзя автоматически подставить вместо сборки.
- Unix → GNU означает цель совместимости; GNU → Linux означает использование инструментов. Это разные виды преемственности.
- Linux 0.01 не называется полной ОС или изначально GPL-лицензированным ядром. Условия распространения менялись, что отражено в заметках 0.12.
- Ветка NT показана отдельно от DOS; прямой стрелки наследования ядра между ними нет.
- Macintosh 1984 не назван первым GUI и не смешан с позднейшим Mac OS X. Прямая связь с PARC будет добавлена после разбора свидетельств участников.
- Дата выхода FreeBSD взята из собственного объявления 1 ноября 1993; происхождение через 386BSD и Net/2 указано явно.
- Люди размечены по проверенным ролям, а не исчерпывающим списком команды. Компании в карточке могут быть разработчиком, заказчиком или производителем оборудования — роль поясняется текстом.

## Следующие ветви для исследования

Пакетные мониторы GM-NAA I/O и IBSYS; виртуальные машины CP/CMS и VM/370; VMS и переход команды Катлера; System V и стандартизация POSIX; MINIX как учебная среда; Mach и NeXTSTEP; Plan 9; OS/2, AmigaOS и Windows 95; советские ОС и системы реального времени. Их следует вводить отдельными проверяемыми сюжетами, без механического соединения любых соседних дат.

## Хранение и проверка

Записи используют существующий формат niti/v1 в Markdown с YAML. Новая тема — os, «Операционные системы». Данные остаются статическими; серверная база не добавлена. Источники — статьи участников, архивные документы и институциональные ретроспективы. Автоматические проверки подтверждают структуру и ссылки, но не заменяют независимую историческую рецензию.
