import _ from 'lodash';
import printMe from './print.js';
import './style.css';
  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    //element.classList.add('hello');

    return element;
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