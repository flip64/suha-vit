// // components/CustomError. 

// function CustomError({ error }: any) {
//   return (
//     <div>
//       <h1>Oops! An error occurred.</h1>
//       <p>{error.statusText || error.message}</p>
//     </div>
//   );
// }

// export default CustomError;

// components/CustomError.js 
import { useRouteError } from 'react-router-dom';

function CustomError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default CustomError;
