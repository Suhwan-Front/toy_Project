import axios from "axios";

class AxiosManager {
  async axios(url, method, body) {
    const data = await axios({
      method,
      url: `https://jsonplaceholder.typicode.com/${url}`,
      data: body && body,
    });
    return data.title;
  }
}

const axiosManager = new AxiosManager();

export default axiosManager;
