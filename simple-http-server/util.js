var getCountryCodeLocal = function(countryName)
{
    var code;
    switch (countryName)
    {
        case "Austria": code = 43; break;
        case 'Aurgentia': code = 54; break;
        case 'Algeria': code = 213; break;
        case 'Brunei': code = 673; break;
        case 'China': code = 86; break;
        case 'Egypt': code = 20; break;
        default: code = 0; 
    }
    return code;
}

module.exports.getCountryCode = getCountryCodeLocal;