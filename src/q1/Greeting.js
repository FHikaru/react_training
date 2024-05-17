import React from 'react';

function Greeting({name}) {
  return (
    <div>
        {/* <h1>AnyText</h1> */}
      <h3>Hello, {name}</h3>
    </div>
  );
}

export default Greeting;

//別記法
// import React from 'react';

// function Greeting(props) {
//   return (
//     <div>
//         <h1>AnyText</h1>
//       <h1>Hello, {props.name}</h1>
//     </div>
//   );
// }

// export default Greeting;

// 以下ひな形

// import React from 'react';
// 
// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* コンポーネントの中身 */}
//       </div>
//     );
//   }
// }
// 
// export default MyComponent;

// import React, { useState, useEffect } from 'react';
// 
// function MyComponent(props) {
//   const [count, setCount] = useState(0);
// 
//   useEffect(() => {
//     // コンポーネントのマウント時や状態の変更後に実行される副作用を定義
//     document.title = `Clicked ${count} times`;
//   }, [count]); // countが変更されたときだけ再実行
// 
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// 
// export default MyComponent;
