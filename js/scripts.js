(function () {

    $.ajax({
        beforeSend: function (request) {
            request.setRequestHeader("X-Api-Key", "yXKWXkW34lAM1lOw0wVd8A==Jfu1rmMzChv3Hxf4")
        },
        type: "GET",
        dataType: "json",
        url: "https://api.api-ninjas.com/v1/airports?min_elevation=14000",
        success: function (dataNinja) {

            $("#mytable").DataTable({
                data: dataNinja,
                columns: [
                    { 'data' : 'icao' },
                    { 'data' : 'name' },
                    { 'data' : 'city' },
                    { 'data' : 'region' },
                    { 'data' : 'elevation_ft' },
                    { 'data' : 'latitude' },
                    { 'data' : 'longitude' },
                    { 'data' : 'timezone' },
                ]
            });

        }

    });

})();