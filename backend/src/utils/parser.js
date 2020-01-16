module.exports = function parser(techs){
    return techs.split(',').map(tech => tech.trim());   
}