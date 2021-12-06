const astrologicalSigns = {
    Aries: {
        startDate: {
            month: `March`,
            day: 21
        },
        endDate: {
            month: `April`,
            day: 20
        }
    },
    Taurus: {
        startDate: {
            month: `April`,
            day: 21
        },
        endDate: {
            month: `May`,
            day: 21
        }
    },
    Gemini: {
        startDate: {
            month: `May`,
            day: 22
        },
        endDate: {
            month: `June`,
            day: 21
        }
    },
    Cancer: {
        startDate: {
            month: `June`,
            day: 22
        },
        endDate: {
            month: `July`,
            day: 22
        }
    },
    Leo: {
        startDate: {
            month: `July`,
            day: 23
        },
        endDate: {
            month: `August`,
            day: 21
        }
    },
    Virgo: {
        startDate: {
            month: `August`,
            day: 22
        },
        endDate: {
            month: `September`,
            day: 23
        }
    },
    Libra: {
        startDate: {
            month: `September`,
            day: 24
        },
        endDate: {
            month: `October`,
            day: 23
        }
    },
    Scorpio: {
        startDate: {
            month: `October`,
            day: 24
        },
        endDate: {
            month: `November`,
            day: 22
        }
    },
    Sagittarius: {
        startDate: {
            month: `November`,
            day: 23
        },
        endDate: {
            month: `December`,
            day: 22
        }
    },
    Capricorn: {
        startDate: {
            month: `December`,
            day: 23
        },
        endDate: {
            month: `January`,
            day: 20
        }
    },
    Aquarius: {
        startDate: {
            month: `January`,
            day: 21
        },
        endDate: {
            month: `February`,
            day: 19
        }
    },
    Pisces: {
        startDate: {
            month: `February`,
            day: 20
        },
        endDate: {
            month: `March`,
            day: 20
        }
    }
}

const users = [
    {
        name: 'Larry Page',
        dayOfBirth: 26,
        monthOfBirth: `March`
    },
    {
        name: 'Bill Gates',
        dayOfBirth: 28,
        monthOfBirth: `October`
    },
    {
        name: 'Mark Zuckerberg',
        dayOfBirth: 14,
        monthOfBirth: `May`
    }
]

const toLowerCase = (str) => typeof srt === 'string' ? str.toLowerCase() : str;

class Time {
    static get date() {
        return new Date()
    }

    static get day() {
        return Time.date.getUTCDate();
    }

    static get month() {
        return Time.date.getMonth();
    }

    static get monthNames() {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    static monthName(number) {
        return typeof number === 'number' && number > 0 && number < 12 ? Time.monthNames[number - 1] : Time.date.toLocaleString('en-us', {month: 'long'});

    }
}

const getAstrological = (day, month) => Object.entries(astrologicalSigns).reduce((acc, [key, item]) => {
    if ((toLowerCase(item?.startDate?.month) === toLowerCase(month) && Number(day) >= Number(item?.startDate?.day)) ||
        (toLowerCase(item?.endDate?.month) === toLowerCase(month) && Number(day) <= Number(item?.endDate?.day))) {
        acc = key
    }
    return acc
}, '')

class Astrological extends Time {
    constructor() {
        super();
    }

    static astrologicalSign(day, month) {

        if (typeof day === 'number' && typeof month === 'string') {

            return getAstrological(day, month)
        }

        return getAstrological(Astrological.day, Astrological.monthName())
    }
}

class Human extends Astrological {
    constructor(props) {
        super();
        this.name = props?.name || '';
        this.dayOfBirth = props?.dayOfBirth || '';
        this.monthOfBirth = props?.monthOfBirth || '';
    }

    astrologicalSign() {
        return `${this.name} is ${Human.astrologicalSign(this.dayOfBirth, this.monthOfBirth)}`
    }
}

let LarryPage = new Human(users[0]);
let BillGates = new Human(users[1]);
let MarkZuckerberg = new Human(users[2]);

console.log(LarryPage.astrologicalSign());
console.log(BillGates.astrologicalSign());
console.log(MarkZuckerberg.astrologicalSign());
