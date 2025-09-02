function info(req, res, next) {
    console.log(`Metodo: ${req.method} - Endpoint: ${req.url}`);
    next();
}

module.exports = info;