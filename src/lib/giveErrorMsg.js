export default function giveErrorMsg(err, def) {
  // thrown errors from try catch
  if (err.message && !err.request) return [err.message, "There was an error!"];
  if (err.response) {
    if (err.response.data && err.response.data.status) {
      // errors from server
      return [err.response.data.error, "Something went wrong."];
    } else {
      // error mapping with code
      switch (err.response.status) {
        case 400:
          return [
            "Looks like there's an issue with your request. Please try again or check your information.",
            "Bad Request",
          ];
        case 401:
          return [
            "You don't have permission to access this resource. Please check your login credentials.",
            "Unauthorized",
          ];
        case 403:
          return [
            "Sorry, you're not allowed to do that. Contact us if you think this is a mistake.",
            "Forbidden",
          ];
        case 404:
          return [
            "Oops! We couldn't find what you're looking for. Try searching again or visit our homepage.",
            "Not Found",
          ];
        case 500:
        case 502:
          return se("Internal Server Error");
        default:
          return ["Request failed. Please try again later.", "Request Failed"];
      }
    }
  } else if (err.request) {
    // network error. server down or internet issue
    return [
      "This could be a network issue or server being temporarily down. Please check your internet connection and try again later.",
      "We couldn't connect to the server.",
    ];
  } else {
    // default
    return [
      def ||
        "Hmm, something unexpected happened. Try again later or contact us for help.",
      "Unexpected Error",
    ];
  }
}
