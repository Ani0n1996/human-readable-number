module.exports = function toReadable(number) {
    let numbers = 0;
    let figures = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        19: 'nineteen',
        18: 'eighteen',
    };
    if (20 <= number) {
        numbers = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        };
        const num = String(number).split('');
        if (num.length === 2)
            if (number % 10 == 0) {
                return numbers[number];
            } else {
                if (num[0] == 2) {
                    return 'twenty' + ' ' + figures[num[1]];
                }
                if (num[0] == 3) {
                    return 'thirty' + ' ' + figures[num[1]];
                }
                if (num[0] == 4) {
                    return 'forty' + ' ' + figures[num[1]];
                }
                if (num[0] == 5) {
                    return 'fifty' + ' ' + figures[num[1]];
                }
                if (num[0] == 6) {
                    return 'sixty' + ' ' + figures[num[1]];
                }
                if (num[0] == 7) {
                    return 'seventy' + ' ' + figures[num[1]];
                }
                if (num[0] == 8) {
                    return 'eighty' + ' ' + figures[num[1]];
                }
                if (num[0] == 9) {
                    return 'ninety' + ' ' + figures[num[1]];
                };
            };
        if (num.length === 3)
            if (number % 100 != 0) {
                if (number % 10 === 0)
                    if (num[1] != 2) {
                        if (num[1] != 3) {
                            if (num[1] == 4) {
                                return figures[parseInt(num[0])] + ' hundred ' + numbers[40];
                            }
                            if (num[1] == 5) {
                                return figures[parseInt(num[0])] + ' hundred ' + numbers[50];
                            }
                            if (num[1] == 6) {
                                return figures[parseInt(num[0])] + ' hundred ' + numbers[60];
                            }
                            if (num[1] == 7) {
                                return figures[parseInt(num[0])] + ' hundred ' + numbers[70];
                            }
                            if (num[1] == 8) {
                                return figures[parseInt(num[0])] + ' hundred ' + numbers[80];
                            }
                            if (num[1] == 9) {
                                return figures[parseInt(num[0])] + ' hundred ' + numbers[90];
                            }
                        } else {
                            return figures[parseInt(num[0])] + ' hundred ' + numbers[30];
                        }
                    } else {
                        return figures[parseInt(num[0])] + ' hundred ' + numbers[20];
                    };
                if (num[1] == 0) {
                    return figures[parseInt(num[0])] + ' hundred ' + figures[num[2]];
                };
                if (num[1] == 1) {
                    if (num[2] == 0) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[10];
                    }
                    if (num[2] == 1) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[11];
                    }
                    if (num[2] == 2) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[12];
                    }
                    if (num[2] == 3) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[13];
                    }
                    if (num[2] == 4) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[14];
                    }
                    if (num[2] == 5) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[15];
                    }
                    if (num[2] == 6) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[16];
                    }
                    if (num[2] == 7) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[17];
                    }
                    if (num[2] == 8) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[18];
                    }
                    if (num[2] == 9) {
                        return figures[parseInt(num[0])] + ' hundred ' + figures[19];
                    };
                };
                if (num[1] == 2) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[20] + ' ' + figures[num[2]];
                }
                if (num[1] == 3) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[30] + ' ' + figures[num[2]];
                }
                if (num[1] == 4) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[40] + ' ' + figures[num[2]];
                }
                if (num[1] == 5) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[50] + ' ' + figures[num[2]];
                }
                if (num[1] == 6) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[60] + ' ' + figures[num[2]];
                }
                if (num[1] == 7) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[70] + ' ' + figures[num[2]];
                }
                if (num[1] == 8) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[80] + ' ' + figures[num[2]];
                }
                if (num[1] == 9) {
                    return figures[parseInt(num[0])] + ' hundred ' + numbers[90] + ' ' + figures[num[2]];
                }
            } else {
                return figures[parseInt(num[0])] + ' hundred';
            }
    } else {
        return figures[number];
    };
};
