(function () {

    $.ajax({
        beforeSend: function (request) {
            request.setRequestHeader("X-Api-Key", "#API-KEY#")
        },
        type: "GET",
        dataType: "json",
        url: "https://api.api-ninjas.com/v1/airports?min_elevation=14000",
        success: function (dataNinja) {

            $("#myTable").DataTable({
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