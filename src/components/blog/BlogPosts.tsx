import React from 'react'
import { useBlogContext } from 'src/context/blogContext';
import { BlogTypes } from 'src/context/types/blog';
import type { FacebookPost } from 'src/utils/types/types';
import { getFormatDate } from 'src/utils/helpers/getFormatDate';
export const BlogPosts = () => {
  const { state, dispatch }: any = useBlogContext();

  const handleSetFacebookPostDetail = (post: FacebookPost) => {
    dispatch({ type: BlogTypes.SET_FACEBOOK_POST_DETAIL, payload: post })
  }

  return (
    <>
      <div className="blog1 animate__animated animate__fadeIn">
        <div className="container">
          <div className="clearfix row justify-content-center">
            {
              state?.facebookPostData?.map((post: any) => {
                return (
                  <div key={post.target.id} className="col-lg-4 item design mt-5">
                    <div className="blog-item">
                      <div className="img-blog">
                        <a href='' onClick={(e) => (e.preventDefault(),  handleSetFacebookPostDetail(post))} style={{ overflow: 'hidden', maxHeight: '150px', minHeight: '150px' }}>
                          <img alt="Blog 1" src={post.image.src} />
                        </a>
                      </div>
                      <div className="blog-content">
                        <h4 className="blog-title">
                          <a href='' onClick={(e) => (e.preventDefault(),  handleSetFacebookPostDetail(post))}>
                            <p>
                              {getFormatDate(post.created_time)}
                            </p>
                          </a>
                        </h4>
                        <p className="blog-meta">
                          <em className="author">Aluplast</em>
                          <em className="cate">Facebook</em> 
                          <em className="time">{post?.comments?.length ?? '0'} Comentarios</em>
                        </p>
                        <p style={{  overflow: 'hidden', textOverflow: 'ellipsis', minHeight: '100px', maxHeight: '100px'}}>
                          {post.description}
                        </p>
                        <div className='mt-3'>
                          <span className="col-12 d-flex justify-content-center">
                            <a style={{ color: '#e91d25' }} target='_blank' href={post.target.url}>Ver en <i className="ml-1 zmdi zmdi-facebook"></i></a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
