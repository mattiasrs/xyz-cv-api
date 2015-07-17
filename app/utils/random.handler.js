'use strict';
var q = require('q');
var faker = require('faker');

exports.getSkillAbbreviations = function(requestedNumber) {
    var list = getListOfAbbreviations();

    if (requestedNumber >= list.length) {
        return list;
    }

    if (requestedNumber <= 0) {
        return [];
    }

    var max = list.length - 1;
    var result = [];

    //generate the unique list
    for (var i = 0; i < requestedNumber; i++) {
        var index = randomInt(max);
        result.push(list[index]);
        list[index] = list[max];
        max--;
    }

    return result;
};

//return true with probability p and false with probability 1-p
exports.bernoulli = function(p) {
    if (!Math.floor(Math.random() * (1 / p))) {
        return true;
    }

    return false;
};

exports.generateSex = function() {
    if (exports.bernoulli(0.5)) {
        return 'male';
    }

    return 'female';
};

exports.getCustomHeaders = function() {
    var list = [];
    var object1 = {
        title: faker.address.state(),
        body: 'In-state possessions: ' + faker.finance.amount() + ' ' + faker.finance.currencyName()
    };
    var object2 = {
        title: faker.address.county(),
        body: 'In-county possessions: ' + faker.finance.amount() + ' ' + faker.finance.currencyName()
    };

    list.push(object1);
    list.push(object2);

    return list;
};

exports.getPersonalInterests = function() {
    var list = [];
    if (exports.bernoulli(0.9)) {
        list.push(faker.hacker.ingverb());

        if (exports.bernoulli(0.6)) {
            list.push(faker.company.bsNoun());

            if (exports.bernoulli(0.8)) {
                list.push(faker.company.bs());
            }
        }
    }

    return list;
};

exports.getShirtSize = function() {
    var sizes = getShirtSizes();
    return sizes[randomInt(sizes.length - 1)];
};

exports.getSkillLevel = function() {
    return randomInt(4) + 1;
};

function randomInt(high) {
    return Math.floor(Math.random() * (high + 1));
}

function getShirtSizes() {
    return [
        'XXS',
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        '3XL',
        '4XL'
    ];
}

