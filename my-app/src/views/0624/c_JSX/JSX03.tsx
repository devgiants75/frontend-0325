import React from 'react'

export default function JSX03() {
  // const url = 'https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_640.jpg';

  const baseUrl = 'https://cdn.pixabay.com/photo/';

  const dog = {
    date: '2018/05/11/',
    description: '08/11/',
    imageId: 'dog-3389729_640',
    name: '웰시코기',
    theme:  {
      backgroundColor: 'gray',
      color: 'pink'
    },
    imageTheme: {
      width: '100px',
      height: '80px'
    }
  };

  return (
    <div style={dog.theme}>
      <p>{dog.name}'s Picture</p>
      <img 
        src={baseUrl + dog.date + dog.description + dog.imageId + '.jpg'}
        alt={dog.name}
        width={dog.imageTheme.width}
        height={dog.imageTheme.height}
      />
    </div>
  )
}
