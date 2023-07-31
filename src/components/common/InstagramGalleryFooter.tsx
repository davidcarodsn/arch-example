import React, { useEffect, useState } from "react";

const URL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=`;

async function getData(token: string) {
  try {
    const dataFetched = await fetch(URL+token)
    return (await dataFetched.json()).data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

interface InstagramObject {
  id: string;
  media_url: string;
  permalink: string;
}

export const InstagramGalleryFooter = ({ instagramToken }: any) => {
  const [ imagesData, setImagesData ] = useState<InstagramObject[]>();

  useEffect(() => {
    getData(instagramToken)
      .then((response) => {
        const filteredPhotos = response.filter(
          (photo:any) => photo.media_type === 'IMAGE' || photo.media_type === "CAROUSEL_ALBUM" 
        );

        setImagesData(filteredPhotos)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="col-lg-4 col-md-6">
      <h5 className="title-footer m-b-30">Nuestros últimos posts</h5>
      <div className="gallery clearfix">
        {
          imagesData && imagesData.length > 0 && (
            imagesData.map((img, i) => {
              if (i < 6) {
                return (
                  <div className="gallery__item" key={`${img.id}${i}`}>
                    <img alt={`Gallery ${i+1}`} src={img.media_url} style={{ maxHeight: '82.5px', minWidth: '82.5px' }}/>
                    <a href={img.permalink} target="_blank" rel="noreferrer" className="pro-link">
                      <div className="overlay overlay--invisible overlay--yellow"></div>
                    </a>
                  </div>
                )
              }
            })
          )
        }
      </div>
    </div>
  );
};
