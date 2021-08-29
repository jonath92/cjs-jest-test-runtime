import _ from 'lodash';


export function component() {
  console.log('hi from component')
  // const element = document.createElement('div');

  // // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // return element;
}

exports.component = component

// document.body.appendChild(component());
