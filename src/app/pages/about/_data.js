module.exports = {
    sections: [
        {
            name: 'newbie',
            title: 'Навигация новичка',
            icon: require('./assets/icons/newbie.svg'),
        },
        {
            name: 'craft',
            title: 'Создание предметов',
            icon: require('./assets/icons/craft.svg'),
        },
        {
            name: 'economics',
            title: 'Экономика и торговля',
            icon: require('./assets/icons/pickpocket.svg'),
        },
        {
            name: 'fractions',
            title: 'Фракции и гильдии',
            icon: require('./assets/icons/speech.svg'),
        },
        {
            name: 'war',
            title: 'Гражданская война',
            icon: require('./assets/icons/flags.svg'),
        },
        {
            name: 'skills',
            title: 'Система боя и навыков ',
            icon: require('./assets/icons/sword.svg'),
        },
        {
            name: 'magic',
            title: 'Магия и её изучение',
            icon: require('./assets/icons/mage.svg'),
        }
    ],


    newbieItems: [
        {
            title: 'Шахты и фермы',
            icon1: require('./assets/icons/farm.svg'),
            icon2: require('./assets/icons/mine.svg'),
            text: [
                'Добывай свои первые септимы:',
                'маши киркой, собирай урожай.',
                'Перед тобой откроется множество возможностей!'
            ].join('\n'),
        },
        {
            title: 'Крафт и торговля',
            icon1: require('./assets/icons/craft.svg'),
            icon2: require('./assets/icons/pickpocket.svg'),
            text: [
                'Добывай свои первые септимы:',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'Перед тобой откроется множество возможностей!'
            ].join('\n'),
        },
        {
            title: 'Магия и снаряжение',
            icon1: require('./assets/icons/mage.svg'),
            icon2: require('./assets/icons/sword.svg'),
            text: [
                'Добывай свои первые септимы:',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'Перед тобой откроется множество возможностей!'
            ].join('\n'),
        },
        {
            title: 'Гильдии и фракции',
            icon1: require('./assets/icons/guild-dark.svg'),
            icon2: require('./assets/icons/guild-thief.svg'),
            text: [
                'Добывай свои первые септимы:',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'Перед тобой откроется множество возможностей!'
            ].join('\n'),
        },
        {
            title: 'ПВЕ и ПВП контент',
            icon1: require('./assets/icons/bow.svg'),
            icon2: require('./assets/icons/flags.svg'),
            text: [
                'Добывай свои первые септимы:',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'Перед тобой откроется множество возможностей!'
            ].join('\n'),
        },
        {
            title: 'Общение и социум',
            icon1: require('./assets/icons/speech.svg'),
            icon2: require('./assets/icons/family.svg'),
            text: [
                'Добывай свои первые септимы:',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'маши киркой, собирай урожай.',
                'Перед тобой откроется множество возможностей!'
            ].join('\n'),
        }
    ],

    craftItems: [
        {
            title: 'Алхимия',
            icon: require('./assets/icons/alchemy.svg'),
            tabId: 'craft-1',
            header: 'Настало время раскрыть истинный потенциал алхимии',
            text: 'Ужасающие яды и чудотворные зелья требуют качественных ингридиентов. Наиболее распространённые алхимические реагенты растеряли свои свойства, а действительно ценные стали попадаться крайне редко. Опасные приключения ждут тебя в самых потаённых уголках провинции в поисках особо редких ингридиентов для зельеварения, а некоторые из них будет достать практически невозможно.',
            icons: [
                require('./assets/craft-img/alchemy-decor-1.png'),
                require('./assets/craft-img/alchemy-decor-2.png'),
                require('./assets/craft-img/alchemy-decor-3.png')
            ]
        },
        {
            title: 'Кузнечное дело',
            icon: require('./assets/icons/smith.svg'),
            tabId: 'craft-2',
            header: 'Настало время раскрыть истинный потенциал алхимии',
            text: 'Ужасающие яды и чудотворные зелья требуют качественных ингридиентов. Наиболее распространённые алхимические реагенты растеряли свои свойства, а действительно ценные стали попадаться крайне редко. Опасные приключения ждут тебя в самых потаённых уголках провинции в поисках особо редких ингридиентов для зельеварения, а некоторые из них будет достать практически невозможно.',
            icons: [
                require('./assets/craft-img/smithing-decor-1.png'),
                require('./assets/craft-img/smithing-decor-2.png'),
                require('./assets/craft-img/smithing-decor-3.png')
            ]
        },
        {
            title: 'Зачарование',
            icon: require('./assets/icons/enchanting.svg'),
            tabId: 'craft-3',
            header: 'Настало время раскрыть истинный потенциал алхимии',
            text: 'Ужасающие яды и чудотворные зелья требуют качественных ингридиентов. Наиболее распространённые алхимические реагенты растеряли свои свойства, а действительно ценные стали попадаться крайне редко. Опасные приключения ждут тебя в самых потаённых уголках провинции в поисках особо редких ингридиентов для зельеварения, а некоторые из них будет достать практически невозможно.',
            icons: [
                require('./assets/craft-img/enchanting-decor-1.png'),
                require('./assets/craft-img/enchanting-decor-2.png'),
                require('./assets/craft-img/enchanting-decor-3.png')
            ]
        },
    ],

    neutralGuilds: [
        {
            flag: require('./assets/fractions-img/guildKILLER.png')
        },
        {
            flag: require('./assets/fractions-img/guildTHIEF.png')
        },
        {
            flag: require('./assets/fractions-img/guildMAGE.png')
        },
        {
            flag: require('./assets/fractions-img/guildTOWN.png')
        },
        {
            flag: require('./assets/fractions-img/guildORC.png')
        },
        {
            flag: require('./assets/fractions-img/guildSEDOBORODIE.png')
        }
    ],

    warGuilds: [
        {
            flag: require('./assets/fractions-img/guildWEREWOLF.png')
        },
        {
            flag: require('./assets/fractions-img/swords.png')
        },
        {
            flag: require('./assets/fractions-img/guildVAMPIRES.png')
        },
        {
            flag: require('./assets/fractions-img/guildEMPER.png')
        },
        {
            flag: require('./assets/fractions-img/swords.png')
        },
        {
            flag: require('./assets/fractions-img/guildBB.png')
        },
        {
            flag: require('./assets/fractions-img/guildTALMOR.png')
        },
        {
            flag: require('./assets/fractions-img/swords.png')
        },
        {
            flag: require('./assets/fractions-img/guildBLADES.png')
        }
    ]
};
