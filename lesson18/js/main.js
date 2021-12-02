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

class Time{
    get date() {
        const date = new Date();
        return date.getDate();
    }

    get day() {
        const day = new Date();
        return day.getUTCDate();
    }

    get month() {
        const today = new Date();
        return today.getMonth();
    }

    get monthNames() {
        return [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    }

    static monthName() {
        const monthName = this.monthNames[11];

        if(!monthName){
            return monthName.toLocaleString('en-us', { month: 'long' })
        } else {
            return monthName;
        };

    }



    renderTime(){
        return `Current date: ${this.date},${this.day}
        Month: ${this.month}, ${this.monthName}`
    }
}

let test = new Time();
console.log(test.renderTime());
console.log(test.monthName);

class Astrological extends Time{

    static astrologicalSign(super.date, super.month){
        const sign = [29, 'September'];
        if(!sign || sign !== []){
            return `Sagittarlus`;
        } else {
            return `Libra`;
        }
    }
}

class Human extends Astrological{
    astrologicalSign(){

    }
}