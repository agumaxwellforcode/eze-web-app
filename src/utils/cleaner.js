function searchToQueryparams(queryParameters) {
  let query = []; //declare payload of query parameters

  let cleanParams = ""; // formated parameters ready to be passed to the query
  if (queryParameters !== "") {
    // check if there are query parameters
    queryParameters = queryParameters.split(","); // Break query parameters into elements
    var i;
    for (i = 0; i < queryParameters.length; i++) {
      // loop through elements to determine the key for each parameter

      // Determine and map query strings to matching parameters if they match expectations
      // Convert all strings to lower case to narrow the mapping

      if ((queryParameters[i].toLowerCase()).includes('phone')) {
        query.push('&name='+queryParameters[i]);
      } else if((queryParameters[i].toLowerCase()).includes('a1') || 
        (queryParameters[i].toLowerCase()).includes('a2') || 
        (queryParameters[i].toLowerCase()).includes('b1') || 
        (queryParameters[i].toLowerCase()).includes('b2') || 
        (queryParameters[i].toLowerCase()).includes('c') || 
        (queryParameters[i].toLowerCase()).includes('c/b') || 
        (queryParameters[i].toLowerCase()).includes('c/d')) {
        query.push('&condition='+queryParameters[i]); // push the parameter to the list and attach the query key
      }
      else if((queryParameters[i].toLowerCase()).includes('64') || 
        (queryParameters[i].toLowerCase()).includes('128') || 
        (queryParameters[i].toLowerCase()).includes('256') || 
        (queryParameters[i].toLowerCase()).includes('512')) {
        query.push('&storage='+queryParameters[i]); // push the parameter to the list and attach the query key
      }
    }
    cleanParams = query
      .toString()
      .replace("[", "")
      .replace(",", "")
      .replace(",", "")
      .replace("]", ""); // format list (remove brackets and comas)
    console.log(cleanParams);
  } else {
    query = ""; // empty query if parameters are not available
  }
  return cleanParams;
}

function priceToQueryParams(priceParameters = { max: "900", min: "100" }) {
  console.log(priceParameters)
  let priceQuery = [];
  let cleanPriceParams = "";
  if (priceParameters !== "") {
    // check if there are price query parameters

    if (priceParameters.max !== "" && priceParameters.min !== "") {
      // if both parameters are present then add them to the query string
      priceQuery.push("&max=" + priceParameters.max);
      priceQuery.push("&min=" + priceParameters.min);

      // if either parameters is empty then assign a default to them
    } else if (priceParameters.max === "" && priceParameters.min !== "") {
      priceQuery.push("&max=1000000"); // Assigned $1000000 as none of the products is up to a $1000000, preferably, the highest price in the table can be returned and used instead but i am short of time
      priceQuery.push("&min=" + priceParameters.min);
    } else if (priceParameters.max == !"" && priceParameters.min === "") {
      priceQuery.push("&max=" + priceParameters.max);
      priceQuery.push("&max=1"); // Assigned $1 as none of the products is less than $1, preferably, the lowest price in the table can be returned and used instead
    } else {
      // If both are null/empty
      priceQuery = "";
    }
    cleanPriceParams = priceQuery
      .toString()
      .replace("[", "")
      .replace(",", "")
      .replace(",", "")
      .replace("]", ""); // format list (remove brackets and comas)
    console.log(cleanPriceParams);
  } else {
    priceQuery = ""; // empty query if parameters are not available
  }
  return cleanPriceParams;
}

export function buildUrl(
  queryParameters,
  priceParameters,
  page = 1,
  limit = 30
) {
  let search_params = searchToQueryparams(queryParameters);
  let price_params = priceToQueryParams(priceParameters);
  let url =
    "http://eze-backend-api.herokuapp.com/api/iphones/buy?page=" +
    page +
    "&limit=" +
    limit +
    "" +
    search_params +
    "" +
    price_params;
  return url;
}
