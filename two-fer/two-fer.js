export const twoFer = (name) => {
    if (name === undefined || name === null) {
        return "One for you, one for me."
    }

    else {
        return `One for ${name}, one for me.`
    }
}