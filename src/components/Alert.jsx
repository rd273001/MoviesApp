import React from 'react';

const Alert = ( { message, type } ) => {
  const alertClasses = `px-4 py-3 rounded-md ${ type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
    }`;

  return <div className={ alertClasses }>{ message }</div>;
};

export default Alert;