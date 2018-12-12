// CSV file style
//
// firstName,lastName,county,city,role,sales
// Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
// Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
// Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
// Allen,Price,San Mateo,Burlingame,Sales Person,2500000
// Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000

module.exports = {
    generate: function (obj) {
        var result = '';
        var keys = getKeys(obj);
      
        result += keys.join(',');
        result += '\r\n';
        
        result += getValues(keys,obj);
        return result;
    },

    getKeys: function(obj) {
        var result = [];
        Object.keys(obj).forEach(item => {
          if ( !Array.isArray(obj[item]) ) {
            result.push(item);
          }
        });
        return result
      },

    getValues: function(keys,obj) {
    result = '';
    
    for (var i = 0 ; i < keys.length; i++) {
        result += obj[keys[i]] + ',';
    }
    result = result.slice(0,result.length-1) + '\r\n';
    
    for (var j in obj) {
        if ( Array.isArray(obj[j]) ) {
        var childern = obj[j];
        for (var k = 0; k < childern.length; k++) {
            result = result + getValues(keys, childern[k]); 
        }
        }
    }
    return result;
    }

  };
