
export const publish = (context: any) => {
    // create a post request to url 

    const url = "http://localhost:3002/";
    const data = {
        "context": context
    };
    const other_params = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data),
        method: "POST"
    };
    fetch(url, other_params)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(
                "There has been a problem with your fetch operation: ",
                error.message
            );
        });
}