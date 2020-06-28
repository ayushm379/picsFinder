import React from 'react';

const ImageList = (props)=>{
    return props.images.map((image)=>{
        return <div key = {image.id}>
            <img alt = { image.description } src = {image.urls.regular} />
        </div>
    });
};

export default ImageList;