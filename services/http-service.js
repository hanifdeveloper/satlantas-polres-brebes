const baseURL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;
const getParams = (filter) => {
  return new URLSearchParams(filter).toString();

  // return Object.keys(filter).map(function(k) {
  //     return encodeURIComponent(k) + '=' + encodeURIComponent(filter[k])
  // }).join('&');
}

export default {
  getPage: async (slug) => {
      const apiUrl = slug ? `${baseURL}/page/${slug}` : `${baseURL}/page`;
      const request = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const response = await request.json();
      // console.log(response);
      return response;
  },
  getNews: async (filter) => {
    const params = getParams(filter);
    const apiUrl = `${baseURL}/news?${params}`;
    const request = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const response = await request.json();
    // console.log(response);
    return response;
  },
  getNewsPaginate: async (filter) => {
    const params = getParams(filter);
    const apiUrl = `${baseURL}/news/paginate?${params}`;
    const request = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const response = await request.json();
    // console.log(response);
    return response;
  },
  getDetailNews: async (slug) => {
    const apiUrl = `${baseURL}/news/${slug}`;
    const request = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const response = await request.json();
    // console.log(response);
    return response;
  }
}