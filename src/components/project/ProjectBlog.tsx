import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { projects } from 'src/utils/data/projectsData'
import type { ProjectDetail } from 'src/utils/types/types'

interface SliceIndexType {
  initial: number;
  final: number;
}

export const ProjectBlog = ({ setProjectDetail }: { setProjectDetail: Dispatch<SetStateAction<ProjectDetail | undefined>>; }) => {
  const [ projectBlog, setProjectBlog ] = useState<ProjectDetail[] | undefined>();
  const [ sliceIndex, setSliceIndex ] = useState<SliceIndexType>({ initial: 0, final: 2 });

  useEffect(() => {
    if (sliceIndex.final <= projects.length) {
      setProjectBlog(projects.slice(sliceIndex.initial, sliceIndex.final))
    }
  }, [projects, sliceIndex]);

  const handlePagination = () => {
    setSliceIndex({
      initial: sliceIndex.initial,
      final: sliceIndex.final + 2,
    })
  }

  return (
    <>
      <section className="project1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="filter-wrap">
                <ul id="filter" className="ul--no-style ul--inline">
                  <li className="active">
                    <span data-filter="*">All</span>
                  </li>
                  <li>
                    <span data-filter=".agency">Agency Interior</span>
                  </li>
                  <li>
                    <span data-filter=".ecomer">Ecommerce Interior</span>
                  </li>
                  <li>
                    <span data-filter=".resident">Residential Interior</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="isotope-grid" className="project--hover clearfix">
            { projectBlog?.map( project => {
              return (
                <div 
                  onClick={() => setProjectDetail(project)}
                  className="col-md-6 col-sm-12 item agency animate__animated animate__fadeIn" 
                  key={project.title}
                >
                  <div className="project__item">
                    <div className="pro__img">
                      <img alt="Project 1" src={`/img/projects/${project.img[0]}.jpg`} />
                      <a type='button' style={{ cursor: 'pointer' }} className="pro-link">
                        <div className="pro-info pro-info--darker">
                          <h2 className="company">
                            { project.client }
                          </h2>
                          <p className="cat-name">
                            <em>
                              { project.title }
                            </em>
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )
            }) }
          </div>
          {
            !(sliceIndex.final >= projects.length) && (
              <div className="see-more">
                <a 
                  onClick={handlePagination}
                  type='button' 
                  style={{ color: 'white', cursor: 'pointer' }} 
                  className="au-btn au-btn--pill au-btn--yellow au-btn--big au-btn--white"
                >
                  Cargar Más
                </a>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}
