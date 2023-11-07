import React from 'react';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        bgColor: 'bg-green-500',
    },
    {
        src: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais',
        bgColor: 'bg-blue-500',
    },
    {
        src: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg',
        bgColor: 'bg-yellow-500',
    },
    {
        src: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais',
        bgColor: 'bg-red-500',
    },
];

const ImageCards = () => {
    return (
        <div className="flex ">
            {images.map((image, index) => (
                <div key={index} className="relative">
                    <div className={`flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full ${image.bgColor}`}>
                        <img src={image.src} alt={`Image ${index}`} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full bg-white border-2 border-white"></div>
                </div>
            ))}
        </div>
    );
};

export default ImageCards;
