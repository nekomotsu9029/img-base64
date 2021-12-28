try {
    const fs = require('fs')

    let base64Data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKfSURBVO3BQW7sWAwEwUxC979yjZdcPUCQur/NYYT5wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw+pfFMS7lDpktCpdEnoVL4pCU8Ua5RijVKsUS5eloQ3qdyhcqLSJeGOJLxJ5U3FGqVYoxRrlIsPU7kjCXeodEnoVD5J5Y4kfFKxRinWKMUa5eJ/JgmTFWuUYo1SrFEuhlE5UTlJwl9WrFGKNUqxRrn4sCR8UxI6lS4JncoTSfhNijVKsUYp1igXL1OZTOU3K9YoxRqlWKNcPJSEv0TljiT8JcUapVijFGuUi4dUuiR0Km9KQpeETqVLwonKicqbkvBJxRqlWKMUa5SLl6l0SehUuiS8KQmdSpeEE5U3JeFEpUvCE8UapVijFGuUi4eScKLyhEqXhBOVE5UuCScqXRJOVE5UuiS8qVijFGuUYo1ifvAPqZwkoVPpkvAmlS4Jd6icJOGTijVKsUYp1ijmBy9S6ZJwovKmJJyodEk4UemS8CaVLglPFGuUYo1SrFEuXpaEO5LwhEqn0iXhROUkCScqJ0n4pmKNUqxRijWK+cEDKt+UhDepdEl4k8pJEt5UrFGKNUqxRrl4WRLepHKi8iaVLgl3qJwkoVPpkvBEsUYp1ijFGuXiw1TuSMITSbhDpUtCp9IloVPpkvAvFWuUYo1SrFEuhlE5ScKJyonKHSpdErokvKlYoxRrlGKNcjFMEk5UuiR0KidJOFH5l4o1SrFGKdYoFx+WhE9KwolKl4STJNyh8psUa5RijVKsUS5epvJNKl0SuiR0Kl0SvkmlS8KbijVKsUYp1ijmB2uMYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVij/Ae49vL0EfOutAAAAABJRU5ErkJggg=='

    base64Data = base64Data.replace(/^data:image\/png;base64,/, "")

    binaryData = new Buffer.from(base64Data, 'base64').toString('binary');

    fs.writeFile("out.png", binaryData, "binary", (err)=>{
        if(err){
            console.log(err)
        }
    });
} catch (err) {
    console.log('error')
}