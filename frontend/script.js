function GetHash (done) {
    $.get('/api/hash', function (data) {
        done(data)
    })
}