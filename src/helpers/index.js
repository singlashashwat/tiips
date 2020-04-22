// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export {getActiveRouteName, isNumeric};
