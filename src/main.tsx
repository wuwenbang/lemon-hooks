import ReactDOM from 'react-dom';
import TestUseAsyncEffect from './components/TestUseAsyncEffect';
import TestUseUpdateEffect from './components/TestUseUpdateEffect';
import TestuseLocalStorageState from './components/TestUseLocalStorage';
import TestUseDebounce from './components/TestUseDebounce';
import TestUseHover from './components/TestUseHover';

ReactDOM.render(
  <>
    {/* <TestUseAsyncEffect /> */}
    {/* <TestUseUpdateEffect /> */}
    {/* <TestuseLocalStorageState /> */}
    {/* <TestUseDebounce /> */}
    <TestUseHover />
  </>,
  document.getElementById('root')
);
