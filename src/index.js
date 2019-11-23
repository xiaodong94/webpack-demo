import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
     console.log('-----Looks like we are in development mode!----');
 }
  function component() {
    var element = document.createElement('div');
    var element1 = document.createElement('pre');
    var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element1.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    //element.classList.add('hello');

    return element,element1;
  }

  document.body.appendChild(component());
if (module.hot) {
     module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        //printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
       })
}