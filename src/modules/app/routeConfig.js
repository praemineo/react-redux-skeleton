const getRoutes = (name, data) => {
  const baseUrl = ``;

  const routeObject = {
    home: `${baseUrl}/`,
  }

  return routeObject[name];
}

export default getRoutes;