// Spades: s    00
// Clubs: c     01
// Hearts: h    10
// Diamonds: d  11

// 2-10: 2-10
// Jack: j
// Queen: q
// King: k
// Ace: a

const regex = /([schd])([2-9]|10|[jqka])/;

export function card_to_bit(card: string) {
    const match = card.match(regex)
    let output: number;
    if (match != null) {
        // turn suit into two bits
        if (match[1] == "s") {
            output = 0b00
        } else if (match[1] == "c") {
            output = 0b01
        } else if (match[1] == "h") {
            output = 0b10
        } else if (match[1] == "d") {
            output = 0b11
        }
    }

}

card_to_bit("c10")