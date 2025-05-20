module.exports = {

    soma(a, b) {
        const res = a+b
        console.log(a, "+", b, "da", res)
        return res.toString()
    },

    mult(a, b) {
        const res = a*b
        console.log(a, "*", b, "da", res)
        return res.toString()
    },

    div(a, b) {
        const res = a/b
        console.log(a, "/", b, "da", res)
        return res.toString()
    },

    sub(a, b) {
        const res = a-b
        console.log(a, "-", b, "da", res)
        return res.toString()
    }

}