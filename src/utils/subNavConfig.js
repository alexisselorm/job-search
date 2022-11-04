// Takes in the name of a route as an argument
const SubNavConfig = (routeName, $store = {}) => ({
  global: {
    mocks: {
      $route: { name: routeName },
      $store,
    },
    stubs: { FontAwesomeIcon: true },
  },
});

export default SubNavConfig;
