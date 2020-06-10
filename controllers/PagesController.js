const viewPath = ('pages');

exports.home = (req, res) => {
    console.log(req.path);
    res.render(`${viewPath}/home`, {
        pageTitle: 'Welcome Home'
    });
};

exports.about = (req, res) => {
    res.render(`${viewPath}/about`, {
        pageTitle: 'About Me'
    });
};