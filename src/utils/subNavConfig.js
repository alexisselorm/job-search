// Takes in the name of a route as an argument
const SubNavConfig = (routeName) => ({
  global: {
    mocks: {
      $route: { name: routeName },
    },
    stubs: { FontAwesomeIcon: true },
  },
});

export default SubNavConfig;
