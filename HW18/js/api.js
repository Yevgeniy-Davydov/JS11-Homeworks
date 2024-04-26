const API_TOKEN = "";
const API_URL = "https://api.github.com";

export const getUser = async (userName) => {
  const response = await fetch(`${API_URL}/users/${userName}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data = await response.json();

  // Error handling
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getFollowers = async (userName, amount = 10) => {
  const response = await fetch(
    `${API_URL}/users/${userName}/followers?per_page=${amount}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  // Error handling
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

// class API {
//   API_URL = "https://api.github.com";
//   #API_TOKEN = "";

//   async getUser(userName) {
//     const response = await fetch(`${this.API_URL}/users/${userName}`, {
//       headers: {
//         Authorization: `Bearer ${this.#API_TOKEN}`,
//       },
//     });
//     const data = await response.json();

//     // Error handling
//     if (!response.ok) {
//       throw new Error(data.message);
//     }

//     return data;
//   }

  async getFollowers(userName, amount = 10) {
    const response = await fetch(
      `${this.API_URL}/users/${userName}/followers?per_page=${amount}`,
      {
        headers: {
          Authorization: `Bearer ${this.#API_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    // Error handling
    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  }
// }

// export const api = new API();