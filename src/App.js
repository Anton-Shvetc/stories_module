import React, { Component } from 'react';

import Stories from 'react-insta-stories';

const stories = ['https://firebasestorage.googleapis.com/v0/b/stories-web-7f36c.appspot.com/o/1.mp4?alt=media&token=54f1163b-6187-4c30-a932-01523fd8b03c',
'https://firebasestorage.googleapis.com/v0/b/stories-web-7f36c.appspot.com/o/3.mp4?alt=media&token=9a4f09fb-124c-4104-95a6-5fa39031b054'
]

function App() {
	return (
    <>


  
<video width={'200px'} height={'200px'} autoPlay muted preload>
   <source src="https://firebasestorage.googleapis.com/v0/b/stories-web-7f36c.appspot.com/o/1.mp4?alt=media&token=54f1163b-6187-4c30-a932-01523fd8b03c" />
</video>

    </>
		// <Stories
		// 	stories={stories}
		// 	defaultInterval={3000}
		// 	width={432}
		// 	height={768}
		// />
	);
};

export default App