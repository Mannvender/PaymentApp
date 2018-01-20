$(function () {

    let hashInput = $('#hash')

    GetHash(function (obj) {
        hashInput.val("" + obj.hash)

    })

})