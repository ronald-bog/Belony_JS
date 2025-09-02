function testMid(req, res, next) {
    console.log('Este middleware es de prueba en rutas');
    next();
}

module.exports = testMid;