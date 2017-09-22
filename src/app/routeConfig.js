const getRoutes = (name, params) => {
  const baseUrl = '';

  const routeObject = {
    home: `${baseUrl}/`,
  };

  return routeObject[name];
};

export default getRoutes;