function getListOfAbbreviations() {
    return [
        'TCP',
        'HTTP',
        'SDD',
        'RAM',
        'GB',
        'CSS',
        'SSL',
        'AGP',
        'SQL',
        'FTP',
        'PCI',
        'AI',
        'ADP',
        'RSS',
        'XML',
        'EXE',
        'COM',
        'HDD',
        'THX',
        'SMTP',
        'SMS',
        'USB',
        'PNG',
        'SAS',
        'IB',
        'SCSI',
        'JSON',
        'XSS',
        'JBOD',
        'Java',
        'C',
        'C++',
        'Haskell',
        'Javascript',
        'ActionScript',
        'ALGOL 58',
        'AMOS',
        'AppleScript',
        'Argus',
        'B',
        'Babbage',
        'BASIC',
        'BeanShell',
        'Bigwig',
        'Blue',
        'Boomerang',
        'BPEL',
        'C',
        'C++',
        'C#',
        'Caml',
        'Cayenne',
        'Cel',
        'CHAIN',
        'Chapel',
        'Charity',
        'Charm',
        'CHILL',
        'Chuck',
        'Chomski',
        'CICS',
        'CL',
        'Claire',
        'CLIST',
        'CLU',
        'CoffeeScript',
        'COMAL',
        'CPL',
        'COMIT',
        'COMPASS',
        'Coral 66',
        'Corn',
        'COWSEL',
        'Curry',
        'DASL',
        'DataFlex',
        'Dart',
        'dBase',
        'Deesel',
        'Delphi',
        'DIBOL',
        'Dog',
        'DYNAMO',
        'Ease',
        'Eiffel',
        'Elixir',
        'Elm',
        'Emacs Lisp',
        'Emerald',
        'EPL',
        'Erlang',
        'ESPOL',
        'Esterel',
        'Etoys',
        'Euclid',
        'Euler',
        'Euphoria',
        'EXEC 2',
        'Falcon',
        'Fancy',
        'Fantom',
        'Fjölnir',
        'FAUST',
        'Flex',
        'FOCUS',
        'FOIL',
        'Forth',
        'Fortan',
        'FoxBase',
        'FP',
        'G',
        'GAMS',
        'GAP',
        'G-Code',
        'Genie',
        'GDL',
        'GEORGE',
        'GNU E',
        'Go',
        'GOAL',
        'Godiva',
        'GOM',
        'Gosu',
        'GPSS',
        'GraphTalk',
        'GRASS',
        'Groovy',
        'Harbour',
        'HAL/S',
        'Haxe',
        'Hugo',
        'Hume',
        'HyperTalk',
        'IBM Basic Assemble Language',
        'ICI',
        'Icon',
        'IDL',
        'Idris',
        'IMP',
        'Inform',
        'loke',
        'IPL',
        'ISPF',
        'JADE',
        'Jako',
        'JAL',
        'Janus',
        'JASS',
        'JCL',
        'JEAN',
        'JOSS',
        'Joule',
        'JOVIAL',
        'Joy',
        'Julia',
        'Jython',
        'K',
        'Karel',
        'KEE',
        'KIF',
        'Kojo',
        'Kotlin',
        'KRL',
        'KRYPTON',
        'Ladder',
        'LANSA',
        'Lagoona',
        'Lasso',
        'LaTeX',
        'Lava',
        'Leda',
        'LegoScript',
        'LIL',
        'Limbo',
        'Limnor',
        'Lingo',
        'LINC',
        'LIS',
        'lithe',
        'Logo',
        'Logtalk',
        'LPC',
        'LSL',
        'Lucid',
        'Lustre',
        'M4',
        'MAD',
        'Magik',
        'Magma',
        'Maple',
        'Mary',
        'MATLAB',
        'Maxima',
        'MDL',
        'Mercury',
        'Mesa',
        'Metacard',
        'Microcode',
        'MIIS',
        'MillScript',
        'Miranda',
        'MIVA Script',
        'ML',
        'Moby',
        'Modelica',
        'Mohol',
        'Mortran',
        'MSL',
        'MPL',
        'NASM',
        'NATURAL',
        'Neko',
        'NESL',
        'Nial',
        'NGL',
        'Nice',
        'Nim',
        'NSIS',
        'NXT-G',
        'o:XML',
        'Oak',
        'OBJ2',
        'Object Lisp',
        'Objective-C',
        'OCaml',
        'occam',
        'Octave',
        'OpenCL',
        'OPL',
        'Orc',
        'Oriel',
        'Oxygene',
        'OptimJ',
        'Pascal',
        'PCF',
        'PEARL',
        'Perl',
        'Pico',
        'Picolisp',
        'Pict',
        'PIKT',
        'PILOT',
        'Pizza',
        'POP-11',
        'Powerhouse',
        'PowerShell',
        'PPL',
        'PROIV',
        'PROMAL',
        'Promela',
        'Python',
        'R',
        'RAPID',
        'Ratfor',
        'REBOL',
        'Red',
        'Reia',
        'rex',
        'Rlab',
        'ROOP',
        'RPG',
        'Ruby',
        'Rust',
        'S',
        'S-Lang',
        'SAIL',
        'SAS',
        'Sawzall',
        'Script.NET',
        'Sed',
        'Self',
        'SETL',
        'Snowball',
        'SISAL',
        'Speedcode',
        'SR',
        'Starlogo',
        'Strand',
        'Subtext',
        'SYMPL',
        'TACL',
        'TADS',
        'Tea',
        'TeX',
        'TIE',
        'Timber',
        'Tom',
        'TPU',
        'TTM',
        'Turbo C++',
        'Ubercode',
        'Umple',
        'Unicon',
        'UNITY',
        'Vala',
        'VBScript',
        'Visual Basic',
        'Visual Basic .NET',
        'Vvvv',
        'WATFIV',
        'Winbatch',
        'XQuery',
        'Yorick',
        'YQL',
        'ZOPL',
        'Zeno'
    ];
}

